import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Monitor, ChartBar as BarChart3, Search, ShoppingCart, Gift, TrendingUp, Bell, Eye, Zap, ExternalLink, ArrowRight } from 'lucide-react';
import RegistrationForm from '../../components/RegistrationForm';
import { useNavigate } from 'react-router-dom';
import HeroBackground from '../../components/HeroBackground';
import CountUp from '../../components/meetup/CountUp';
import speakerPhoto from '../../assets/2026-01-29_07.21.09.jpg';
import logo24TTL from '../../assets/24ttl_logo_new.png';
import idrfLogoFull from '../../assets/idrf_logo-2.png';

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function RevealSection({ children, delay = 0, className = '', style }: { children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.97)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const FONT = { fontFamily: "'Manrope', system-ui, sans-serif" };

export default function AiContentAutomationWebinar() {
  const navigate = useNavigate();
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
      {/* HERO */}
      <section className="pt-28 pb-20 bg-[#0F0F1A] relative overflow-hidden">
        <HeroBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[58%_40%] gap-10 lg:gap-16 items-center">
            <div className="hero-entrance" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 mb-7">
                <span className="hero-badge bg-[#FECE33] text-black text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
                  IDRF Webinar
                </span>
              </div>

              <div className="flex flex-wrap gap-5 mb-7 text-white/70 text-sm font-medium hero-entrance" style={{ animationDelay: '0.2s' }}>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#FECE33]" />
                  16 апреля 2026
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FECE33]" />
                  14:00-15:00 МСК
                </span>
                <span className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-[#FECE33]" />
                  Онлайн, бесплатно
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white mb-5 leading-tight tracking-tight hero-entrance" style={{ animationDelay: '0.3s' }}>
                Как брендам работать с{' '}
                <span className="text-[#FECE33] hero-text-glow">Q-comm полкой</span>{' '}
                в <span className="text-[#FECE33] hero-text-glow">2026</span>
              </h1>

              <p className="text-white/80 text-lg mb-7 leading-relaxed max-w-lg hero-entrance" style={{ animationDelay: '0.45s' }}>
                Аналитика, тренды, исследования быстрой доставки в России
              </p>

            </div>

            <div ref={heroFormRef} className="hero-entrance" style={{ animationDelay: '0.5s' }}>
              <RegistrationForm
                variant="dark"
                eventName="Q-comm Полка 2026 Webinar"
                googleScriptEnvKey="VITE_GOOGLE_SCRIPT_WEBINAR_URL"
                onSuccess={() => navigate('/events/ai-content-automation-webinar/thank-you')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-12 bg-[#0F0F1A] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <RevealSection className="rounded-2xl p-6 bg-[#FECE33] border-2 border-[#0F0F1A]">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <img src={idrfLogoFull} alt="IDRF" className="h-7 object-contain" />
                  <span className="text-[#0F0F1A]/40 font-bold text-sm">x</span>
                  <img src={logo24TTL} alt="24TTL" className="h-7 object-contain" />
                </div>
                <span className="inline-flex items-center gap-1.5">
                  <span className="text-[#0F0F1A] font-black text-sm">IDRF</span>
                  <span className="bg-white text-[#0F0F1A] text-xs font-bold px-2 py-0.5 rounded-full">С 2019</span>
                </span>
              </div>
            </RevealSection>

            <RevealSection delay={100} className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #6B21A8, #7C3AED)' }}>
              <div className="text-5xl lg:text-6xl font-black mb-1">
                <CountUp end={3} duration={1200} />
              </div>
              <div className="text-[#FECE33] text-xs font-bold tracking-widest uppercase">Конференции</div>
            </RevealSection>

            <RevealSection delay={200} className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #6B2D5B, #4A1D3D)' }}>
              <div className="text-5xl lg:text-6xl font-black mb-1">
                <CountUp end={50} suffix="+" duration={1500} />
              </div>
              <div className="text-[#FECE33] text-xs font-bold tracking-widest uppercase">Митапов</div>
            </RevealSection>

            <RevealSection delay={300} className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #3D2D6B, #2D1B4E)' }}>
              <div className="text-5xl lg:text-6xl font-black mb-1">
                <CountUp end={40} suffix="+" duration={1500} />
              </div>
              <div className="text-[#FECE33] text-xs font-bold tracking-widest uppercase">Вебинаров</div>
            </RevealSection>
          </div>

          <RevealSection>
            <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm font-medium">
              {[
                { flag: '\u{1F1E6}\u{1F1EA}', city: 'Дубай' },
                { flag: '\u{1F1F2}\u{1F1FD}', city: 'Мехико' },
                { flag: '\u{1F1EE}\u{1F1E9}', city: 'Джакарта' },
                { flag: '\u{1F1F0}\u{1F1FF}', city: 'Алматы' },
                { flag: '\u{1F1F0}\u{1F1F7}', city: 'Сеул' },
                { flag: '\u{1F1EC}\u{1F1E7}', city: 'Лондон' },
              ].map((item) => (
                <span key={item.city} className="flex items-center gap-1.5">
                  <span className="text-base">{item.flag}</span>
                  {item.city}
                </span>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
              Зачем идти на этот вебинар
            </h2>
            <div className="w-16 h-[3px] bg-[#FECE33] mx-auto mb-6" />
            <p className="text-gray-600 text-lg leading-relaxed">
              Q-commerce — единственный канал в России, темпы роста которого выросли. Но большинство FMCG-брендов
              до сих пор работают без аналитики полки: не видят стоки, не знают цены конкурентов, принимают
              решения вслепую. Этот вебинар всё изменит.
            </p>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              {
                icon: BarChart3,
                title: 'Реальные данные рынка',
                desc: 'Свежая статистика Q-comm, тренды 2026, расстановка сил между каналами',
                delay: 0,
              },
              {
                icon: Search,
                title: 'Исследование изнутри',
                desc: 'Где вы находитесь относительно других брендов — данные от десятков компаний',
                delay: 100,
              },
              {
                icon: ShoppingCart,
                title: 'Демо платформы 24SHELF',
                desc: 'Аналитика полки в реальном времени — мониторинг 2500+ дарксторов по всей России',
                delay: 200,
              },
              {
                icon: Gift,
                title: 'Спецусловия для участников',
                desc: 'Персональное демо + специальные условия на подключение только для тех, кто был на вебинаре',
                delay: 300,
              },
            ].map((item) => (
              <RevealSection key={item.title} delay={item.delay}>
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-7 hover:border-[#FECE33] transition-all hover:shadow-lg group h-full">
                  <div className="w-11 h-11 bg-[#FECE33] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-xl font-black text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="text-center">
            <a
              href="#register"
              className="inline-flex items-center gap-2 bg-[#FECE33] text-black font-bold px-10 py-4 rounded-full text-lg hover:bg-[#ffd84d] transition-all transform hover:scale-[1.02] shadow-md"
            >
              Зарегистрироваться
              <ArrowRight className="w-5 h-5" />
            </a>
          </RevealSection>
        </div>
      </section>

      {/* PROGRAM */}
      <section id="program" className="py-20 bg-[#FECE33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
              На вебинаре вы узнаете
            </h2>
          </RevealSection>

          <RevealSection>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-0">
                {[
                  {
                    num: 1,
                    title: 'Тренды Q-commerce в России и мире',
                    desc: 'Q-comm — единственный канал в РФ, который продолжает расти. Свежая статистика, расстановка сил между каналами. Почему подход FMCG устарел — и что такое QMCG.',
                  },
                  {
                    num: 2,
                    title: 'Исследование рынка: «Что нужно брендам в Q-comm»',
                    desc: 'Реальная картина: сколько компаний видят свои данные в реальном времени, кто работает вслепую, какие боли встречаются чаще всего.',
                  },
                  {
                    num: 3,
                    title: 'Презентация и демо 24SHELF',
                    desc: 'Мониторинг стоков, цен, промо и скидок по 2500+ дарксторам Самоката и Яндекс Лавки по всей России, 4 сбора данных в день.',
                  },
                  {
                    num: 4,
                    title: 'Потребительские инсайты: что покупают в Яндекс Лавке',
                    desc: 'Впервые — результаты собственного исследования на данных 24SHELF. Реальные объёмы продаж, доли брендов и потребительская корзина.',
                  },
                  {
                    num: 5,
                    title: 'Market Share — превью новой функции',
                    desc: 'Прототип раздела аналитики долей рынка и продаж по брендам и категориям. Что ещё в роадмэпе: Ozon Fresh, анализ упущенных продаж, SERP-позиции.',
                  },
                  {
                    num: 6,
                    title: 'Спецпредложение для участников',
                    desc: 'Специальные условия на подключение 24SHELF только для тех, кто будет на вебинаре. Приглашение на персональное демо.',
                  },
                ].map((item, i, arr) => (
                  <div
                    key={item.num}
                    className={`flex gap-5 py-6 ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#FECE33] flex items-center justify-center text-black font-black text-sm flex-shrink-0 mt-0.5">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-black text-black text-base mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </RevealSection>
        </div>
      </section>

      {/* SPEAKER */}
      <section id="speaker" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">Спикер</h2>
            <div className="w-16 h-[3px] bg-[#FECE33] mx-auto" />
          </RevealSection>

          <RevealSection>
            <div className="max-w-4xl mx-auto bg-white border-2 border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <img
                    src={speakerPhoto}
                    alt="Григорий Черняев"
                    className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#FECE33] shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-black mb-1">Григорий Черняев</h3>
                  <p className="text-[#FECE33] font-bold text-lg mb-4">CEO CIS, 24TTL</p>
                  <blockquote className="italic text-gray-600 text-base leading-relaxed mb-5 border-l-4 border-[#FECE33] pl-4">
                    «Более 6 лет развиваю и внедряю экосистему SaaS-решений по управлению цифровой полкой,
                    которой пользуются лидеры Global Fortune 500 по всему миру.»
                  </blockquote>
                  <div className="bg-gray-50 rounded-2xl p-5 mb-5">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={logo24TTL} alt="24TTL" className="h-8 object-contain" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Продуктовая IT-компания №1 в России и СНГ по синдикации рич-контента и решениям digital
                      merchandising в онлайн-ритейле. Резидент «Сколково», аккредитованная IT-компания, в реестре
                      разработчиков российского ПО. Технологический партнёр маркетплейсов и онлайн-ритейлеров. Офисы в ОАЭ,
                      Индонезии, Казахстане, Южной Корее, Мексике.
                    </p>
                    <a
                      href="https://24ttl.ru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-[#FECE33] font-bold text-sm hover:underline"
                    >
                      24ttl.ru
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="text-gray-400 text-xs leading-relaxed">
                    Клиенты: LG, Samsung, Yandex, Sber, STADA, AstraZeneca, Bayer, Colgate, Reckitt,
                    Heinz, SPLAT, Барьер, Gorenje, Groupe SEB, Xiaomi, Huawei, Midea, Polaris и другие бренды Fortune 500.
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* TARGET AUDIENCE */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
              Вебинар будет полезен, если вы:
            </h2>
            <div className="w-16 h-[3px] bg-[#FECE33] mx-auto" />
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: ShoppingCart,
                title: 'Работаете с Самокатом или Яндекс Лавкой',
                desc: 'и не понимаете, почему продажи скачут без видимых причин',
                delay: 0,
              },
              {
                icon: BarChart3,
                title: 'Принимаете решения по ассортименту или промо',
                desc: 'но не видите данные по стокам и ценам конкурентов в реальном времени',
                delay: 80,
              },
              {
                icon: Bell,
                title: 'Устали от отчётов раз в неделю',
                desc: 'и хотите аналитику, которая не устаревает к утру',
                delay: 160,
              },
              {
                icon: Eye,
                title: 'Хотите понять, где вы на рынке',
                desc: 'ваша доля полки, покрытие, промо-активность относительно конкурентов',
                delay: 240,
              },
              {
                icon: Zap,
                title: 'Планируете подключить аналитику Q-comm полки',
                desc: 'и хотите увидеть продукт вживую перед решением',
                delay: 320,
              },
              {
                icon: TrendingUp,
                title: 'Следите за трендами в Q-commerce',
                desc: 'и хотите свежую статистику, которой нет в открытых источниках',
                delay: 400,
              },
            ].map((item) => (
              <RevealSection key={item.title} delay={item.delay}>
                <div className="bg-white rounded-2xl p-6 h-full hover:shadow-md transition-shadow hover:-translate-y-0.5 transform transition-transform">
                  <div className="w-12 h-12 bg-[#FECE33] rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-black" />
                  </div>
                  <h4 className="font-black text-black text-base mb-1.5">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA / REGISTRATION */}
      <section id="register" className="py-20 bg-[#0F0F1A] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#FECE33]/6 blur-[140px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealSection className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Участвуйте бесплатно
              <br />
              <span className="text-[#FECE33]">— 16 апреля в 14:00</span>
            </h2>
            <div className="w-16 h-[3px] bg-[#FECE33] mx-auto mb-6" />
            <p className="text-white/70 text-lg">
              Зарегистрируйтесь сейчас. Ссылку на подключение пришлём на почту.
            </p>
          </RevealSection>

          <div className="max-w-2xl mx-auto">
            <RevealSection>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 mb-8">
                <div className="space-y-3">
                  {[
                    'Тренды Q-commerce в России — цифры и прогнозы 2026',
                    'Исследование рынка: где вы относительно других брендов',
                    'Демо 24SHELF — аналитика 2500+ дарксторов в реальном времени',
                    'Потребительские инсайты Яндекс Лавки — данные, которых нет в открытом доступе',
                    'Превью Market Share — новая функция аналитики долей рынка',
                    'Спецусловия на подключение только для участников вебинара',
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#FECE33] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-black text-xs font-black">✓</span>
                      </div>
                      <span className="text-white/80 text-sm leading-relaxed">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={100}>
              <RegistrationForm
                variant="dark"
                eventName="Q-comm Полка 2026 Webinar"
                googleScriptEnvKey="VITE_GOOGLE_SCRIPT_WEBINAR_URL"
                onSuccess={() => navigate('/events/ai-content-automation-webinar/thank-you')}
              />
              <p className="text-white/40 text-xs text-center mt-4">
                Регистрация закроется накануне мероприятия
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* STICKY BOTTOM BAR */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ${
          showStickyBar ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-[#0F0F1A]/95 backdrop-blur-md border-t border-white/10 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <p className="text-white/80 text-sm font-medium hidden sm:block truncate">
              Как брендам работать с Q-comm полкой в 2026{' '}
              <span className="text-white/40">· 16 апреля, 14:00 МСК</span>
            </p>
            <p className="text-white/80 text-xs font-medium sm:hidden truncate">
              16 апреля · 14:00 МСК
            </p>
            <a
              href="#register"
              className="flex-shrink-0 bg-[#FECE33] text-black font-bold text-sm px-6 py-2.5 rounded-full hover:bg-[#ffd84d] transition-colors whitespace-nowrap"
            >
              Зарегистрироваться
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
