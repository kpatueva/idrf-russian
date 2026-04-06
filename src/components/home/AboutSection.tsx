import { Reveal, CountUp } from './Reveal';
import photo1 from '../../assets/081607.jpg';
import photo2 from '../../assets/081612.jpg';
import photo3 from '../../assets/081639.jpg';

const stats = [
  { value: 3, label: 'Конференции', sub: 'международного масштаба' },
  { value: 50, suffix: '+', label: 'Митапов', sub: 'оффлайн-мероприятий' },
  { value: 40, suffix: '+', label: 'Вебинаров', sub: 'онлайн-трансляций' },
  { value: 7, suffix: '+', label: 'Городов', sub: 'по всему миру' },
];

const geography = [
  { flag: '\u{1F1F7}\u{1F1FA}', city: 'Москва' },
  { flag: '\u{1F1F0}\u{1F1FF}', city: 'Алматы' },
  { flag: '\u{1F1E6}\u{1F1F2}', city: 'Ереван' },
  { flag: '\u{1F1EC}\u{1F1EA}', city: 'Тбилиси' },
  { flag: '\u{1F1E6}\u{1F1EA}', city: 'Дубай' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
            О платформе IDRF
          </h2>
          <div className="w-16 h-[3px] bg-[#FECE33] mx-auto mb-6" />
          <p className="text-gray-500 text-lg leading-relaxed">
            Профессиональная площадка, объединяющая лидеров цифрового ритейла, e-commerce и технологий с 2019
            года
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          <div>
            <Reveal>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                IDRF (International Digital Retail Forum) проводит закрытые митапы, экспертные вебинары и
                международные конференции, где топ-менеджеры и технические лидеры делятся практическим опытом
                внедрения инноваций.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Наши мероприятия прошли в Москве, Дубае, Алматы, Ереване, Тбилиси и других городах мира.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-2xl p-5 border-2 border-gray-200 hover:border-[#FECE33] transition-all hover:shadow-md group"
                  >
                    <div className="text-3xl font-black text-black mb-0.5">
                      <CountUp end={stat.value} suffix={stat.suffix || ''} />
                    </div>
                    <div className="text-[#FECE33] font-bold text-sm mb-0.5">{stat.label}</div>
                    <div className="text-gray-400 text-xs">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="grid grid-cols-2 gap-3 h-[380px]">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={photo1}
                  alt="IDRF"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="grid grid-rows-2 gap-3">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={photo2}
                    alt="IDRF"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={photo3}
                    alt="IDRF"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 text-gray-500 text-sm font-medium">
            {geography.map((item) => (
              <span
                key={item.city}
                className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-gray-200 hover:border-[#FECE33] transition-colors"
              >
                <span className="text-base">{item.flag}</span>
                {item.city}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
