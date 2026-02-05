import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface RegistrationData {
  firstName: string;
  lastName: string;
  company: string;
  position: string;
  email: string;
  phone: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    const supabase = createClient(supabaseUrl, supabaseKey);

    const data: RegistrationData = await req.json();

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.company || !data.position || !data.email || !data.phone) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Save registration to database
    const { data: registration, error: dbError } = await supabase
      .from("registrations")
      .insert({
        first_name: data.firstName,
        last_name: data.lastName,
        company: data.company,
        position: data.position,
        email: data.email,
        phone: data.phone,
        status: "pending",
        email_sent: false,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save registration" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Send confirmation email if RESEND_API_KEY is configured
    let emailSent = false;
    if (resendApiKey) {
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "IDRF Forum <noreply@yourdomain.com>", // Change to your verified domain
            to: [data.email],
            subject: "Подтверждение регистрации на IDRF Forum",
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h1 style="color: #FECE33; font-size: 32px; font-weight: bold;">IDRF Forum</h1>
                <h2 style="color: #000; font-size: 24px; margin-top: 30px;">Спасибо за регистрацию!</h2>

                <p style="color: #333; font-size: 16px; line-height: 1.6;">
                  Здравствуйте, ${data.firstName} ${data.lastName}!
                </p>

                <p style="color: #333; font-size: 16px; line-height: 1.6;">
                  Мы получили вашу заявку на участие в <strong>AGENTIC COMMERCE FORUM</strong>.
                </p>

                <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 30px 0;">
                  <h3 style="color: #000; margin-top: 0;">Детали мероприятия:</h3>
                  <p style="color: #333; margin: 10px 0;"><strong>Дата:</strong> 12 февраля 2026</p>
                  <p style="color: #333; margin: 10px 0;"><strong>Время:</strong> 10:00 - 13:00</p>
                  <p style="color: #333; margin: 10px 0;"><strong>Место:</strong> Москва, SOK Rybakov Tower<br/>Ленинградский проспект, 36 ст11</p>
                </div>

                <p style="color: #333; font-size: 16px; line-height: 1.6;">
                  Ваша заявка находится на рассмотрении. Все заявки проходят премодерацию, и мы свяжемся с вами в ближайшее время для подтверждения участия.
                </p>

                <p style="color: #666; font-size: 14px; margin-top: 40px;">
                  С уважением,<br/>
                  Команда IDRF Forum
                </p>

                <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />

                <p style="color: #999; font-size: 12px;">
                  По всем вопросам: <a href="mailto:info@idrf.online" style="color: #FECE33;">info@idrf.online</a>
                </p>
              </div>
            `,
          }),
        });

        if (emailResponse.ok) {
          emailSent = true;
          // Update registration to mark email as sent
          await supabase
            .from("registrations")
            .update({ email_sent: true })
            .eq("id", registration.id);
        } else {
          console.error("Email sending failed:", await emailResponse.text());
        }
      } catch (emailError) {
        console.error("Error sending email:", emailError);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Registration submitted successfully",
        emailSent,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
