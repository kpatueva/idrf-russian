import { Calendar, Clock, MapPin, Monitor, ArrowRight } from 'lucide-react';

export default function AiContentAutomationWebinar() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#FECE33] text-xl font-bold">IDRF Webinar</span>
              <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30">
                Онлайн
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
              <span className="text-[#FECE33]">AI CONTENT</span>
              <br />
              <span className="text-white">AUTOMATION</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-2xl">
              Как автоматизировать создание карточек товаров, описаний и визуалов для маркетплейсов
              с помощью генеративного ИИ. Практические инструменты и workflow.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center space-x-2 text-white">
                <Calendar className="w-5 h-5 text-[#FECE33]" />
                <span className="font-semibold">15 марта 2026</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Clock className="w-5 h-5 text-[#FECE33]" />
                <span className="font-semibold">14:00 - 16:00</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <MapPin className="w-5 h-5 text-[#FECE33]" />
                <span className="font-semibold">Онлайн (Zoom)</span>
              </div>
            </div>
            <div className="bg-[#FECE33] text-black px-8 py-4 rounded-full font-bold text-lg inline-block shadow-lg">
              Регистрация скоро откроется
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">О вебинаре</h2>
            <div className="w-20 h-1 bg-[#FECE33] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Генеративный ИИ меняет подход к созданию контента для маркетплейсов. На этом вебинаре мы покажем,
              как автоматизировать рутинные задачи и масштабировать производство контента без потери качества.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Monitor,
                title: 'Генерация карточек товаров',
                desc: 'Автоматическое создание описаний, характеристик и SEO-текстов для маркетплейсов',
              },
              {
                icon: Monitor,
                title: 'Визуальный контент',
                desc: 'Генерация и обработка изображений товаров с помощью AI-инструментов',
              },
              {
                icon: Monitor,
                title: 'Workflow и интеграции',
                desc: 'Как встроить ИИ-инструменты в существующие процессы команды',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-[#FECE33] transition-all">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-emerald-600" />
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
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">Для кого</h2>
            <div className="w-20 h-1 bg-[#FECE33] mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              'Контент-менеджеры маркетплейсов',
              'Руководители e-commerce подразделений',
              'SEO-специалисты и маркетологи',
              'Владельцы интернет-магазинов',
            ].map((text) => (
              <div key={text} className="flex items-center space-x-4 bg-white rounded-2xl p-6 border-2 border-gray-200">
                <div className="w-8 h-8 bg-[#FECE33] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-black text-lg">✓</span>
                </div>
                <span className="text-black font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Хотите участвовать?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Регистрация на вебинар откроется в ближайшее время. Оставьте свои контакты, чтобы не пропустить.
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
