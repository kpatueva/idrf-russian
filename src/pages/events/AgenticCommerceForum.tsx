import { useState } from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import PhotoGallery from '../../components/PhotoGallery';
import SpeakerCard from '../../components/SpeakerCard';
import SuccessPopup from '../../components/SuccessPopup';

import speaker1Photo from '../../assets/screenshot_02_12.png';
import speaker2Photo from '../../assets/screenshot_12_26_43.png';
import speaker3Photo from '../../assets/2026-01-29_07.21.09.jpg';
import speaker5Photo from '../../assets/scshot_02_13_56_21.png';
import speaker6Photo from '../../assets/202654.jpg';
import speaker7Photo from '../../assets/scrensfe12.png';
import logo24TTL from '../../assets/24ttl_logo_new.png';
import venuePhoto from '../../assets/sok-rybakov-tauer.png';
import beelineLogo from '../../assets/beeline_logo_2021.webp';
import giperLogo from '../../assets/screenshot_at_feb_02_16-12-03.png';
import polarisLogo from '../../assets/e59d3c894f80fa43ef17681e037fd89a.png';
import marshallAutoLogo from '../../assets/logo.jpg';
import aromatnyMirLogo from '../../assets/6e85c.jpeg';

export default function AgenticCommerceForum() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!privacyChecked || !consentChecked) {
      setErrorMessage('Пожалуйста, подтвердите согласие с политикой конфиденциальности и обработкой персональных данных');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      company: formData.get('company') as string,
      position: formData.get('position') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
    };

    try {
      const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

      if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
        throw new Error('Google Script URL не настроен');
      }

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      setIsPopupOpen(true);
      e.currentTarget.reset();
      setPrivacyChecked(false);
      setConsentChecked(false);
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      setErrorMessage('Произошла ошибка при отправке заявки. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-[#FECE33] text-xl font-bold">IDRF Forum</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                <span className="text-[#FECE33]">AGENTIC</span>
                <br />
                <span className="text-white">COMMERCE</span>
                <br />
                <span className="text-white">FORUM</span>
              </h1>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Как на практике работает ИИ в e-commerce — без хайпа и с реальными кейсами
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-white">
                  <Calendar className="w-5 h-5 text-[#FECE33]" />
                  <span className="font-semibold">12 февраля 2026</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Clock className="w-5 h-5 text-[#FECE33]" />
                  <span className="font-semibold">10:00 - 13:00</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <MapPin className="w-5 h-5 text-[#FECE33]" />
                  <span className="font-semibold">Москва, SOK Rybakov Tower</span>
                </div>
              </div>
            </div>
            <div id="register" className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-black mb-2">Регистрация</h3>
                <p className="text-gray-600 text-sm">
                  Все заявки проходят премодерацию. Количество мест ограничено.
                </p>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="Имя*" required className="w-full px-6 py-4 border-2 border-gray-200 rounded-full focus:border-[#FECE33] focus:outline-none transition-colors text-gray-600 placeholder:text-gray-400" />
                <input type="text" name="lastName" placeholder="Фамилия*" required className="w-full px-6 py-4 border-2 border-gray-200 rounded-full focus:border-[#FECE33] focus:outline-none transition-colors text-gray-600 placeholder:text-gray-400" />
                <input type="text" name="company" placeholder="Компания*" required className="w-full px-6 py-4 border-2 border-gray-200 rounded-full focus:border-[#FECE33] focus:outline-none transition-colors text-gray-600 placeholder:text-gray-400" />
                <input type="text" name="position" placeholder="Должность*" required className="w-full px-6 py-4 border-2 border-gray-200 rounded-full focus:border-[#FECE33] focus:outline-none transition-colors text-gray-600 placeholder:text-gray-400" />
                <input type="email" name="email" placeholder="Email*" required className="w-full px-6 py-4 border-2 border-gray-200 rounded-full focus:border-[#FECE33] focus:outline-none transition-colors text-gray-600 placeholder:text-gray-400" />
                <input type="tel" name="phone" placeholder="Телефон*" required className="w-full px-6 py-4 border-2 border-gray-200 rounded-full focus:border-[#FECE33] focus:outline-none transition-colors text-gray-600 placeholder:text-gray-400" />
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="privacy" checked={privacyChecked} onChange={(e) => setPrivacyChecked(e.target.checked)} className="mt-1 w-4 h-4 accent-[#FECE33]" />
                    <label htmlFor="privacy" className="text-xs text-gray-600">
                      Отправляя информацию и посещая наш сайт, вы соглашаетесь с условиями{' '}
                      <a href="https://24ttl.ru/wp-content/uploads/2026/01/politika-konfidenczialnosti-01-09-2025.pdf" target="_blank" rel="noopener noreferrer" className="text-[#FECE33] hover:underline font-semibold">
                        Политику конфиденциальности
                      </a>
                      {' '}ООО «24ТТЛ».
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="consent" checked={consentChecked} onChange={(e) => setConsentChecked(e.target.checked)} className="mt-1 w-4 h-4 accent-[#FECE33]" />
                    <label htmlFor="consent" className="text-xs text-gray-600">
                      Я даю согласие на обработку моих персональных данных ООО «24ТТЛ» и принимаю условия{' '}
                      <a href="https://24ttl.ru/wp-content/uploads/2026/01/soglasie-na-obrabotku-personalnyh-dannyh-dlya-sajta.pdf" target="_blank" rel="noopener noreferrer" className="text-[#FECE33] hover:underline font-semibold">
                        Согласия на обработку персональных данных
                      </a>.
                    </label>
                  </div>
                </div>
                {errorMessage && (
                  <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-2xl text-sm">
                    {errorMessage}
                  </div>
                )}
                <button type="submit" disabled={isSubmitting} className="w-full bg-[#FECE33] text-black py-4 px-8 rounded-full font-bold text-lg hover:bg-[#ffd84d] transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ ЗАЯВКУ'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900/30 via-cyan-900/30 to-teal-900/30 relative">
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#FECE33] rounded-[2.5rem] p-8 border-2 border-black">
              <div className="text-sm font-bold text-black mb-4 pb-2 border-b-2 border-black">24TTL</div>
              <div className="text-black font-black text-3xl leading-tight tracking-tighter" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontStretch: 'condensed' }}>
                INTERNATIONAL<br />DIGITAL RETAIL<br />FORUM
                <span className="text-sm font-normal ml-2 bg-white px-2 py-1 rounded-full">С 2019</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-[2.5rem] p-8 border border-white/30">
              <div className="text-sm text-white/70 mb-2">idrf.online</div>
              <div className="text-8xl font-black text-white mb-2">3</div>
              <div className="text-[#FECE33] text-2xl font-black tracking-tight">КОНФЕРЕНЦИЙ</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/20 to-teal-600/20 backdrop-blur-sm rounded-[2.5rem] p-8 border border-white/30">
              <div className="text-sm text-white/70 mb-2">оффлайн</div>
              <div className="text-8xl font-black text-white mb-2">50<span className="text-5xl">+</span></div>
              <div className="text-[#FECE33] text-2xl font-black tracking-tight">МИТАПОВ</div>
            </div>
            <div className="bg-gradient-to-br from-teal-600/20 to-blue-600/20 backdrop-blur-sm rounded-[2.5rem] p-8 border border-white/30">
              <div className="text-sm text-white/70 mb-2">онлайн</div>
              <div className="text-8xl font-black text-white mb-2">40<span className="text-5xl">+</span></div>
              <div className="text-[#FECE33] text-2xl font-black tracking-tight">ВЕБИНАРОВ</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center space-x-2 text-white font-semibold">
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-xs">🇦🇪</div>
              <span>Дубай</span>
            </div>
            <div className="flex items-center space-x-2 text-white font-semibold">
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-xs">🇲🇽</div>
              <span>Мехико</span>
            </div>
            <div className="flex items-center space-x-2 text-white font-semibold">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-xs">🇮🇩</div>
              <span>Джакарта</span>
            </div>
            <div className="flex items-center space-x-2 text-white font-semibold">
              <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-xs">🇰🇿</div>
              <span>Алматы</span>
            </div>
            <div className="flex items-center space-x-2 text-white font-semibold">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs">🇰🇷</div>
              <span>Сеул</span>
            </div>
            <div className="flex items-center space-x-2 text-white font-semibold">
              <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-xs">🇬🇧</div>
              <span>Лондон</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">Что вы получите</h2>
            <div className="w-20 h-1 bg-[#FECE33] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Пока одни говорят об ИИ, другие уже зарабатывают с его помощью. В 2026 году побеждают те,
              кто умеет интегрировать искусственный интеллект в бизнес-процессы — не ломая структуру, а усиливая результаты.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 p-8 rounded-3xl hover:border-[#FECE33] transition-all">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-8 h-8 bg-[#FECE33] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-black text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-black mb-3">Практический разбор real-time кейсов</h3>
                  <p className="text-gray-700">Как ИИ-агенты встраиваются в реальную структуру команд и процессы — от первого пилота до масштабирования</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-gray-200 p-8 rounded-3xl hover:border-[#FECE33] transition-all">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-8 h-8 bg-[#FECE33] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-black text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-black mb-3">Технологии мультиагентных систем</h3>
                  <p className="text-gray-700">Как автоматизировать работу целого отдела с помощью ИИ-агентов, которые взаимодействуют между собой</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-gray-200 p-8 rounded-3xl hover:border-[#FECE33] transition-all">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-8 h-8 bg-[#FECE33] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-black text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-black mb-3">Чек-лист для энтерпрайза</h3>
                  <p className="text-gray-700">Критические факторы, которые нужно учесть перед внедрением ИИ в крупной компании — от бюджета до change management</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-gray-200 p-8 rounded-3xl hover:border-[#FECE33] transition-all">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-8 h-8 bg-[#FECE33] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-black text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-black mb-3">Успешные и провальные реализации</h3>
                  <p className="text-gray-700">Честный разбор того, что сработало, а что нет — и почему</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 bg-[#FECE33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">Программа форума</h2>
            <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-lg text-black/80">Практические кейсы и экспертные разборы от топ-менеджеров ведущих брендов и маркетплейсов.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <ProgramItem time="10:00 - 10:20" tag="Открытие" title="Открытие IDRF Forum" description="Приветственный кофе, Нетворкинг и знакомство с участниками форума" />
            <ProgramItem time="10:20 - 10:40" tag="Выступление" title="ИИ-агенты в e-commerce: от пилота до production" description="Реальные кейсы внедрения ИИ в российских и международных компаниях. Что работает, что нет, и почему." speakerPhoto={speaker3Photo} speakerName="Григорий Черняев" speakerRole="CEO CIS, 24TTL" />
            <ProgramItem time="10:45 - 11:00" tag="Выступление" title="Тренды 2026" description="Как ставка, спрос, реклама и AI запустят новый цикл роста" speakerPhoto={speaker7Photo} speakerName="Денис Марфутин" speakerRole="Член совета директоров, Ароматный мир и Marshall Auto (ex. Yandex, Ford, X5, Metro)" />
            <ProgramItem time="11:05 - 11:20" tag="Кейс-стади" title="От пилота к процессу" description="Как мы внедряли ИИ в giper.fm без революций, но с результатами." speakerPhoto={speaker5Photo} speakerName="Михаил Пономарев" speakerRole="Руководитель отдела Content Excellence, giper.fm" />
            <ProgramItem time="11:25 - 11:40" tag="Выступление" title="Распаковываем AI-выдачу" description="Данные и поиск приоритетных направлений для защиты перед стейкхолдерами." speakerPhoto={speaker1Photo} speakerName="Фёдор Смирнов" speakerRole="Head of SEO, Билайн" />
            <ProgramItem time="11:45 - 12:00" tag="Выступление" title="Как с помощью ИИ быстро создавать крутые креативы" description="Баннеры, титульные фото, видео. Анализ эффективности через A/B-тестирование." speakerPhoto={speaker2Photo} speakerName="Александр Дмитриев" speakerRole="Руководитель группы интернет-маркетинга, Polaris" />
            <ProgramItem time="12:05 - 12:20" tag="Бонус" title="Презентация новой Q-Commerce-аналитики" speakerPhoto={speaker6Photo} speakerName="Александра Дементьева" speakerRole="Product Lead, 24TTL" />
            <ProgramItem time="12:25 - 13:00" tag="Q&A и нетворкинг" title="Подведение итогов" description="Нетворкинг и общение со спикерами." />
            <div className="bg-black/5 rounded-3xl p-8 border-2 border-black/10">
              <p className="text-gray-700 text-center">
                <span className="font-black text-black">Важно:</span> В программу могут вноситься изменения.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="speakers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">Спикеры</h2>
            <div className="w-20 h-1 bg-[#FECE33] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">Практикующие эксперты из топ-брендов и ведущих маркетплейсов и ритейлеров</p>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-6 mb-12 overflow-x-auto pb-4 px-4 -mx-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <SpeakerCard photo={speaker7Photo} name="Денис Марфутин" position="Член совета директоров (ex. Yandex, Ford, X5, Metro)" company="Ароматный мир и Marshall Auto" logos={[{ src: marshallAutoLogo, size: 'h-8' }, { src: aromatnyMirLogo, size: 'h-8' }]} />
              <SpeakerCard photo={speaker5Photo} name="Михаил Пономарев" position="Руководитель отдела Content Excellence, Специалист по внедрению ИИ в процессы работы компании" company="giper.fm" logo={giperLogo} />
              <SpeakerCard photo={speaker1Photo} name="Фёдор Смирнов" position="Head of SEO (Ведущий менеджер по поисковой оптимизации)" company="Билайн" logo={beelineLogo} logoSize="h-20" />
              <SpeakerCard photo={speaker2Photo} name="Александр Дмитриев" position="Руководитель группы интернет-маркетинга (маркетплейсы)" company="Polaris" logo={polarisLogo} logoSize="h-6" />
              <SpeakerCard photo={speaker3Photo} name="Григорий Черняев" position="CEO CIS" company="24TTL" logo={logo24TTL} logoSize="h-12" />
              <SpeakerCard photo={speaker6Photo} name="Александра Дементьева" position="Product Lead" company="24TTL" logo={logo24TTL} logoSize="h-12" />
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {[
                  { title: 'Топ-менеджеры e-commerce', desc: 'Руководители цифровых направлений крупнейших ритейлеров и маркетплейсов' },
                  { title: 'Технические лидеры', desc: 'CTO и Head of Technology компаний, внедривших ИИ-решения' },
                  { title: 'Бренд-менеджеры', desc: 'Представители ведущих российских и международных брендов' },
                  { title: 'Эксперты по ИИ', desc: 'Специалисты по внедрению и масштабированию ИИ-решений' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#FECE33] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-black text-black text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="venue" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">Место проведения</h2>
            <div className="w-20 h-1 bg-[#FECE33] mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200">
              <h3 className="text-3xl font-black text-black mb-6">SOK Rybakov Tower</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-[#FECE33] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-black">Адрес:</p>
                    <p className="text-gray-700">Москва, Rybakov Tower, Ленинградский проспект, 36 ст11</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-[#FECE33] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-black">Время:</p>
                    <p className="text-gray-700">12 февраля 2026, 10:00 - 13:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-[#FECE33] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-black">Формат:</p>
                    <p className="text-gray-700">Закрытое деловое мероприятие</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-[#FECE33] rounded-2xl p-4">
                <p className="text-black text-sm font-bold">Количество мест ограничено. Все заявки проходят премодерацию.</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-96 border-2 border-gray-200">
              <img src={venuePhoto} alt="SOK Rybakov Tower" className="w-full h-full object-cover object-left" />
            </div>
          </div>
        </div>
      </section>

      <PhotoGallery />

      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Готовы присоединиться?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Это не массовая конференция — это встреча профессионалов, которые уже работают с ИИ или готовы внедрять его в ближайшие месяцы.
          </p>
          <div className="bg-white rounded-3xl p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="font-black text-black text-xl mb-4">Зарегистрируйтесь и получите:</h3>
            <div className="space-y-3 text-left">
              {['Эксклюзивные кейсы от лидеров рынка', 'Практические инструменты для внедрения ИИ', 'Нетворкинг с decision-makers из крупнейших компаний', 'Материалы и инсайты от спикеров'].map((text) => (
                <div key={text} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#FECE33] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black font-black text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <a href="#register" className="inline-block bg-[#FECE33] text-black px-12 py-5 rounded-full font-black text-xl hover:bg-[#ffd84d] transition-all transform hover:scale-105 shadow-2xl">
            ЗАРЕГИСТРИРОВАТЬСЯ СЕЙЧАС
          </a>
          <p className="text-white/60 text-sm mt-6">Регистрация закроется накануне мероприятия или при достижении лимита участников</p>
        </div>
      </section>

      <SuccessPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}

function ProgramItem({ time, tag, title, description, speakerPhoto, speakerName, speakerRole }: {
  time: string;
  tag: string;
  title: string;
  description?: string;
  speakerPhoto?: string;
  speakerName?: string;
  speakerRole?: string;
}) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow">
      <div className="text-gray-600 text-sm mb-4">{time}</div>
      <div className="inline-block bg-[#FECE33] text-black font-bold px-4 py-2 rounded-lg mb-3 text-sm">{tag}</div>
      <h3 className="text-2xl font-black text-black mb-3 leading-tight">{title}</h3>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {speakerPhoto && speakerName && (
        <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
          <img src={speakerPhoto} alt={speakerName} className="w-16 h-16 rounded-full object-cover" />
          <div>
            <p className="font-bold text-black">{speakerName}</p>
            {speakerRole && <p className="text-sm text-gray-600">{speakerRole}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
