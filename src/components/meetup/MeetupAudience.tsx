import { Building2, Briefcase, Monitor, BarChart3 } from 'lucide-react';
import RevealSection from './RevealSection';

const audience = [
  {
    icon: Building2,
    title: 'Руководители e-commerce',
    desc: 'Директора и вице-президенты по digital и e-commerce, которые ищут конкретные инструменты роста',
  },
  {
    icon: Briefcase,
    title: 'Топ-менеджмент брендов',
    desc: 'Коммерческие директора и директора по маркетингу FMCG и retail-компаний',
  },
  {
    icon: Monitor,
    title: 'Технические лидеры',
    desc: 'CTO и технические директора, оценивающие AI-стек для e-commerce',
  },
  {
    icon: BarChart3,
    title: 'Product & Analytics',
    desc: 'Продакт-менеджеры и аналитики, ищущие прикладные AI-решения для своих задач',
  },
];

export default function MeetupAudience() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A2E] mb-4 tracking-tight">
            Для кого этот митап
          </h2>
          <div className="w-16 h-[3px] bg-[#FECE33] mx-auto mb-6" />
          <p className="text-gray-600 text-lg">
            Мероприятие для тех, кто принимает решения и внедряет ИИ на практике
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {audience.map((item, i) => (
            <RevealSection key={item.title} delay={i * 100}>
              <div className="bg-white rounded-2xl p-6 h-full hover:shadow-md transition-all hover:-translate-y-0.5 group">
                <div className="w-12 h-12 bg-[#FECE33] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-[#1A1A2E]" />
                </div>
                <h4 className="font-black text-[#1A1A2E] text-base mb-1.5">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
