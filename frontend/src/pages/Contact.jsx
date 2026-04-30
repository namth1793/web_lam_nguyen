import { useState } from 'react';
import axios from '../lib/axios';

const SERVICES = [
  'HDR Blending',
  'Day to Dusk',
  'Flash Ambient',
  'Portrait Retouching',
  'Virtual Staging',
  'Floorplan 2D & 3D',
  'Virtual Renovation',
  'Video Editing',
  'Other',
];

const INFO = [
  { icon: '📍', label: 'Address', value: 'Hanoi, Vietnam' },
  { icon: '✉️', label: 'Email', value: 'imagejayce@gmail.com', href: 'mailto:imagejayce@gmail.com' },
  { icon: '📘', label: 'Facebook', value: 'Skyline Visual Studio', href: 'https://www.facebook.com/profile.php?id=61570752783428' },
  { icon: '📸', label: 'Instagram', value: '@jayce_earley', href: 'https://www.instagram.com/jayce_earley/' },
  { icon: '🕐', label: 'Working Hours', value: '24/7 – Always Open' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your full name.';
    if (!form.email.trim()) e.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address.';
    if (!form.message.trim()) e.message = 'Please enter your message.';
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setStatus('loading');
    try {
      await axios.post('/api/contacts', form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary-600/20 text-primary-300 text-sm font-semibold rounded-full mb-4 border border-primary-500/30">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Contact Us</h1>
          <p className="text-gray-300 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Send us your photos and requirements — we'll get back to you within a few hours.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40L1440 40L1440 10C1200 40 960 0 720 15C480 30 240 0 0 15L0 40Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Contact Information</span>
                <h2 className="text-2xl font-display font-bold text-gray-900 mt-2">Let's Talk</h2>
                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  Our team is available 24/7. We typically respond within a few hours.
                </p>
              </div>

              <div className="space-y-4">
                {INFO.map(item => (
                  <div key={item.label} className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                    <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-gray-700 text-sm font-medium hover:text-primary-600 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick note */}
              <div className="bg-primary-600 rounded-2xl p-6 text-white">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="font-display font-semibold text-lg">12–24 Hour Delivery</h3>
                <p className="text-primary-100 text-sm mt-2 leading-relaxed">
                  Standard edits delivered in 12 hours. Virtual staging and floor plans in 24 hours.
                  Support available 24/7 including holidays.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-6">Send Us a Message</h3>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✅</div>
                    <h4 className="text-xl font-display font-bold text-gray-900">Message Sent!</h4>
                    <p className="text-gray-500 mt-2 text-sm">
                      Thank you for reaching out. We'll get back to you within a few hours.
                    </p>
                    <button
                      onClick={() => setStatus(null)}
                      className="mt-6 btn-primary text-sm px-6 py-2.5"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${
                            errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-primary-400 bg-gray-50 focus:bg-white'
                          }`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="example@email.com"
                          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${
                            errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-primary-400 bg-gray-50 focus:bg-white'
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 xxx xxx xxxx"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 bg-gray-50 focus:bg-white text-sm outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Needed</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 bg-gray-50 focus:bg-white text-sm outline-none transition-colors"
                        >
                          <option value="">Select a service...</option>
                          {SERVICES.map(s => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your project — number of photos, requirements, deadline..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors resize-none ${
                          errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-primary-400 bg-gray-50 focus:bg-white'
                        }`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    {status === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm">
                        Something went wrong. Please try again or email us directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full btn-primary py-4 text-base justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <span className="flex items-center gap-2 justify-center">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : 'Send Message →'}
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      We respond within a few hours. Your information is kept private.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
