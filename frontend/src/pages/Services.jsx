import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../lib/axios';

const PROCESS = [
  { step: '01', title: 'Upload Photos', desc: 'Send us your photos via email or our contact form with your editing requirements.' },
  { step: '02', title: 'We Edit', desc: 'Our skilled editors get to work, applying professional techniques to your images.' },
  { step: '03', title: 'Quality Check', desc: 'Every image goes through a strict quality review before delivery.' },
  { step: '04', title: 'Delivery', desc: 'Receive your edited photos within 12–24 hours, ready to use.' },
];

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/services')
      .then(r => { setServices(r.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary-600/20 text-primary-300 text-sm font-semibold rounded-full mb-4 border border-primary-500/30">
            What We Do
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Our Services</h1>
          <p className="text-gray-300 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Professional photo editing for real estate, weddings, portraits and more — delivered fast, at prices you'll love.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40L1440 40L1440 10C1200 40 960 0 720 15C480 30 240 0 0 15L0 40Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">All Services</span>
            <h2 className="section-title mt-2">Photo Editing Solutions</h2>
            <p className="section-subtitle">
              Choose from our range of expert editing services, each crafted with precision and care.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="rounded-2xl bg-gray-100 animate-pulse h-72" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map(s => (
                <div key={s.id} className="card group">
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={e => { e.target.src = 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400&q=80'; }}
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-primary-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        From {s.price_from}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-gray-900 text-base mb-2">{s.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.description}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        ⏱ {s.turnaround} turnaround
                      </span>
                      <Link to="/contact" className="text-primary-600 text-xs font-semibold hover:text-primary-700">
                        Order Now →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="section-title mt-2">Simple 4-Step Process</h2>
            <p className="section-subtitle">
              Getting your photos edited is quick and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-primary-100 z-0" />

            {PROCESS.map((p, i) => (
              <div key={p.step} className="relative text-center z-10">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-5 text-xl font-display font-bold shadow-lg">
                  {p.step}
                </div>
                <h3 className="font-display font-semibold text-gray-900 text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-primary-50 border border-primary-100 rounded-3xl p-10">
            <div className="text-5xl mb-4">💰</div>
            <h2 className="text-2xl font-display font-bold text-gray-900">Custom Pricing for Every Budget</h2>
            <p className="text-gray-500 mt-3 leading-relaxed">
              Our pricing starts as low as $1.50 per image. Volume discounts available for bulk orders.
              Contact us for a custom quote tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/contact" className="btn-primary px-8 py-3.5">
                Get a Free Quote
              </Link>
              <a href="mailto:tantymedia@gmail.com" className="btn-outline px-8 py-3.5">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
