import { Link } from 'react-router-dom';

const TEAM = [
  {
    name: 'Tanty Nguyen',
    role: 'Founder & Lead Editor',
    bio: 'Over 10 years of experience in real estate and portrait photography editing.',
    img: 'https://i.pravatar.cc/300?img=15',
  },
  {
    name: 'Linh Pham',
    role: 'Senior HDR Specialist',
    bio: 'Expert in HDR blending and flash ambient techniques for interior photography.',
    img: 'https://i.pravatar.cc/300?img=25',
  },
  {
    name: 'Minh Tran',
    role: 'Virtual Staging Artist',
    bio: 'Creates photorealistic virtual staging that helps properties sell faster.',
    img: 'https://i.pravatar.cc/300?img=35',
  },
  {
    name: 'Ha Le',
    role: 'Video Editor',
    bio: 'Specializes in property walkthrough and drone footage editing with cinematic quality.',
    img: 'https://i.pravatar.cc/300?img=45',
  },
];

const VALUES = [
  { icon: '🎯', title: 'Quality First', desc: 'Every edit goes through multiple quality checks before delivery.' },
  { icon: '🤝', title: 'Trust & Unity', desc: 'We build strong partnerships with our clients through open communication.' },
  { icon: '🚀', title: 'Innovation', desc: 'Constantly adopting the latest editing techniques and technologies.' },
  { icon: '💡', title: 'Creativity', desc: 'Bringing fresh, creative perspectives to every project we undertake.' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary-600/20 text-primary-300 text-sm font-semibold rounded-full mb-4 border border-primary-500/30">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">About TantyMedia</h1>
          <p className="text-gray-300 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            A passionate team of photo editing experts dedicated to helping you showcase your work at its absolute best.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40L1440 40L1440 10C1200 40 960 0 720 15C480 30 240 0 0 15L0 40Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
              alt="Team at work"
              className="rounded-2xl shadow-2xl w-full object-cover h-[420px]"
            />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-5 hidden sm:flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-2xl">📸</div>
              <div>
                <div className="font-display font-bold text-gray-900 text-lg">10,000+</div>
                <div className="text-sm text-gray-500">Photos Delivered</div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-2">
              Making Professional Editing Accessible to Everyone
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              At TantyMedia, we specialize in providing high-quality and affordable photo editing services tailored
              to meet your needs. Founded in Hanoi, Vietnam, we've grown into a globally trusted team serving
              clients in over 50 countries.
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed">
              We believe that every photographer, real estate agent, and business deserves access to world-class
              editing — regardless of budget or location. Our skilled editors work around the clock to ensure
              fast delivery without sacrificing quality.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { num: '5+', label: 'Years Experience' },
                { num: '500+', label: 'Happy Clients' },
                { num: '50+', label: 'Countries Served' },
                { num: '12hr', label: 'Fast Delivery' },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                  <div className="text-2xl font-display font-bold text-primary-600">{s.num}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">What Drives Us</span>
            <h2 className="section-title mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(v => (
              <div key={v.title} className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-colors duration-300">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display font-semibold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Meet the Team</span>
            <h2 className="section-title mt-2">Our Skilled Editors</h2>
            <p className="section-subtitle">
              A dedicated team of professionals passionate about making your photos look their best.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map(m => (
              <div key={m.name} className="card text-center group p-6">
                <div className="relative inline-block mb-4">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-gray-100 group-hover:ring-primary-200 transition-all duration-300"
                    onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=2563eb&color=fff&size=150`; }}
                  />
                </div>
                <h3 className="font-display font-semibold text-gray-900">{m.name}</h3>
                <div className="text-primary-600 text-sm font-medium mt-1">{m.role}</div>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Building */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Culture</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-2">
              Team Building & Culture
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              We foster a workplace culture grounded in trust, creativity, and unity. Our team building
              activities strengthen relationships and ensure every member brings their best to each project.
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed">
              From regular knowledge-sharing sessions to team outings, we invest in our people because
              we believe a happy, cohesive team produces the best work for our clients.
            </p>
            <div className="flex gap-3 mt-6 flex-wrap">
              {['Trust', 'Unity', 'Excellence', 'Growth'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            {[
              'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
              'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80',
              'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80',
              'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80',
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="team building"
                className={`rounded-2xl object-cover w-full h-44 ${i % 2 === 1 ? 'mt-6' : ''} shadow-md hover:shadow-lg transition-shadow duration-300`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white">Ready to Work With Us?</h2>
          <p className="text-primary-100 mt-3 text-lg">Get in touch today and let's discuss your project.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  );
}
