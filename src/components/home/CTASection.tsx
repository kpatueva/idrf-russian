import { ArrowRight } from 'lucide-react';
import HeroBackground from '../HeroBackground';
import { Reveal } from './Reveal';

export default function CTASection() {
  return (
    <section id="contacts" className="py-20 bg-[#0F0F1A] relative overflow-hidden">
      <HeroBackground />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">
            Хотите выступить или стать партнером?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Мы всегда открыты к сотрудничеству. Свяжитесь с нами, чтобы обсудить участие в качестве спикера,
            партнера или спонсора мероприятий IDRF.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <a
            href="mailto:hello@24ttl.net"
            className="inline-flex items-center gap-2 bg-[#FECE33] text-[#0F0F1A] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#e5bc2d] transition-all transform hover:scale-[1.03] shadow-lg"
          >
            Написать нам
            <ArrowRight className="w-5 h-5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
