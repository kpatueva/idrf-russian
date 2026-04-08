import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { EventData, formatLabels, statusLabels } from '../data/events';

const formatColors: Record<string, string> = {
  meetup: 'bg-blue-100 text-blue-800',
  webinar: 'bg-emerald-100 text-emerald-800',
  conference: 'bg-amber-100 text-amber-800',
};

const statusColors: Record<string, string> = {
  upcoming: 'bg-gray-800 text-white',
  past: 'bg-gray-200 text-gray-600',
  'registration-open': 'bg-[#FECE33] text-black',
};

export default function EventCard({ event }: { event: EventData }) {
  const isPast = event.status === 'past';

  return (
    <Link
      to={`/events/${event.slug}`}
      className={`group flex flex-col bg-white rounded-3xl border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:border-[#FECE33] hover:shadow-xl w-full ${isPast ? 'opacity-80 hover:opacity-100' : ''}`}
    >
      <div className="p-8 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${formatColors[event.format]}`}>
            {formatLabels[event.format]}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColors[event.status]}`}>
            {statusLabels[event.status]}
          </span>
          {event.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-black text-black mb-2 group-hover:text-[#FECE33] transition-colors tracking-tight">
          {event.title}
        </h3>
        <p className="text-gray-500 font-medium mb-4">{event.subtitle}</p>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2">{event.description}</p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mb-6">
            <div className="flex items-center space-x-1.5">
              <Calendar className="w-4 h-4 text-[#FECE33] flex-shrink-0" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-[#FECE33] flex-shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-4 h-4 text-[#FECE33] flex-shrink-0" />
              <span>{event.location}</span>
            </div>

          </div>

          <div className="flex items-center text-black font-bold group-hover:text-[#FECE33] transition-colors">
            <span>{isPast ? 'Посмотреть детали' : 'Подробнее'}</span>
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
