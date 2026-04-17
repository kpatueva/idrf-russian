import { TriangleAlert as AlertTriangle } from 'lucide-react';
import speakerPhoto from '../../assets/2026-01-29_07.21.09.jpg';
import speaker6Photo from '../../assets/Screenshot_at_Apr_08_16-46-54.png';
import kiselevPhoto from '../../assets/Frame_1.png';
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
    time: '09:30 - 10:00',
    tag: 'Открытие',
    tagColor: 'bg-[#FECE33] text-[#1A1A2E]',
    title: 'Открытие IDRF Forum',
    desc: 'Приветственный кофе, Нетворкинг и знакомство с участниками форума',
  },
  {
    time: '10:00 - 10:20',
    tag: 'Выступление',
    tagColor: 'bg-teal-500/15 text-teal-600 border border-teal-500/20',
    title: 'ИИ в российском e-commerce: контекст 2026',
    desc: 'Обзор рынка, ключевые тренды и барьеры внедрения ИИ в России',
    speaker: { photo: speakerPhoto, name: 'Григорий Черняев', role: 'CEO CIS, 24TTL' },
  },
  {
    time: '10:30 - 10:50',
    tag: 'Кейс-стади',
    tagColor: 'bg-sky-500/15 text-sky-600 border border-sky-500/20',
    title: 'Практика создания ИИ-сотрудников и цифровых отделов в e-commerce',
    desc: 'Обзор проектов автоматизации контента и бизнес-процессов на стороне ритейлеров и брендов',
    speaker: { photo: speaker6Photo, name: 'Александр Астахов', role: 'AI Lead, 24TTL' },
  },
  {
    time: '11:00 - 11:20',
    tag: 'Кейс-стади',
    tagColor: 'bg-sky-500/15 text-sky-600 border border-sky-500/20',
    title: 'AS IS, TO BE или от потенциала GEO к прибыли. Фреймворк будущего от Спортмастера',
    desc: 'Как Спортмастер выстраивает стратегию перехода от текущего состояния к целевой модели — от потенциала GEO-аналитики к реальной прибыли.',
    speaker: { photo: kiselevPhoto, name: 'Роман Киселев', role: 'Директор стратегических проектов, Спортмастер' },
  },
  {
    time: '11:30 - 11:50',
    tag: 'Выступление',
    tagColor: 'bg-teal-500/15 text-teal-600 border border-teal-500/20',
    title: 'Автоматизация без потери контроля: ИИ в маркетинге бренда',
    speaker: { photo: '', name: 'Спикер уточняется', role: 'Бренд' },
  },
  {
    time: '12:00 - 13:00',
    tag: 'Q&A и нетворкинг',
    tagColor: 'bg-gray-100 text-gray-600',
    title: 'Подведение итогов',
    desc: 'Нетворкинг и общение со спикерами.',
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
          <div className="w-16 h-[3px] bg-[#1A1A2E] mx-auto" />
        </RevealSection>

        <div className="max-w-3xl mx-auto space-y-4">
          {program.map((item, i) => (
            <RevealSection key={i} delay={i * 60}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-bold text-gray-400 whitespace-nowrap">
                    {item.time}
                  </span>
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
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
