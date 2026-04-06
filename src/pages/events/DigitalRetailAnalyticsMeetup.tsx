import { useEffect, useRef, useState } from 'react';
import MeetupHero from '../../components/meetup/MeetupHero';
import MeetupStats from '../../components/meetup/MeetupStats';
import MeetupBenefits from '../../components/meetup/MeetupBenefits';
import MeetupProgram from '../../components/meetup/MeetupProgram';
import MeetupSpeakers from '../../components/meetup/MeetupSpeakers';
import MeetupAudience from '../../components/meetup/MeetupAudience';
import MeetupVenue from '../../components/meetup/MeetupVenue';
import MeetupFinalCTA from '../../components/meetup/MeetupFinalCTA';
import { ArrowRight } from 'lucide-react';

const FONT = { fontFamily: "'Manrope', system-ui, sans-serif" };

export default function DigitalRetailAnalyticsMeetup() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const heroFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { threshold: 0 }
    );
    const el = heroFormRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={FONT} className="pb-20 lg:pb-0">
      <MeetupHero formRef={heroFormRef} />
      <MeetupStats />
      <MeetupBenefits />
      <MeetupProgram />
      <MeetupSpeakers />
      <MeetupAudience />
      <MeetupVenue />
      <MeetupFinalCTA />

      <div
        className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ${
          showStickyBar ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-[#1A1A2E]/95 backdrop-blur-md border-t border-white/10 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <p className="text-white/80 text-sm font-medium hidden sm:block truncate">
              ИИ в e-commerce: российская практика{' '}
              <span className="text-white/40">-- 23 апреля, Rybakov Tower</span>
            </p>
            <p className="text-white/80 text-xs font-medium sm:hidden truncate">
              23 апреля -- Москва
            </p>
            <a
              href="#register"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FECE33] text-[#1A1A2E] font-bold text-sm px-6 py-2.5 rounded-full hover:bg-[#e5bc2d] transition-colors whitespace-nowrap uppercase tracking-wide"
            >
              Регистрация
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
