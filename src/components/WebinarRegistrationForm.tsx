import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

interface WebinarRegistrationFormProps {
  variant?: 'dark' | 'light';
  id?: string;
}

type FormState = 'idle' | 'loading' | 'error';

const inputBase =
  'w-full h-12 px-4 rounded-lg text-white text-base transition-all outline-none placeholder:text-white/40 focus:border-[#FECE33]';
const inputDark =
  'bg-white/5 border border-white/15 focus:shadow-[0_0_0_3px_rgba(254,206,51,0.2)]';
const inputLight =
  'bg-white border-2 border-gray-200 text-gray-700 placeholder:text-gray-400 focus:border-[#FECE33] focus:text-gray-900';

export default function WebinarRegistrationForm({ variant = 'dark', id }: WebinarRegistrationFormProps) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<FormState>('idle');
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!privacyChecked || !consentChecked) {
      setError('Пожалуйста, подтвердите согласие с политикой конфиденциальности и обработкой персональных данных');
      return;
    }
    setError('');
    setFormState('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      telegram: formData.get('telegram'),
      company: formData.get('company'),
      position: formData.get('position'),
      event: 'Q-comm Полка 2026 Webinar',
      timestamp: new Date().toISOString(),
    };

    try {
      const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_WEBINAR_URL;
      if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL !== 'YOUR_GOOGLE_SCRIPT_WEBINAR_URL_HERE') {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      }
      navigate('/events/ai-content-automation-webinar/thank-you');
    } catch {
      setFormState('error');
    }
  };

  const isDark = variant === 'dark';
  const inputClass = `${inputBase} ${isDark ? inputDark : inputLight}`;

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`rounded-2xl p-8 space-y-4 ${isDark ? 'bg-white/[0.06] border border-white/10' : 'bg-white border-2 border-gray-100 shadow-xl'}`}
    >
      <div className="mb-6">
        <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
          Участвовать бесплатно
        </h3>
        <p className={`text-sm ${isDark ? 'text-white/50' : 'text-gray-400'}`}>
          Введите данные — ссылку пришлём на почту
        </p>
      </div>

      <input type="text" name="firstName" placeholder="Имя*" required className={inputClass} />
      <input type="email" name="email" placeholder="Email*" required className={inputClass} />
      <input type="tel" name="phone" placeholder="Телефон*" required className={inputClass} />
      <input type="text" name="telegram" placeholder="Telegram (@username)" className={inputClass} />
      <input type="text" name="company" placeholder="Компания*" required className={inputClass} />
      <input type="text" name="position" placeholder="Должность*" required className={inputClass} />

      <div className="space-y-3 pt-1">
        <label className={`flex items-start gap-2 cursor-pointer ${isDark ? 'text-white/60' : 'text-gray-500'} text-xs leading-relaxed`}>
          <input
            type="checkbox"
            checked={privacyChecked}
            onChange={(e) => setPrivacyChecked(e.target.checked)}
            className="mt-0.5 w-3.5 h-3.5 accent-[#FECE33] flex-shrink-0"
          />
          <span>
            Отправляя информацию, вы соглашаетесь с условиями{' '}
            <a
              href="https://24ttl.ru/wp-content/uploads/2026/01/politika-konfidenczialnosti-01-09-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FECE33] hover:underline"
            >
              Политики конфиденциальности
            </a>{' '}
            ООО «24ТТЛ».
          </span>
        </label>
        <label className={`flex items-start gap-2 cursor-pointer ${isDark ? 'text-white/60' : 'text-gray-500'} text-xs leading-relaxed`}>
          <input
            type="checkbox"
            checked={consentChecked}
            onChange={(e) => setConsentChecked(e.target.checked)}
            className="mt-0.5 w-3.5 h-3.5 accent-[#FECE33] flex-shrink-0"
          />
          <span>
            Я даю согласие на обработку персональных данных и принимаю условия{' '}
            <a
              href="https://24ttl.ru/wp-content/uploads/2026/01/soglasie-na-obrabotku-personalnyh-dannyh-dlya-sajta.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FECE33] hover:underline"
            >
              Согласия на обработку ПДн
            </a>.
          </span>
        </label>
      </div>

      {(error || formState === 'error') && (
        <div className="bg-red-500/20 border border-red-500/40 text-red-400 px-4 py-3 rounded-xl text-sm">
          {error || 'Ошибка при отправке. Попробуйте ещё раз.'}
        </div>
      )}

      <button
        type="submit"
        disabled={formState === 'loading'}
        className="w-full h-[52px] bg-[#FECE33] hover:bg-[#ffd84d] text-black font-bold text-base rounded-full transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 uppercase tracking-wide mt-2"
      >
        {formState === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Отправка...
          </>
        ) : (
          'Зарегистрироваться бесплатно'
        )}
      </button>
    </form>
  );
}
