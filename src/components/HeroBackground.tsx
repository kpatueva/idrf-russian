import { useEffect, useRef } from 'react';

function Particles({ count = 40 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    interface Particle {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      alpha: number;
      pulse: number;
      pulseSpeed: number;
    }

    const particles: Particle[] = [];

    function resize() {
      w = canvas!.parentElement?.clientWidth ?? window.innerWidth;
      h = canvas!.parentElement?.clientHeight ?? window.innerHeight;
      canvas!.width = w;
      canvas!.height = h;
    }

    function init() {
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 2 + 0.5,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          alpha: Math.random() * 0.5 + 0.1,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.005,
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        const a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(254, 206, 51, ${a})`;
        ctx!.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const lineAlpha = (1 - dist / 120) * 0.08;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(254, 206, 51, ${lineAlpha})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    window.addEventListener('resize', () => {
      resize();
      init();
    });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="hero-grid absolute inset-0" />

      <div
        className="hero-glow-orb absolute"
        style={{
          width: 600,
          height: 600,
          top: '-15%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(254,206,51,0.30) 0%, rgba(254,206,51,0) 65%)',
          animation: 'hero-orb-drift 12s ease-in-out infinite, hero-orb-breathe 5s ease-in-out infinite',
        }}
      />
      <div
        className="hero-glow-orb absolute"
        style={{
          width: 450,
          height: 450,
          top: '20%',
          right: '-8%',
          background: 'radial-gradient(circle, rgba(20,184,166,0.18) 0%, rgba(20,184,166,0) 65%)',
          animation: 'hero-orb-drift 15s ease-in-out 2s infinite reverse, hero-orb-breathe 6s ease-in-out 1s infinite',
        }}
      />
      <div
        className="hero-glow-orb absolute"
        style={{
          width: 350,
          height: 350,
          bottom: '-10%',
          left: '30%',
          background: 'radial-gradient(circle, rgba(254,206,51,0.22) 0%, rgba(254,206,51,0) 60%)',
          animation: 'hero-orb-drift 10s ease-in-out 4s infinite, hero-orb-breathe 4s ease-in-out 2s infinite',
        }}
      />

      <div
        className="hero-ring absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: '50%',
          left: '50%',
          border: '1px solid rgba(254,206,51,0.06)',
          animation: 'hero-ring-expand 8s ease-in-out infinite',
        }}
      />
      <div
        className="hero-ring absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: '50%',
          left: '50%',
          border: '1px solid rgba(254,206,51,0.04)',
          animation: 'hero-ring-expand 8s ease-in-out 2.7s infinite',
        }}
      />
      <div
        className="hero-ring absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: '50%',
          left: '50%',
          border: '1px solid rgba(254,206,51,0.03)',
          animation: 'hero-ring-expand 8s ease-in-out 5.3s infinite',
        }}
      />

      <div className="hero-scan-line absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FECE33]/20 to-transparent" />

      <div
        className="hero-streak absolute"
        style={{
          width: 200,
          height: 1,
          top: '25%',
          left: '-5%',
          background: 'linear-gradient(90deg, transparent, rgba(254,206,51,0.4), transparent)',
          animation: 'hero-streak-fly 4s ease-in-out infinite',
        }}
      />
      <div
        className="hero-streak absolute"
        style={{
          width: 150,
          height: 1,
          top: '65%',
          left: '-5%',
          background: 'linear-gradient(90deg, transparent, rgba(254,206,51,0.3), transparent)',
          animation: 'hero-streak-fly 5s ease-in-out 2s infinite',
        }}
      />
      <div
        className="hero-streak absolute"
        style={{
          width: 120,
          height: 1,
          top: '45%',
          right: '-5%',
          background: 'linear-gradient(270deg, transparent, rgba(20,184,166,0.3), transparent)',
          animation: 'hero-streak-fly-reverse 6s ease-in-out 1s infinite',
        }}
      />

      <Particles count={35} />

      <div
        className="absolute rounded-full"
        style={{
          width: 4,
          height: 4,
          top: '15%',
          left: '20%',
          background: '#FECE33',
          boxShadow: '0 0 12px 4px rgba(254,206,51,0.4)',
          animation: 'hero-sparkle 3s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 3,
          height: 3,
          top: '70%',
          left: '75%',
          background: '#FECE33',
          boxShadow: '0 0 10px 3px rgba(254,206,51,0.3)',
          animation: 'hero-sparkle 4s ease-in-out 1.5s infinite',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 3,
          height: 3,
          top: '40%',
          left: '85%',
          background: '#14B8A6',
          boxShadow: '0 0 10px 3px rgba(20,184,166,0.3)',
          animation: 'hero-sparkle 3.5s ease-in-out 0.8s infinite',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 2,
          height: 2,
          top: '80%',
          left: '15%',
          background: '#14B8A6',
          boxShadow: '0 0 8px 3px rgba(20,184,166,0.25)',
          animation: 'hero-sparkle 5s ease-in-out 2.5s infinite',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F1A] via-transparent to-[#0F0F1A] opacity-40" />
    </div>
  );
}
