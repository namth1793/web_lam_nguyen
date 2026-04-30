import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Payment from '../components/Payment';
import Lightbox from '../components/Lightbox';
import axios from '../lib/axios';

const isVideo = (src) => src && /\.(mp4|webm|ogg)$/i.test(src);

const STATS = [
  { value: '1,000,000+', label: 'Photos Edited' },
  { value: '12–24 hrs', label: 'Delivery Time' },
  { value: '99%', label: 'Satisfaction Rate' },
];

const WHY = [
  {
    icon: '🏆',
    title: 'Professional Quality',
    desc: 'Premium edits with sharp detail and refined aesthetics — every image crafted to the highest standard.',
  },
  {
    icon: '💰',
    title: 'Competitive Pricing',
    desc: 'Flexible packages that fit any budget. Competitive rates tailored to each product style.',
  },
  {
    icon: '🕐',
    title: '24/7 Customer Support',
    desc: 'A dedicated support team always ready to help at any time — including holidays.',
  },
  {
    icon: '⚡',
    title: 'Fast Delivery',
    desc: 'Reliable turnaround with quick responses and a flexible workflow. Standard edits in 12–24 hours.',
  },
  {
    icon: '🎨',
    title: 'Custom Services',
    desc: 'Editing styles tailored to your specific requirements, purpose, and desired output format.',
  },
];

export default function Home() {
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    axios.get('/api/services').then(r => setServices(r.data)).catch(() => {});
    axios.get('/api/testimonials').then(r => setTestimonials(r.data)).catch(() => {});
  }, []);

  useEffect(() => {
    if (testimonials.length < 2) return;
    const timer = setInterval(() => {
      setActiveTestimonial(p => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials]);

  return (
    <>
      {lightbox && (
        <Lightbox image={lightbox.image} title={lightbox.title} onClose={() => setLightbox(null)} />
      )}

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-primary-600/20 text-primary-300 text-sm font-semibold rounded-full mb-6 border border-primary-500/30">
              Professional Photo Editing Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Elevate Your <br />
              <span className="text-primary-400">Real Estate</span> &<br />
              Portrait Photography
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              From HDR Blending to Virtual Staging, we deliver stunning photo editing services
              with 12–24 hour turnaround. Trusted by photographers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <Link to="/contact" className="btn-primary text-base px-8 py-3.5">
                Get a Free Quote
              </Link>
              <Link to="/services" className="btn-outline text-base px-8 py-3.5 border-gray-500 text-gray-300 hover:bg-white hover:text-gray-900">
                View Services
              </Link>
            </div>
          </div>

          {/* Hero image grid */}
          <div className="flex-1 hidden lg:grid grid-cols-2 gap-4 max-w-lg">
            {[
              'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400&q=80',
              'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80',
              'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80',
              'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
            ].map((src, i) => (
              <div key={i} className={`rounded-2xl overflow-hidden ${i === 1 ? 'mt-6' : ''} shadow-2xl`}>
                <img src={src} alt="edited photo" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {STATS.map(s => (
              <div key={s.label} className="text-center p-6 rounded-2xl bg-primary-50 border border-primary-100">
                <div className="text-4xl font-display font-bold text-primary-600">{s.value}</div>
                <div className="text-sm font-medium text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="section-title mt-2">Our Services</h2>
            <p className="section-subtitle">
              High-quality photo editing services for real estate agents, photographers, and individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => (
              <div key={s.id} className="card group">
                <div
                  className="relative overflow-hidden h-48 cursor-zoom-in"
                  onClick={() => setLightbox({ image: s.image, title: s.title })}
                >
                  {isVideo(s.image) ? (
                    <video
                      src={s.image}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onMouseEnter={e => e.target.play()}
                      onMouseLeave={e => { e.target.pause(); e.target.currentTime = 0; }}
                    />
                  ) : (
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={e => { e.target.src = 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400&q=80'; }}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-3xl drop-shadow">{isVideo(s.image) ? '▶' : '🔍'}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-gray-900 text-base mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{s.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── About snippet ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
                alt="Our team"
                className="rounded-2xl shadow-2xl w-full object-cover h-96"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white rounded-2xl p-6 shadow-xl hidden sm:block">
                <div className="text-3xl font-display font-bold">10+</div>
                <div className="text-sm text-primary-200">Years of Experience</div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
            <h2 className="section-title mt-2 text-left">About Skyline Visual Studio</h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              At Skyline Visual Studio, we specialize in delivering high-quality, affordable photo editing
              services tailored to your needs. Our team of skilled editors brings years of experience in
              real estate photography, wedding photo editing, and portrait retouching.
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed">
              We serve real estate agents looking for standout listings, couples preserving their most
              memorable moments, and professional photographers seeking reliable post-production support.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 flex-1 min-w-40">
                <span className="text-2xl">🏆</span>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Top Quality</div>
                  <div className="text-xs text-gray-500">Outstanding Service</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 flex-1 min-w-40">
                <span className="text-2xl">🌍</span>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Global Clients</div>
                  <div className="text-xs text-gray-500">10+ Countries</div>
                </div>
              </div>
            </div>
            <Link to="/about" className="btn-primary mt-8 inline-flex">
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary-200 font-semibold text-sm uppercase tracking-wider">Our Commitment</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2">Why Choose Us</h2>
            <p className="text-primary-100 mt-4 max-w-2xl mx-auto">
              We combine speed, quality, and affordability to deliver the best photo editing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {WHY.map(w => (
              <div key={w.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className="text-4xl mb-4">{w.icon}</div>
                <h3 className="text-white font-display font-semibold text-lg mb-2">{w.title}</h3>
                <p className="text-primary-100 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Reviews</span>
            <h2 className="section-title mt-2">What Our Clients Say</h2>
          </div>

          {testimonials.length > 0 && (
            <div className="bg-white rounded-3xl shadow-lg p-10 text-center relative">
              <div className="text-5xl text-primary-200 font-serif leading-none mb-4">"</div>
              <p className="text-gray-700 text-lg leading-relaxed italic max-w-2xl mx-auto">
                {testimonials[activeTestimonial].content}
              </p>
              <div className="mt-8 flex flex-col items-center gap-2">
                <img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-primary-100"
                  onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[activeTestimonial].name)}&background=2563eb&color=fff`; }}
                />
                <div>
                  <div className="font-display font-semibold text-gray-900">{testimonials[activeTestimonial].name}</div>
                  <div className="text-sm text-gray-500">{testimonials[activeTestimonial].role}</div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                    <span key={i} className="text-amber-400">★</span>
                  ))}
                </div>
              </div>

              {/* Dots */}
              <div className="flex gap-2 justify-center mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === activeTestimonial ? 'bg-primary-600 w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Payment Methods ── */}
      <Payment />

      {/* ── CTA ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-title">Ready to Transform Your Photos?</h2>
          <p className="section-subtitle">
            Send us your images today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Get a Free Quote
            </Link>
            <a href="mailto:imagejayce@gmail.com" className="btn-outline text-base px-8 py-4">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
