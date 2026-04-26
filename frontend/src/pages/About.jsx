import { Link } from 'react-router-dom';

const TEAM = [
  {
    name: 'Lam Nguyen',
    role: 'Nhà Sáng Lập & Chủ Sở Hữu',
    bio: 'Hơn 10 năm kinh nghiệm trong lĩnh vực chỉnh sửa ảnh bất động sản và ảnh chân dung.',
    img: 'https://i.pravatar.cc/300?img=15',
  },
  {
    name: 'Linh Pham',
    role: 'Chuyên Gia HDR Cao Cấp',
    bio: 'Chuyên gia trong kỹ thuật HDR Blending và Flash Ambient cho nhiếp ảnh nội thất.',
    img: 'https://i.pravatar.cc/300?img=25',
  },
  {
    name: 'Minh Tran',
    role: 'Nghệ Sĩ Dàn Dựng Ảo',
    bio: 'Tạo ra dàn dựng ảo siêu thực giúp bất động sản bán nhanh hơn.',
    img: 'https://i.pravatar.cc/300?img=35',
  },
  {
    name: 'Ha Le',
    role: 'Biên Tập Viên Video',
    bio: 'Chuyên về chỉnh sửa video tham quan bất động sản và cảnh quay drone với chất lượng điện ảnh.',
    img: 'https://i.pravatar.cc/300?img=45',
  },
];

const VALUES = [
  { icon: '🎯', title: 'Chất Lượng Trên Hết', desc: 'Mỗi bản chỉnh sửa đều trải qua nhiều lần kiểm tra chất lượng trước khi giao hàng.' },
  { icon: '🤝', title: 'Tin Tưởng & Đoàn Kết', desc: 'Chúng tôi xây dựng mối quan hệ đối tác bền vững với khách hàng thông qua giao tiếp cởi mở.' },
  { icon: '🚀', title: 'Đổi Mới Sáng Tạo', desc: 'Không ngừng áp dụng các kỹ thuật và công nghệ chỉnh sửa mới nhất.' },
  { icon: '💡', title: 'Sáng Tạo Nghệ Thuật', desc: 'Mang đến góc nhìn sáng tạo, tươi mới cho mỗi dự án chúng tôi thực hiện.' },
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
            Câu Chuyện Của Chúng Tôi
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Về Skyline Visual Studio</h1>
          <p className="text-gray-300 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Đội ngũ chuyên gia chỉnh sửa ảnh tâm huyết, luôn nỗ lực giúp bạn thể hiện công việc của mình ở mức đẹp nhất.
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
              alt="Đội ngũ làm việc"
              className="rounded-2xl shadow-2xl w-full object-cover h-[420px]"
            />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-5 hidden sm:flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-2xl">📸</div>
              <div>
                <div className="font-display font-bold text-gray-900 text-lg">1,000,000+</div>
                <div className="text-sm text-gray-500">Ảnh Đã Giao</div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Sứ Mệnh Của Chúng Tôi</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-2">
              Đưa Chỉnh Sửa Ảnh Chuyên Nghiệp Đến Với Mọi Người
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Tại Skyline Visual Studio, chúng tôi chuyên cung cấp dịch vụ chỉnh sửa ảnh chất lượng cao và
              giá cả phải chăng, phù hợp với nhu cầu của bạn. Với hơn 10 năm kinh nghiệm, chúng tôi đã
              phát triển thành đội ngũ được tin tưởng toàn cầu, hoạt động tại hơn 10 quốc gia trên thế giới.
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Chúng tôi tin rằng mọi nhiếp ảnh gia, nhà môi giới bất động sản và doanh nghiệp đều xứng đáng
              được tiếp cận dịch vụ chỉnh sửa ảnh đẳng cấp thế giới — bất kể ngân sách hay vị trí.
              Các biên tập viên lành nghề giao hàng trong 12–24 giờ mà không bao giờ đánh đổi chất lượng.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { num: '10+', label: 'Năm Kinh Nghiệm' },
                { num: '10+', label: 'Quốc Gia Phục Vụ' },
                { num: '12–24h', label: 'Giao Hàng Nhanh' },
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
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Điều Thúc Đẩy Chúng Tôi</span>
            <h2 className="section-title mt-2">Giá Trị Cốt Lõi</h2>
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
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Gặp Gỡ Đội Ngũ</span>
            <h2 className="section-title mt-2">Các Biên Tập Viên Tài Năng</h2>
            <p className="section-subtitle">
              Đội ngũ chuyên nghiệp tận tâm, luôn đam mê giúp ảnh của bạn trở nên đẹp nhất.
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
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Văn Hóa Của Chúng Tôi</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-2">
              Xây Dựng Đội Nhóm & Văn Hóa
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Chúng tôi nuôi dưỡng văn hóa làm việc dựa trên sự tin tưởng, sáng tạo và đoàn kết. Các hoạt
              động xây dựng đội nhóm củng cố mối quan hệ và đảm bảo mỗi thành viên đều cống hiến hết mình
              cho từng dự án.
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Từ các buổi chia sẻ kiến thức thường xuyên đến các chuyến dã ngoại, chúng tôi đầu tư vào
              con người vì tin rằng một đội ngũ hạnh phúc, gắn kết sẽ tạo ra những sản phẩm tốt nhất
              cho khách hàng.
            </p>
            <div className="flex gap-3 mt-6 flex-wrap">
              {['Tin Tưởng', 'Đoàn Kết', 'Xuất Sắc', 'Phát Triển'].map(tag => (
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
                alt="xây dựng đội nhóm"
                className={`rounded-2xl object-cover w-full h-44 ${i % 2 === 1 ? 'mt-6' : ''} shadow-md hover:shadow-lg transition-shadow duration-300`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white">Sẵn Sàng Hợp Tác Cùng Chúng Tôi?</h2>
          <p className="text-primary-100 mt-3 text-lg">Liên hệ ngay hôm nay và cùng thảo luận về dự án của bạn.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            Liên Hệ Ngay →
          </Link>
        </div>
      </section>
    </>
  );
}
