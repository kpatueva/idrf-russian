import { MapPin, Calendar, Clock, Shield, TriangleAlert as AlertTriangle } from 'lucide-react';
import venuePhoto from '../../assets/sok-rybakov-tauer.png';
import RevealSection from './RevealSection';

export default function MeetupVenue() {
  return (
    <section id="venue" className="py-20 bg-[#1A1A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Место проведения
          </h2>
          <div className="w-16 h-[3px] bg-[#FECE33] mx-auto" />
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <RevealSection>
            <div className="bg-white rounded-2xl p-7">
              <h3 className="text-2xl font-black text-[#1A1A2E] mb-6">SOK Rybakov Tower</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FECE33] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#1A1A2E] text-sm">Адрес</p>
                    <p className="text-gray-600 text-sm">Москва, Ленинградский проспект, 36 ст11</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#FECE33] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#1A1A2E] text-sm">Дата</p>
                    <p className="text-gray-600 text-sm">23 апреля 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#FECE33] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#1A1A2E] text-sm">Время</p>
                    <p className="text-gray-600 text-sm">9:30 – 13:00 МСК</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#FECE33] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#1A1A2E] text-sm">Формат</p>
                    <p className="text-gray-600 text-sm">Закрытое деловое мероприятие</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FECE33] rounded-xl p-4 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-[#1A1A2E] flex-shrink-0 mt-0.5" />
                <p className="text-[#1A1A2E] text-xs font-medium leading-relaxed">
                  Точные детали прохода будут направлены подтверждённым участникам
                </p>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={150}>
            <div className="rounded-2xl overflow-hidden h-80 md:h-96 shadow-2xl" style={{ perspective: '1000px' }}>
              <img
                src={venuePhoto}
                alt="SOK Rybakov Tower"
                className="w-full h-full object-cover object-left hover:scale-105 transition-transform duration-700"
              />
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
