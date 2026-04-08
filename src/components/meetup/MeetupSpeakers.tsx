import speakerPhoto from '../../assets/2026-01-29_07.21.09.jpg';
import speaker6Photo from '../../assets/Screenshot_at_Apr_08_16-46-54.png';
import logo24TTL from '../../assets/24ttl_logo_new.png';
import RevealSection from './RevealSection';

interface Speaker {
  photo: string;
  name: string;
  role: string;
  company: string;
  logo?: string;
}

const speakers: Speaker[] = [
  {
    photo: speakerPhoto,
    name: 'Григорий Черняев',
    role: 'CEO CIS',
    company: '24TTL',
    logo: logo24TTL,
  },
  {
    photo: speaker6Photo,
    name: 'Александр Астахов',
    role: 'AI Lead',
    company: '24TTL',
    logo: logo24TTL,
  },
  {
    photo: '',
    name: 'Спикер уточняется',
    role: 'Маркетплейс',
    company: '',
  },
  {
    photo: '',
    name: 'Спикер уточняется',
    role: 'Бренд',
    company: '',
  },
];

export default function MeetupSpeakers() {
  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A2E] mb-4 tracking-tight">
            Спикеры
          </h2>
          <div className="w-16 h-[3px] bg-[#FECE33] mx-auto mb-6" />
          <p className="text-gray-600 text-lg">
            Практики и эксперты российского e-commerce и AI-рынка
          </p>
        </RevealSection>

        <div className="flex gap-6 overflow-x-auto pb-4 px-1 -mx-1 scrollbar-hide snap-x snap-mandatory">
          {speakers.map((speaker, i) => (
            <RevealSection key={i} delay={i * 100} className="snap-start flex-shrink-0 w-64">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-[#FECE33] transition-all group h-full">
                {speaker.photo ? (
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-[#FECE33] shadow-lg group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <div className="w-28 h-28 rounded-full bg-gray-100 mx-auto mb-4 flex items-center justify-center border-4 border-gray-200">
                    <span className="text-gray-400 text-3xl font-bold">?</span>
                  </div>
                )}
                <h4 className="font-black text-[#1A1A2E] text-base mb-1">{speaker.name}</h4>
                {speaker.role && (
                  <p className="text-gray-500 text-sm mb-3">{speaker.role}</p>
                )}
                {speaker.logo && (
                  <img src={speaker.logo} alt={speaker.company} className="h-7 object-contain mx-auto opacity-70" />
                )}
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
