import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import idrfLogo from '../assets/idrf_logo.png';
import idrfLogoFull from '../assets/idrf_logo-2.png';
import logo24TTLNew from '../assets/24ttl_logo_new.png';

const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/#events', label: 'Мероприятия' },
  { to: '/#about', label: 'О нас' },
  { to: '/#contacts', label: 'Контакты' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (to: string) => {
    setMobileOpen(false);
    if (to.includes('#') && location.pathname === '/') {
      const id = to.split('#')[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-1 sm:space-x-4 lg:space-x-6 flex-shrink min-w-0">
            <img src={idrfLogo} alt="IDRF" className="h-8 w-8 sm:h-12 sm:w-12 lg:h-14 lg:w-14 flex-shrink-0" />
            <img src={idrfLogoFull} alt="International Digital Retail Forum" className="h-8 sm:h-12 lg:h-16 flex-shrink-0" />
            <img src={logo24TTLNew} alt="24TTL" className="h-8 sm:h-12 lg:h-16 flex-shrink-0" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className="text-gray-900 hover:text-[#FECE33] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-900 hover:text-[#FECE33] transition-colors"
            aria-label="Меню"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className="block text-gray-900 hover:text-[#FECE33] transition-colors font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
