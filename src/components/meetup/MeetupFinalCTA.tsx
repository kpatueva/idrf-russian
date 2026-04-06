import { CheckCircle, ArrowRight } from 'lucide-react';
import HeroBackground from '../HeroBackground';
import RevealSection from './RevealSection';

const benefits = [
  'Доступ к закрытому митапу с ведущими экспертами рынка',
  'Практические кейсы и инструменты, которые можно применить сразу',
  'Нетворкинг с ключевыми игроками российского e-commerce',
  'Материалы митапа и презентации спикеров',
];

export default function MeetupFinalCTA() {
  return (
    <section className="py-20 bg-[#1A1A2E] relative overflow-hidden">
      <HeroBackground />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <RevealSection>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Готовы присоединиться?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Закрытый митап для профессионалов e-commerce. Места ограничены -- регистрируйтесь сейчас.
          </p>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="bg-white rounded-2xl p-8 mb-8 max-w-xl mx-auto text-left">
            <h3 className="font-black text-[#1A1A2E] text-lg mb-5">Зарегистрируйтесь и получите:</h3>
            <div className="space-y-3">
              {benefits.map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FECE33] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#1A1A2E]" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <a
            href="#register"
            className="inline-flex items-center gap-2 bg-[#FECE33] text-[#1A1A2E] font-bold px-10 py-4 rounded-full text-lg hover:bg-[#e5bc2d] transition-all transform hover:scale-[1.03] shadow-lg uppercase tracking-wider"
          >
            Зарегистрироваться сейчас
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-white/40 text-xs mt-5">
            Все заявки проходят премодерацию. Количество мест ограничено.
          </p>
        </RevealSection>
      </div>
    </section>
  );
}
