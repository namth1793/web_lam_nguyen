import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">TM</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                Tanty<span className="text-primary-400">Media</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Professional photo editing services for real estate, weddings, and portraits.
              High quality, fast delivery, unbeatable prices — trusted by photographers worldwide.
            </p>
            <div className="flex gap-3 mt-5">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map(s => (
                <a key={s} href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200">
                  <span className="text-xs font-bold text-gray-400 hover:text-white capitalize">{s[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact Us' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2">
                <span>📍</span>
                <span>147 Trieu Khuc Street, HaNoi, Vietnam</span>
              </li>
              <li className="flex gap-2">
                <span>✉️</span>
                <a href="mailto:tantymedia@gmail.com" className="hover:text-white transition-colors">
                  tantymedia@gmail.com
                </a>
              </li>
              <li className="flex gap-2">
                <span>💬</span>
                <span>Skype: tantymedia@gmail.com</span>
              </li>
              <li className="flex gap-2">
                <span>🕐</span>
                <span>Mon–Fri, 9:00AM – 5:00PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} TantyMedia. All rights reserved.</p>
          <p>Professional Photo Editing Services</p>
        </div>
      </div>
    </footer>
  );
}
