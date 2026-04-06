import { AlertTriangle } from 'lucide-react';
import speakerPhoto from '../../assets/2026-01-29_07.21.09.jpg';
import speaker6Photo from '../../assets/202654.jpg';
import RevealSection from './RevealSection';

interface ProgramEntry {
  time: string;
  tag: string;
  tagColor: string;
  title: string;
  desc?: string;
  speaker?: {
    photo: string;
    name: string;
    role: string;
  };
}

const program: ProgramEntry[] = [
  {
    time: '09:30',
    tag: 'Открытие',
    tagColor: 'bg-[#FECE33] text-[#1A1A2E]',
    title: 'Приветствие и обзор повестки',
    desc: 'Знакомство с участниками, формат мероприятия, цели встречи',
    speaker: { photo: speakerPhoto, name: 'Григорий Черняев', role: 'CEO CIS, 24TTL' },
  },
  {
    time: '09:45',
    tag: 'Выступление',
    tagColor: 'bg-teal-500/15 text-teal-600 border border-teal-500/20',
    title: 'ИИ в российском e-commerce: контекст 2026',
    desc: 'Обзор рынка, ключевые тренды и барьеры внедрения ИИ в России',
    speaker: { photo: '', name: 'Спикер уточняется', role: '' },
  },
  {
    time: '10:15',
    tag: 'Кейс-стади',
    tagColor: 'bg-sky-500/15 text-sky-600 border border-sky-500/20',
    title: 'Тема уточняется',
    desc: 'Реальный кейс внедрения ИИ-решения в e-commerce компании',
    speaker: { photo: '', name: 'Спикер уточняется', role: '' },
  },
  {
    time: '10:45',
    tag: 'Выступление',
    tagColor: 'bg-teal-500/15 text-teal-600 border border-teal-500/20',
    title: 'Инструменты и платформы: что работает на практике',
    desc: 'Обзор AI-инструментов для аналитики, контента и автоматизации',
    speaker: { photo: speaker6Photo, name: 'Александр Ильинов', role: 'Head of Sales, 24TTL' },
  },
  {
    time: '11:15',
    tag: 'Бонус',
    tagColor: 'bg-amber-500/15 text-amber-600 border border-amber-500/20',
    title: 'Кофе-брейк и нетворкинг',
    desc: 'Неформальное общение, обмен контактами',
  },
  {
    time: '11:35',
    tag: 'Кейс-стади',
    tagColor: 'bg-sky-500/15 text-sky-600 border border-sky-500/20',
    title: 'Тема уточняется',
    desc: 'Кейс из практики: внедрение, результаты, уроки',
    speaker: { photo: '', name: 'Спикер уточняется', role: '' },
  },
  {
    time: '12:05',
    tag: 'Панельная дискуссия',
    tagColor: 'bg-rose-500/15 text-rose-600 border border-rose-500/20',
    title: 'Перспективы: что дальше?',
    desc: 'Открытая дискуссия о будущем ИИ в e-commerce с участием всех спикеров',
  },
  {
    time: '12:40',
    tag: 'Q&A',
    tagColor: 'bg-gray-100 text-gray-600',
    title: 'Вопросы и ответы',
  },
  {
    time: '13:00',
    tag: 'Завершение',
    tagColor: 'bg-gray-100 text-gray-600',
    title: 'Нетворкинг',
    desc: 'Неформальное общение',
  },
];

export default function MeetupProgram() {
  return (
    <section id="program" className="py-20 bg-[#FECE33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A2E] mb-4 tracking-tight">
            Программа митапа
          </h2>
          <div className="w-16 h-[3px] bg-[#1A1A2E] mx-auto mb-6" />
          <p className="text-[#1A1A2E]/70 text-base">
            23 апреля 2026 -- 9:30 -- 13:00 МСК -- Rybakov Tower, Москва
          </p>
        </RevealSection>

        <div className="max-w-3xl mx-auto space-y-4">
          {program.map((item, i) => (
            <RevealSection key={i} delay={i * 60}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-sm font-bold text-gray-400 whitespace-nowrap pt-1 w-14 flex-shrink-0">
                    {item.time}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${item.tagColor}`}>
                      {item.tag}
                    </span>
                    <h4 className="font-black text-[#1A1A2E] text-base mb-1">{item.title}</h4>
                    {item.desc && (
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    )}
                    {item.speaker && (
                      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
                        {item.speaker.photo ? (
                          <img
                            src={item.speaker.photo}
                            alt={item.speaker.name}
                            className="w-10 h-10 rounded-full object-cover border-2 border-[#FECE33]"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs font-bold border-2 border-gray-200">
                            ?
                          </div>
                        )}
                        <div>
                          <p className="font-bold text-[#1A1A2E] text-sm">{item.speaker.name}</p>
                          {item.speaker.role && (
                            <p className="text-gray-400 text-xs">{item.speaker.role}</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={600} className="max-w-3xl mx-auto mt-6">
          <div className="bg-[#1A1A2E]/5 rounded-2xl p-5 border border-[#1A1A2E]/10 flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-[#1A1A2E]/60 flex-shrink-0" />
            <p className="text-[#1A1A2E]/70 text-sm">
              В программу могут вноситься изменения. Следите за обновлениями.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
