import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../lib/axios';

const STATS = [
  { value: '1,000,000+', label: 'Ảnh Đã Chỉnh Sửa' },
  { value: '12–24 giờ', label: 'Thời Gian Giao Hàng' },
  { value: '99%', label: 'Tỷ Lệ Hài Lòng' },
];

const WHY = [
  {
    icon: '🏆',
    title: 'Chất Lượng Chuyên Nghiệp',
    desc: 'Chỉnh sửa cao cấp với chi tiết sắc nét và tính thẩm mỹ tinh tế — mỗi hình ảnh được chế tác theo tiêu chuẩn cao nhất.',
  },
  {
    icon: '💰',
    title: 'Giá Cả Cạnh Tranh',
    desc: 'Các gói dịch vụ linh hoạt phù hợp với nhiều ngân sách. Giá cả cạnh tranh linh hoạt theo từng phong cách sản phẩm.',
  },
  {
    icon: '🕐',
    title: 'Hỗ Trợ Khách Hàng 24/7',
    desc: 'Đội ngũ hỗ trợ tận tâm luôn sẵn sàng giúp đỡ bất cứ lúc nào — kể cả ngày lễ.',
  },
  {
    icon: '⚡',
    title: 'Giao Hàng Nhanh Chóng',
    desc: 'Giao hàng đáng tin cậy với phản hồi nhanh và quy trình làm việc linh hoạt. Chỉnh sửa tiêu chuẩn trong 12–24 giờ.',
  },
  {
    icon: '🎨',
    title: 'Dịch Vụ Tùy Chỉnh',
    desc: 'Phong cách chỉnh sửa được điều chỉnh theo yêu cầu, mục đích và định dạng đầu ra cụ thể của bạn.',
  },
];

export default function Home() {
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-primary-600/20 text-primary-300 text-sm font-semibold rounded-full mb-6 border border-primary-500/30">
              Dịch Vụ Chỉnh Sửa Ảnh Chuyên Nghiệp
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Nâng Tầm Ảnh <br />
              <span className="text-primary-400">Bất Động Sản</span> &<br />
              Ảnh Chân Dung
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Từ HDR Blending đến dàn dựng ảo, chúng tôi cung cấp dịch vụ chỉnh sửa ảnh tuyệt đẹp
              với thời gian giao hàng 12–24 giờ. Được tin tưởng bởi các nhiếp ảnh gia trên toàn thế giới.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <Link to="/contact" className="btn-primary text-base px-8 py-3.5">
                Nhận Báo Giá Miễn Phí
              </Link>
              <Link to="/services" className="btn-outline text-base px-8 py-3.5 border-gray-500 text-gray-300 hover:bg-white hover:text-gray-900">
                Xem Dịch Vụ
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
                <img src={src} alt="ảnh đã chỉnh sửa" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500" />
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
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Những Gì Chúng Tôi Cung Cấp</span>
            <h2 className="section-title mt-2">Dịch Vụ Của Chúng Tôi</h2>
            <p className="section-subtitle">
              Dịch vụ chỉnh sửa ảnh chất lượng cao dành cho môi giới bất động sản, nhiếp ảnh gia và cá nhân.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => (
              <div key={s.id} className="card group cursor-pointer">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={e => { e.target.src = 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400&q=80'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-white bg-primary-600 px-2 py-1 rounded-full">
                      ⏱ {s.turnaround}
                    </span>
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
              Xem Tất Cả Dịch Vụ →
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
                alt="Đội ngũ của chúng tôi"
                className="rounded-2xl shadow-2xl w-full object-cover h-96"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white rounded-2xl p-6 shadow-xl hidden sm:block">
                <div className="text-3xl font-display font-bold">10+</div>
                <div className="text-sm text-primary-200">Năm Kinh Nghiệm</div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Chúng Tôi Là Ai</span>
            <h2 className="section-title mt-2 text-left">Về Skyline Visual Studio</h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Tại Skyline Visual Studio, chúng tôi chuyên cung cấp dịch vụ chỉnh sửa ảnh chất lượng cao và
              giá cả phải chăng, phù hợp với nhu cầu của bạn. Đội ngũ biên tập viên lành nghề mang đến
              nhiều năm kinh nghiệm trong nhiếp ảnh bất động sản, chỉnh sửa ảnh cưới và ảnh chân dung.
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Chúng tôi phục vụ các nhà môi giới bất động sản muốn danh sách nhà nổi bật hơn, các cặp đôi
              lưu giữ những khoảnh khắc đáng nhớ nhất, và các nhiếp ảnh gia chuyên nghiệp đang tìm kiếm
              hỗ trợ hậu kỳ đáng tin cậy.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 flex-1 min-w-40">
                <span className="text-2xl">🏆</span>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Chất Lượng Hàng Đầu</div>
                  <div className="text-xs text-gray-500">Dịch Vụ Xuất Sắc</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 flex-1 min-w-40">
                <span className="text-2xl">🌍</span>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Khách Hàng Toàn Cầu</div>
                  <div className="text-xs text-gray-500">10+ Quốc Gia</div>
                </div>
              </div>
            </div>
            <Link to="/about" className="btn-primary mt-8 inline-flex">
              Tìm Hiểu Thêm Về Chúng Tôi →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary-200 font-semibold text-sm uppercase tracking-wider">Cam Kết Của Chúng Tôi</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2">Tại Sao Chọn Chúng Tôi</h2>
            <p className="text-primary-100 mt-4 max-w-2xl mx-auto">
              Chúng tôi kết hợp tốc độ, chất lượng và giá cả hợp lý để mang lại trải nghiệm chỉnh sửa ảnh tốt nhất.
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
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Đánh Giá</span>
            <h2 className="section-title mt-2">Khách Hàng Nói Gì Về Chúng Tôi</h2>
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

      {/* ── CTA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-title">Sẵn Sàng Biến Đổi Ảnh Của Bạn?</h2>
          <p className="section-subtitle">
            Gửi ảnh của bạn cho chúng tôi ngay hôm nay và trải nghiệm sự khác biệt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Nhận Báo Giá Miễn Phí
            </Link>
            <a href="mailto:tantymedia@gmail.com" className="btn-outline text-base px-8 py-4">
              Gửi Email Cho Chúng Tôi
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
