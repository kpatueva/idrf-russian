import { useState } from 'react';
import EventCard from '../EventCard';
import { Reveal } from './Reveal';
import { events } from '../../data/events';

type TimeFilter = 'upcoming' | 'past';

const filters: { key: TimeFilter; label: string }[] = [
  { key: 'upcoming', label: 'Предстоящие' },
  { key: 'past', label: 'Прошедшие' },
];

export default function EventsSection() {
  const [activeFilter, setActiveFilter] = useState<TimeFilter>('upcoming');

  const filteredEvents = events.filter((e) => {
    if (activeFilter === 'upcoming') {
      return e.status === 'upcoming' || e.status === 'registration-open';
    }
    return e.status === 'past';
  });

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">Мероприятия</h2>
          <div className="w-16 h-[3px] bg-[#FECE33] mx-auto mb-5" />
          <p className="text-gray-500 text-lg">Календарь предстоящих и прошедших мероприятий IDRF</p>
        </Reveal>

        <Reveal className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                activeFilter === f.key
                  ? 'bg-black text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, i) => (
            <Reveal key={event.id} delay={i * 80}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">Мероприятий в этой категории пока нет</p>
          </div>
        )}
      </div>
    </section>
  );
}
