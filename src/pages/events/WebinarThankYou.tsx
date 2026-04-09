import { CircleCheck as CheckCircle, ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroBackground from '../../components/HeroBackground';

const FONT = { fontFamily: "'Manrope', system-ui, sans-serif" };

export default function WebinarThankYou() {
  return (
    <div style={FONT} className="min-h-screen bg-[#0F0F1A] relative overflow-hidden flex items-center justify-center">
      <HeroBackground />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-28 text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-[#FECE33]/15 rounded-full flex items-center justify-center animate-[scale-in_0.5s_ease-out]">
            <CheckCircle className="w-11 h-11 text-[#FECE33]" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-5 tracking-tight leading-tight">
          Заявка на участие отправлена успешно
        </h1>

        <div className="flex items-center justify-center gap-3 mb-6">
          <Mail className="w-5 h-5 text-[#FECE33]" />
          <p className="text-white/70 text-lg leading-relaxed">
            Следите за обновлениями по указанному вами e-mail
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 max-w-md mx-auto">
          <p className="text-white/50 text-sm leading-relaxed">
            Вебинар состоится <span className="text-white font-semibold">16 апреля 2026</span> в <span className="text-white font-semibold">14:00 МСК</span>.
            Ссылка на подключение будет отправлена на вашу почту.
          </p>
        </div>

        <Link
          to="/events/ai-content-automation-webinar"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Вернуться на страницу вебинара
        </Link>
      </div>
    </div>
  );
}
