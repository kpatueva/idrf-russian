import { useState } from 'react';
import { Calendar, Users, Globe, Mic, ArrowRight } from 'lucide-react';

import EventCard from '../components/EventCard';
import { events, EventFormat } from '../data/events';
import idrfLogo from '../assets/idrf_logo.png';

const filters: { key: 'all' | EventFormat; label: string }[] = [
  { key: 'all', label: 'Все' },
  { key: 'meetup', label: 'Митапы' },
  { key: 'webinar', label: 'Вебинары' },
  { key: 'conference', label: 'Конференции' },
];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<'all' | EventFormat>('all');

  const filteredEvents = activeFilter === 'all'
    ? events
    : events.filter((e) => e.format === activeFilter);

  const upcomingCount = events.filter((e) => e.status !== 'past').length;

  return (
    <>
      <section className="pt-32 pb-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(254,206,51,0.15),_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.1),_transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-8">
              <img src={idrfLogo} alt="IDRF" className="h-16 w-16" />
              <div>
                <span className="text-[#FECE33] text-sm font-bold tracking-widest uppercase">International Digital Retail Forum</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
              Площадка для лидеров
              <br />
              <span className="text-[#FECE33]">цифрового ритейла</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              Митапы, вебинары и конференции для тех, кто создает будущее e-commerce.
              Реальные кейсы, практические инструменты, профессиональный нетворкинг.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#events"
                className="inline-flex items-center bg-[#FECE33] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#ffd84d] transition-all transform hover:scale-[1.02] shadow-lg"
              >
                Ближайшие мероприятия
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-[#FECE33] hover:text-[#FECE33] transition-all"
              >
                О платформе
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { icon: Calendar, value: `${upcomingCount}`, label: 'Ближайших событий' },
              { icon: Users, value: '500+', label: 'Участников ежегодно' },
              { icon: Mic, value: '50+', label: 'Спикеров' },
              { icon: Globe, value: '6+', label: 'Стран проведения' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
                <stat.icon className="w-6 h-6 text-[#FECE33] mx-auto mb-3" />
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">Мероприятия</h2>
            <div className="w-20 h-1 bg-[#FECE33] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Календарь предстоящих и прошедших мероприятий IDRF
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                  activeFilter === f.key
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">Мероприятий в этой категории пока нет</p>
            </div>
          )}
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">О платформе IDRF</h2>
            <div className="w-20 h-1 bg-[#FECE33] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                IDRF (International Digital Retail Forum) -- это профессиональная площадка, объединяющая лидеров
                цифрового ритейла, e-commerce и технологий с 2019 года.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Мы проводим закрытые митапы, экспертные вебинары и международные конференции, где топ-менеджеры
                и технические лидеры делятся практическим опытом внедрения инноваций.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Наши мероприятия прошли в Москве, Дубае, Мехико, Джакарте, Алматы, Сеуле и Лондоне.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '3', label: 'Конференции', sub: 'международного масштаба' },
                { value: '50+', label: 'Митапов', sub: 'оффлайн-мероприятий' },
                { value: '40+', label: 'Вебинаров', sub: 'онлайн-трансляций' },
                { value: '7+', label: 'Городов', sub: 'по всему миру' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#FECE33] transition-colors">
                  <div className="text-4xl font-black text-black mb-1">{stat.value}</div>
                  <div className="text-[#FECE33] font-bold text-sm mb-1">{stat.label}</div>
                  <div className="text-gray-500 text-xs">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(254,206,51,0.08),_transparent_60%)]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Хотите выступить или стать партнером?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Мы всегда открыты к сотрудничеству. Свяжитесь с нами, чтобы обсудить участие в качестве спикера,
            партнера или спонсора мероприятий IDRF.
          </p>
          <a
            href="mailto:info@idrf.online"
            className="inline-flex items-center bg-[#FECE33] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-[#ffd84d] transition-all transform hover:scale-[1.02] shadow-lg"
          >
            Написать нам
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </>
  );
}
