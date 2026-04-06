import { Calendar, Clock, MapPin, BarChart3, ArrowRight } from 'lucide-react';

export default function DigitalRetailAnalyticsMeetup() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#FECE33] text-xl font-bold">IDRF Meetup</span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold border border-blue-500/30">
                Оффлайн
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
              <span className="text-[#FECE33]">DIGITAL RETAIL</span>
              <br />
              <span className="text-white">ANALYTICS</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-2xl">
              Q-Commerce-аналитика, предиктивные модели и data-driven решения для ритейлеров.
              Разбор инструментов и подходов от практиков рынка.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center space-x-2 text-white">
                <Calendar className="w-5 h-5 text-[#FECE33]" />
                <span className="font-semibold">10 апреля 2026</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Clock className="w-5 h-5 text-[#FECE33]" />
                <span className="font-semibold">11:00 - 14:00</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <MapPin className="w-5 h-5 text-[#FECE33]" />
                <span className="font-semibold">Москва, Loft Hall</span>
              </div>
            </div>
            <div className="bg-[#FECE33] text-black px-8 py-4 rounded-full font-bold text-lg inline-block shadow-lg">
              Скоро открытие регистрации
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">О митапе</h2>
            <div className="w-20 h-1 bg-[#FECE33] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Данные -- новая нефть ритейла. На этом митапе мы разберем, как строить аналитические системы
              нового поколения, которые дают реальное конкурентное преимущество.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: BarChart3,
                title: 'Q-Commerce-аналитика',
                desc: 'Метрики и дашборды для быстрой коммерции: от заказа до доставки за 15 минут',
              },
              {
                icon: BarChart3,
                title: 'Предиктивные модели',
                desc: 'ML-модели для прогнозирования спроса, оптимизации запасов и ценообразования',
              },
              {
                icon: BarChart3,
                title: 'Data-driven решения',
                desc: 'Как перейти от интуитивных решений к data-driven подходу в управлении ритейлом',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-[#FECE33] transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-black text-black mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">Программа</h2>
            <div className="w-20 h-1 bg-[#FECE33] mx-auto mb-8"></div>
            <p className="text-gray-600">Программа будет опубликована в ближайшее время</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { time: '11:00 - 11:30', title: 'Регистрация и нетворкинг' },
              { time: '11:30 - 12:00', title: 'Выступление 1 (Скоро будет объявлено)' },
              { time: '12:00 - 12:30', title: 'Выступление 2 (Скоро будет объявлено)' },
              { time: '12:30 - 13:00', title: 'Выступление 3 (Скоро будет объявлено)' },
              { time: '13:00 - 13:30', title: 'Панельная дискуссия' },
              { time: '13:30 - 14:00', title: 'Q&A и нетворкинг' },
            ].map((item) => (
              <div key={item.time} className="bg-white rounded-2xl p-6 border-2 border-gray-200 flex items-center gap-6">
                <span className="text-sm font-bold text-gray-500 whitespace-nowrap w-28">{item.time}</span>
                <span className="text-black font-bold">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Хотите участвовать?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Регистрация на митап откроется в ближайшее время. Свяжитесь с нами, чтобы не пропустить.
          </p>
          <a
            href="mailto:info@idrf.online"
            className="inline-flex items-center bg-[#FECE33] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-[#ffd84d] transition-all transform hover:scale-[1.02] shadow-lg"
          >
            Написать нам
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </>
  );
}
