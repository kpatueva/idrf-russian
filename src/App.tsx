import { Calendar, MapPin, Clock, Users, Mail } from 'lucide-react';
import PhotoGallery from './components/PhotoGallery';
import SpeakerCard from './components/SpeakerCard';

import speaker1Photo from './assets/screenshot_02_12.png';
import speaker2Photo from './assets/screenshot_12_26_43.png';
import speaker3Photo from './assets/2026-01-29_07.21.09.jpg';
import speaker5Photo from './assets/scshot_02_13_56_21.png';
import speaker6Photo from './assets/202654.jpg';
import logo24TTL from './assets/24ttl_logo_new.png';
import idrfLogo from './assets/idrf_logo.png';
import idrfLogoFull from './assets/idrf_logo-2.png';
import logo24TTLNew from './assets/24ttl_logo_new.png';
import venuePhoto from './assets/sok-rybakov-tauer.png';
import beelineLogo from './assets/beeline_logo_2021.webp';
import giperLogo from './assets/screenshot_at_feb_02_16-12-03.png';
import polarisLogo from './assets/e59d3c894f80fa43ef17681e037fd89a.png';

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-6">
              <img src={idrfLogo} alt="IDRF" className="h-14 w-14" />
              <img src={idrfLogoFull} alt="International Digital Retail Forum" className="h-16" />
              <img src={logo24TTLNew} alt="24TTL" className="h-16" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-900 hover:text-[#FECE33] transition-colors font-medium">О форуме</a>
              <a href="#program" className="text-gray-900 hover:text-[#FECE33] transition-colors font-medium">Программа</a>
              <a href="#speakers" className="text-gray-900 hover:text-[#FECE33] transition-colors font-medium">Спикеры</a>
              <a href="#venue" className="text-gray-900 hover:text-[#FECE33] transition-colors font-medium">Место проведения</a>
              <a href="#gallery" className="text-gray-900 hover:text-[#FECE33] transition-colors font-medium">Фото</a>
            </div>
            <a href="#register" className="bg-[#FECE33] text-black px-6 py-3 rounded-full hover:bg-[#ffd84d] transition-colors font-bold">
              РЕГИСТРАЦИЯ
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"></div>
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
                  Все заявки проходят премодерацию. Заполните форму, и мы свяжемся с вами в течение 24 часов.
                </p>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Имя*"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-full focus:border-[#FECE33] focus:outline-none transition-colors text-gray-600 placeholder:text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Фамилия*"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-full focus:border-[#FECE33] focus:outline-none transition-colors text-gray-600 placeholder:text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Компания*"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-full focus:border-[#FECE33] focus:outline-none transition-colors text-gray-600 placeholder:text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Должность*"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-full focus:border-[#FECE33] focus:outline-none transition-colors text-gray-600 placeholder:text-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-full focus:border-[#FECE33] focus:outline-none transition-colors text-gray-600 placeholder:text-gray-400"
                />
                <input
                  type="tel"
                  placeholder="Телефон*"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-full focus:border-[#FECE33] focus:outline-none transition-colors text-gray-600 placeholder:text-gray-400"
                />
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-1 w-4 h-4 accent-[#FECE33]"
                    />
                    <label htmlFor="privacy" className="text-xs text-gray-600">
                      Отправляя информацию и посещая наш сайт, вы соглашаетесь с условиями{' '}
                      <a
                        href="https://24ttl.ru/wp-content/uploads/2026/01/politika-konfidenczialnosti-01-09-2025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FECE33] hover:underline font-semibold"
                      >
                        Политику конфиденциальности
                      </a>
                      {' '}ООО «24ТТЛ».
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1 w-4 h-4 accent-[#FECE33]"
                    />
                    <label htmlFor="consent" className="text-xs text-gray-600">
                      Я даю согласие на обработку моих персональных данных ООО «24ТТЛ» и принимаю условия{' '}
                      <a
                        href="https://24ttl.ru/wp-content/uploads/2026/01/soglasie-na-obrabotku-personalnyh-dannyh-dlya-sajta.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FECE33] hover:underline font-semibold"
                      >
                        Согласия на обработку персональных данных
                      </a>.
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FECE33] text-black py-4 px-8 rounded-full font-bold text-lg hover:bg-[#ffd84d] transition-all transform hover:scale-[1.02] shadow-lg"
                >
                  ОТПРАВИТЬ ЗАЯВКУ
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-red-900/30 relative">
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

            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-[2.5rem] p-8 border border-white/30">
              <div className="text-sm text-white/70 mb-2">idrf.online</div>
              <div className="text-8xl font-black text-white mb-2">3</div>
              <div className="text-[#FECE33] text-2xl font-black tracking-tight">КОНФЕРЕНЦИЙ</div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-red-600/20 backdrop-blur-sm rounded-[2.5rem] p-8 border border-white/30">
              <div className="text-sm text-white/70 mb-2">оффлайн</div>
              <div className="text-8xl font-black text-white mb-2">50<span className="text-5xl">+</span></div>
              <div className="text-[#FECE33] text-2xl font-black tracking-tight">МИТАПОВ</div>
            </div>

            <div className="bg-gradient-to-br from-red-600/20 to-blue-600/20 backdrop-blur-sm rounded-[2.5rem] p-8 border border-white/30">
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

      {/* About Section */}
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
                  <p className="text-gray-700">
                    Как ИИ-агенты встраиваются в реальную структуру команд и процессы — от первого пилота до масштабирования
                  </p>
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
                  <p className="text-gray-700">
                    Как автоматизировать работу целого отдела с помощью ИИ-агентов, которые взаимодействуют между собой
                  </p>
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
                  <p className="text-gray-700">
                    Критические факторы, которые нужно учесть перед внедрением ИИ в крупной компании — от бюджета до change management
                  </p>
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
                  <p className="text-gray-700">
                    Честный разбор того, что сработало, а что нет — и почему
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 bg-[#FECE33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">Программа форума</h2>
            <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-lg text-black/80">
              Практические кейсы и экспертные разборы от топ-менеджеров ведущих брендов и маркетплейсов.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow">
              <div className="text-gray-600 text-sm mb-4">10:00 - 10:20</div>
              <div className="inline-block bg-[#FECE33] text-black font-bold px-4 py-2 rounded-lg mb-3 text-sm">
                Открытие
              </div>
              <h3 className="text-2xl font-black text-black mb-3 leading-tight">
                Открытие IDRF Forum
              </h3>
              <p className="text-gray-600">Приветственный кофе, Нетворкинг и знакомство с участниками форума</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow">
              <div className="text-gray-600 text-sm mb-4">10:20 - 10:50</div>
              <div className="inline-block bg-[#FECE33] text-black font-bold px-4 py-2 rounded-lg mb-3 text-sm">
                Выступление
              </div>
              <h3 className="text-2xl font-black text-black mb-3 leading-tight">
                ИИ-агенты в e-commerce: от пилота до production
              </h3>
              <p className="text-gray-600 mb-4">
                Реальные кейсы внедрения ИИ в российских и международных компаниях. Что работает, что нет, и почему.
              </p>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <img src={speaker3Photo} alt="Григорий Черняев" className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-black">Григорий Черняев</p>
                  <p className="text-sm text-gray-600">CEO CIS, 24TTL</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow">
              <div className="text-gray-600 text-sm mb-4">10:50 - 11:20</div>
              <div className="inline-block bg-[#FECE33] text-black font-bold px-4 py-2 rounded-lg mb-3 text-sm">
                Кейс-стади
              </div>
              <h3 className="text-2xl font-black text-black mb-3 leading-tight">
                От пилота к процессу
              </h3>
              <p className="text-gray-600 mb-4">
                Как мы внедряли ИИ в Giper.fm без революций, но с результатами.
              </p>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <img src={speaker5Photo} alt="Михаил Пономарев" className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-black">Михаил Пономарев</p>
                  <p className="text-sm text-gray-600">Руководитель отдела Content Excellence, Giper.fm</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow">
              <div className="text-gray-600 text-sm mb-4">11:20 - 11:50</div>
              <div className="inline-block bg-[#FECE33] text-black font-bold px-4 py-2 rounded-lg mb-3 text-sm">
                Выступление
              </div>
              <h3 className="text-2xl font-black text-black mb-3 leading-tight">
                Распаковываем AI-выдачу
              </h3>
              <p className="text-gray-600 mb-4">
                Данные и поиск приоритетных направлений для защиты перед стейкхолдерами.
              </p>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <img src={speaker1Photo} alt="Фёдор Смирнов" className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-black">Фёдор Смирнов</p>
                  <p className="text-sm text-gray-600">Head of SEO, Билайн</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow">
              <div className="text-gray-600 text-sm mb-4">11:50 - 12:20</div>
              <div className="inline-block bg-[#FECE33] text-black font-bold px-4 py-2 rounded-lg mb-3 text-sm">
                Выступление
              </div>
              <h3 className="text-2xl font-black text-black mb-3 leading-tight">
                Как с помощью ИИ быстро создавать крутые креативы
              </h3>
              <p className="text-gray-600 mb-4">
                Баннеры, титульные фото, видео. Анализ эффективности через A/B-тестирование.
              </p>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <img src={speaker2Photo} alt="Александр Дмитриев" className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-black">Александр Дмитриев</p>
                  <p className="text-sm text-gray-600">Руководитель группы интернет-маркетинга, Polaris</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow">
              <div className="text-gray-600 text-sm mb-4">12:20 - 12:30</div>
              <div className="inline-block bg-[#FECE33] text-black font-bold px-4 py-2 rounded-lg mb-3 text-sm">
                Бонус
              </div>
              <h3 className="text-2xl font-black text-black mb-3 leading-tight">
                Презентация новой Q-Commerce-аналитики
              </h3>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <img src={speaker6Photo} alt="Александра Дементьева" className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-black">Александра Дементьева</p>
                  <p className="text-sm text-gray-600">Product Lead, 24TTL</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow">
              <div className="text-gray-600 text-sm mb-4">12:30 - 13:00</div>
              <div className="inline-block bg-[#FECE33] text-black font-bold px-4 py-2 rounded-lg mb-3 text-sm">
                Q&A и нетворкинг
              </div>
              <h3 className="text-2xl font-black text-black mb-3 leading-tight">
                Подведение итогов
              </h3>
              <p className="text-gray-600">Нетворкинг и общение со спикерами.</p>
            </div>

            <div className="bg-black/5 rounded-3xl p-8 border-2 border-black/10">
              <p className="text-gray-700 text-center">
                <span className="font-black text-black">Важно:</span> В программу могут вноситься изменения.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">Спикеры</h2>
            <div className="w-20 h-1 bg-[#FECE33] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              Практикующие менеджеры из топ-брендов и ведущих маркетплейсов
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <SpeakerCard
                photo={speaker5Photo}
                name="Михаил Пономарев"
                position="Руководитель отдела Content Excellence, Специалист по внедрению ИИ в процессы работы компании"
                company="Giper.fm"
                logo={giperLogo}
              />
              <SpeakerCard
                photo={speaker1Photo}
                name="Фёдор Смирнов"
                position="Head of SEO (Ведущий менеджер по поисковой оптимизации)"
                company="Билайн"
                logo={beelineLogo}
                logoSize="h-32"
              />
              <SpeakerCard
                photo={speaker2Photo}
                name="Александр Дмитриев"
                position="Руководитель группы интернет-маркетинга (маркетплейсы)"
                company="Polaris"
                logo={polarisLogo}
                logoSize="h-6"
              />
              <SpeakerCard
                photo={speaker3Photo}
                name="Григорий Черняев"
                position="CEO CIS"
                company="24TTL"
                logo={logo24TTL}
                logoSize="h-12"
              />
              <SpeakerCard
                photo={speaker6Photo}
                name="Александра Дементьева"
                position="Product Lead"
                company="24TTL"
                logo={logo24TTL}
                logoSize="h-12"
              />
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FECE33] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-black text-black text-lg mb-2">Топ-менеджеры e-commerce</h3>
                    <p className="text-gray-600 text-sm">
                      Руководители цифровых направлений крупнейших ритейлеров и маркетплейсов
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FECE33] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-black text-black text-lg mb-2">Технические лидеры</h3>
                    <p className="text-gray-600 text-sm">
                      CTO и Head of Technology компаний, внедривших ИИ-решения
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FECE33] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-black text-black text-lg mb-2">Бренд-менеджеры</h3>
                    <p className="text-gray-600 text-sm">
                      Представители ведущих российских и международных брендов
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FECE33] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-black text-black text-lg mb-2">Эксперты по ИИ</h3>
                    <p className="text-gray-600 text-sm">
                      Специалисты по внедрению и масштабированию ИИ-решений
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FECE33] rounded-2xl p-6 text-center">
                <p className="text-black font-bold text-lg">
                  И другие эксперты индустрии
                </p>
                <p className="text-black/70 text-sm mt-2">
                  Полный список спикеров будет объявлен после премодерации заявок
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
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
                    <p className="text-gray-700">Москва, Rybakov Tower</p>
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
                <p className="text-black text-sm font-bold">
                  ⚠️ Количество мест ограничено. Все заявки проходят премодерацию.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-96 border-2 border-gray-200">
              <img
                src={venuePhoto}
                alt="SOK Rybakov Tower"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <PhotoGallery />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Готовы присоединиться?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Это не массовая конференция — это встреча профессионалов, которые уже работают с ИИ
            или готовы внедрять его в ближайшие месяцы.
          </p>

          <div className="bg-white rounded-3xl p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="font-black text-black text-xl mb-4">Зарегистрируйтесь и получите:</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#FECE33] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black font-black text-sm">✓</span>
                </div>
                <p className="text-gray-700">Эксклюзивные кейсы от лидеров рынка</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#FECE33] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black font-black text-sm">✓</span>
                </div>
                <p className="text-gray-700">Практические инструменты для внедрения ИИ</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#FECE33] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black font-black text-sm">✓</span>
                </div>
                <p className="text-gray-700">Нетворкинг с decision-makers из крупнейших компаний</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#FECE33] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black font-black text-sm">✓</span>
                </div>
                <p className="text-gray-700">Материалы и инсайты от спикеров</p>
              </div>
            </div>
          </div>

          <a
            href="#register"
            className="inline-block bg-[#FECE33] text-black px-12 py-5 rounded-full font-black text-xl hover:bg-[#ffd84d] transition-all transform hover:scale-105 shadow-2xl"
          >
            ЗАРЕГИСТРИРОВАТЬСЯ СЕЙЧАС
          </a>

          <p className="text-white/60 text-sm mt-6">
            Регистрация закроется за 3 дня до мероприятия или при достижении лимита участников
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <img src={idrfLogo} alt="IDRF" className="h-16 w-16" />
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                International Digital Retail Forum — платформа для обмена опытом и инновациями в области цифрового ритейла
              </p>
              <p className="text-gray-500 text-sm">
                Партнер мероприятия: <span className="text-[#FECE33] font-bold">24TTL</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-6 text-[#FECE33]">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5 text-[#FECE33]" />
                  <span>info@idrf.online</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-[#FECE33]" />
                  <span>SOK Rybakov Tower, Москва</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Calendar className="w-5 h-5 text-[#FECE33]" />
                  <span>12 февраля 2026, 10:00-13:00</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-6 text-[#FECE33]">Быстрые ссылки</h3>
              <div className="space-y-3">
                <a href="#about" className="block text-gray-400 hover:text-[#FECE33] transition-colors">О форуме</a>
                <a href="#program" className="block text-gray-400 hover:text-[#FECE33] transition-colors">Программа</a>
                <a href="#speakers" className="block text-gray-400 hover:text-[#FECE33] transition-colors">Спикеры</a>
                <a href="#venue" className="block text-gray-400 hover:text-[#FECE33] transition-colors">Место проведения</a>
                <a href="#gallery" className="block text-gray-400 hover:text-[#FECE33] transition-colors">Фото</a>
                <a href="#register" className="block text-gray-400 hover:text-[#FECE33] transition-colors">Регистрация</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">&copy; 2026 IDRF. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
