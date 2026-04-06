import { Calendar, Clock, MapPin, Users, Globe, Mic, ArrowRight, Sparkles, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroBackground from '../HeroBackground';
import { CountUp } from './Reveal';
import { events } from '../../data/events';
import idrfLogo from '../../assets/idrf_logo.png';

const nextEvent = events.find((e) => e.status === 'registration-open') || events[0];

export default function HeroSection() {
  const upcomingCount = events.filter((e) => e.status !== 'past').length;

  return (
    <section className="pt-28 pb-20 lg:pt-32 lg:pb-28 bg-[#0F0F1A] relative overflow-hidden min-h-[90vh] flex items-center">
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center">
          <div>
            <div className="hero-entrance flex items-center gap-3 mb-6" style={{ animationDelay: '0.1s' }}>
              <img src={idrfLogo} alt="IDRF" className="h-12 w-12" />
              <span className="hero-badge bg-[#FECE33] text-[#0F0F1A] text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
                International Digital Retail Forum
              </span>
            </div>

            <h1
              className="hero-entrance text-5xl md:text-6xl lg:text-[72px] font-black text-white mb-6 leading-[1.05] tracking-tight"
              style={{ animationDelay: '0.2s' }}
            >
              Площадка для лидеров{' '}
              <span className="text-[#FECE33] hero-text-glow">цифрового ритейла</span>
            </h1>

            <p
              className="hero-entrance text-white/65 text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
              style={{ animationDelay: '0.35s' }}
            >
              Митапы, вебинары и конференции для тех, кто создает будущее e-commerce. Реальные кейсы,
              практические инструменты, профессиональный нетворкинг.
            </p>

            <div className="hero-entrance flex flex-wrap gap-4" style={{ animationDelay: '0.45s' }}>
              <a
                href="#events"
                className="inline-flex items-center gap-2 bg-[#FECE33] text-[#0F0F1A] px-8 py-4 rounded-full font-bold text-base hover:bg-[#e5bc2d] transition-all transform hover:scale-[1.03] shadow-lg"
              >
                Ближайшие мероприятия
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold text-base hover:border-[#FECE33] hover:text-[#FECE33] transition-all"
              >
                О платформе
              </a>
            </div>
          </div>

          <div className="hero-entrance hidden lg:block" style={{ animationDelay: '0.5s' }}>
            <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#FECE33]/40 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-[#FECE33]" />
                <span className="text-[#FECE33] text-xs font-bold uppercase tracking-wider">Ближайшее</span>
              </div>
              <h3 className="text-white font-black text-xl mb-2 leading-tight">{nextEvent.title}</h3>
              <p className="text-white/50 text-sm mb-5">{nextEvent.subtitle}</p>
              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Calendar className="w-3.5 h-3.5 text-[#FECE33]" />
                  {nextEvent.date}
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Clock className="w-3.5 h-3.5 text-[#FECE33]" />
                  {nextEvent.time}
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#FECE33]" />
                  {nextEvent.location}
                </div>
              </div>
              <Link
                to={`/events/${nextEvent.slug}`}
                className="flex items-center gap-2 bg-[#FECE33] text-[#0F0F1A] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#e5bc2d] transition-all w-fit"
              >
                Подробнее
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-16">
          {[
            { icon: Calendar, value: upcomingCount, suffix: '', label: 'Ближайших событий' },
            { icon: Users, value: 500, suffix: '+', label: 'Участников ежегодно' },
            { icon: Mic, value: 50, suffix: '+', label: 'Спикеров' },
            { icon: Globe, value: 6, suffix: '+', label: 'Стран проведения' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="hero-entrance bg-white/[0.04] backdrop-blur-sm border border-white/[0.07] rounded-xl p-4 text-center group hover:border-[#FECE33]/30 transition-all duration-300"
              style={{ animationDelay: `${0.55 + i * 0.08}s` }}
            >
              <stat.icon className="w-5 h-5 text-[#FECE33] mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-black text-white mb-0.5">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/40 text-xs font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
