import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Trang Chủ' },
  { to: '/about', label: 'Về Chúng Tôi' },
  { to: '/services', label: 'Dịch Vụ' },
  { to: '/contact', label: 'Liên Hệ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <span className="font-display font-bold text-xl text-gray-900">
            Skyline<span className="text-primary-600"> Visual Studio</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                pathname === l.to
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="ml-3 btn-primary text-sm px-5 py-2.5">
            Nhận Báo Giá
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80 border-t border-gray-100' : 'max-h-0'}`}>
        <div className="px-4 py-3 bg-white space-y-1">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === l.to ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="block btn-primary text-sm text-center mt-2">
            Nhận Báo Giá
          </Link>
        </div>
      </div>
    </header>
  );
}
