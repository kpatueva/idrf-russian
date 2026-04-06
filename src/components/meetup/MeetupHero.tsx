import { Calendar, Clock, MapPin } from 'lucide-react';
import MeetupRegistrationForm from '../MeetupRegistrationForm';
import HeroBackground from '../HeroBackground';

interface MeetupHeroProps {
  formRef: React.RefObject<HTMLDivElement>;
}

export default function MeetupHero({ formRef }: MeetupHeroProps) {
  return (
    <section className="pt-28 pb-20 bg-[#1A1A2E] relative overflow-hidden">
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[55%_43%] gap-10 lg:gap-12 items-start">
          <div className="hero-entrance" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-7 hero-entrance" style={{ animationDelay: '0.15s' }}>
              <span className="hero-badge bg-[#FECE33] text-[#1A1A2E] text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
                IDRF x 24TTL
              </span>
              <span className="bg-white/10 text-white/70 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10">
                Оффлайн
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white mb-6 leading-[1.08] tracking-tight hero-entrance" style={{ animationDelay: '0.25s' }}>
              ИИ В E-COMMERCE:{' '}
              <span className="text-[#FECE33] italic hero-text-glow">РОССИЙСКАЯ</span>{' '}
              ПРАКТИКА ВНЕДРЕНИЯ
            </h1>

            <p className="text-white/75 text-lg mb-8 leading-relaxed max-w-lg hero-entrance" style={{ animationDelay: '0.4s' }}>
              Кейсы компаний, инструменты, перспективы
            </p>

            <div className="flex flex-wrap gap-5 text-white/80 text-sm font-medium hero-entrance" style={{ animationDelay: '0.5s' }}>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#FECE33]" />
                23 апреля 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FECE33]" />
                9:30 -- 13:00 МСК
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FECE33]" />
                Москва, Rybakov Tower
              </span>
            </div>
          </div>

          <div ref={formRef} className="hero-entrance" style={{ animationDelay: '0.45s' }}>
            <MeetupRegistrationForm variant="dark" id="register" />
          </div>
        </div>
      </div>
    </section>
  );
}
