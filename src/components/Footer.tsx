import { Link } from 'react-router-dom';
import { Mail, MapPin, Calendar } from 'lucide-react';
import idrfLogo from '../assets/idrf_logo.png';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-4 mb-6">
              <img src={idrfLogo} alt="IDRF" className="h-16 w-16" />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-4">
              International Digital Retail Forum — платформа для обмена опытом и инновациями в области цифрового ритейла
            </p>
            <p className="text-gray-500 text-sm">
              Партнер-организатор мероприятия:{' '}
              <a href="https://24ttl.ru" target="_blank" rel="noopener noreferrer" className="text-[#FECE33] font-bold hover:underline">
                24TTL
              </a>
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
                <span>Москва, Россия</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Calendar className="w-5 h-5 text-[#FECE33]" />
                <span>Мероприятия проводятся регулярно</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-[#FECE33]">Быстрые ссылки</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-400 hover:text-[#FECE33] transition-colors">Главная</Link>
              <Link to="/#events" className="block text-gray-400 hover:text-[#FECE33] transition-colors">Мероприятия</Link>
              <Link to="/#about" className="block text-gray-400 hover:text-[#FECE33] transition-colors">О нас</Link>
              <Link to="/#contacts" className="block text-gray-400 hover:text-[#FECE33] transition-colors">Контакты</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">&copy; 2026 IDRF. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
