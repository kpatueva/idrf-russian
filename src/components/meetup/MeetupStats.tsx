import idrfLogoFull from '../../assets/idrf_logo-2.png';
import RevealSection from './RevealSection';
import CountUp from './CountUp';

export default function MeetupStats() {
  return (
    <section className="py-12 bg-[#1A1A2E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <RevealSection className="rounded-2xl bg-[#FECE33] border-2 border-[#1A1A2E] flex items-center justify-center overflow-hidden p-0">
            <img src={idrfLogoFull} alt="IDRF" className="w-[3.7%] h-[3.7%] object-contain" />
          </RevealSection>

          <RevealSection delay={100} className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #4A1D6A, #2D1B4E)' }}>
            <div className="text-5xl lg:text-6xl font-black mb-1">
              <CountUp end={3} duration={1200} />
            </div>
            <div className="text-[#FECE33] text-xs font-bold tracking-widest uppercase">Конференции</div>
          </RevealSection>

          <RevealSection delay={200} className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #6B2D5B, #4A1D3D)' }}>
            <div className="text-5xl lg:text-6xl font-black mb-1">
              <CountUp end={50} suffix="+" duration={1500} />
            </div>
            <div className="text-[#FECE33] text-xs font-bold tracking-widest uppercase">Митапов</div>
          </RevealSection>

          <RevealSection delay={300} className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #3D2D6B, #2D1B4E)' }}>
            <div className="text-5xl lg:text-6xl font-black mb-1">
              <CountUp end={40} suffix="+" duration={1500} />
            </div>
            <div className="text-[#FECE33] text-xs font-bold tracking-widest uppercase">Вебинаров</div>
          </RevealSection>
        </div>

        <RevealSection>
          <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm font-medium">
            {[
              { flag: '\u{1F1E6}\u{1F1EA}', city: 'Дубай' },
              { flag: '\u{1F1F2}\u{1F1FD}', city: 'Мехико' },
              { flag: '\u{1F1EE}\u{1F1E9}', city: 'Джакарта' },
              { flag: '\u{1F1F0}\u{1F1FF}', city: 'Алматы' },
              { flag: '\u{1F1F0}\u{1F1F7}', city: 'Сеул' },
              { flag: '\u{1F1EC}\u{1F1E7}', city: 'Лондон' },
            ].map((item) => (
              <span key={item.city} className="flex items-center gap-1.5">
                <span className="text-base">{item.flag}</span>
                {item.city}
              </span>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
