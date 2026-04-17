import { CircleCheck as CheckCircle } from 'lucide-react';
import RevealSection from './RevealSection';

const benefits = [
  {
    title: 'Реальные кейсы внедрения',
    desc: 'Как российские e-commerce компании применяют ИИ прямо сейчас: что работает, что нет и почему',
  },
  {
    title: 'Обзор инструментов и платформ',
    desc: 'Практический гид по доступным на российском рынке AI-решениям для e-commerce: от аналитики до автоматизации',
  },
  {
    title: 'Нетворкинг в закрытом формате',
    desc: 'Общение с лидерами отрасли, экспертами и практиками в камерной обстановке без лишнего шума',
  },
  {
    title: 'Перспективы 2026 и дальше',
    desc: 'Что ждёт e-commerce в ближайшие годы и как ИИ меняет правила конкуренции на российском рынке',
  },
];

export default function MeetupBenefits() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A2E] mb-4 tracking-tight">
            Что вы получите
          </h2>
          <div className="w-16 h-[3px] bg-[#1A1A2E] mx-auto mb-6" />
          <p className="text-gray-600 text-lg leading-relaxed">
            Практический митап без воды – только реальный опыт и конкретные инструменты
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((item, i) => (
            <RevealSection key={item.title} delay={i * 100}>
              <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-[#FECE33] transition-all hover:shadow-lg group h-full">
                <div className="w-10 h-10 bg-[#FECE33] rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 text-[#1A1A2E]" />
                </div>
                <h3 className="text-lg font-black text-[#1A1A2E] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
