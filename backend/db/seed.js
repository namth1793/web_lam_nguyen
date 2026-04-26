const db = require('./init');

db.exec('DELETE FROM testimonials');
db.exec('DELETE FROM services');
db.exec('DELETE FROM contacts');

const services = [
  {
    title: 'HDR Blending',
    description: 'Kết hợp nhiều lớp phơi sáng để tạo ra ảnh bất động sản hoàn hảo với chi tiết sắc nét trong cả vùng sáng và vùng tối.',
    icon: 'camera',
    image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=80',
    turnaround: '12 giờ',
    price_from: '',
    sort_order: 1
  },
  {
    title: 'Day to Dusk',
    description: 'Biến ảnh bất động sản ban ngày thành cảnh hoàng hôn tuyệt đẹp, thu hút nhiều người mua hơn và tăng sức hút cho danh sách nhà.',
    icon: 'sun',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
    turnaround: '12 giờ',
    price_from: '',
    sort_order: 2
  },
  {
    title: 'Flash Ambient',
    description: 'Kết hợp chuyên nghiệp ánh sáng flash và ánh sáng môi trường cho nhiếp ảnh nội thất, giúp bất động sản hiện ra trong ánh sáng tự nhiên đẹp nhất.',
    icon: 'zap',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80',
    turnaround: '12 giờ',
    price_from: '',
    sort_order: 3
  },
  {
    title: 'Chỉnh Sửa Ảnh Chân Dung',
    description: 'Chỉnh sửa chân dung chuyên nghiệp cho ảnh cưới, ảnh doanh nghiệp và ảnh cá nhân với kết quả tự nhiên, tôn nét đẹp.',
    icon: 'user',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
    turnaround: '12 giờ',
    price_from: '',
    sort_order: 4
  },
  {
    title: 'Dàn Dựng Ảo',
    description: 'Trang trí nội thất số cho các căn phòng trống, giúp người mua hình dung tiềm năng đầy đủ của bất động sản, tăng tương tác và doanh số.',
    icon: 'home',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    turnaround: '24 giờ',
    price_from: '',
    sort_order: 5
  },
  {
    title: 'Bản Vẽ 2D & 3D',
    description: 'Tạo bản vẽ mặt bằng 2D và 3D chi tiết, chính xác, giúp người mua hiểu rõ bố cục và kích thước của bất động sản.',
    icon: 'layout',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    turnaround: '24 giờ',
    price_from: '',
    sort_order: 6
  },
  {
    title: 'Cải Tạo Ảo',
    description: 'Thể hiện tiềm năng trước và sau của bất động sản bằng cách cải tạo không gian kỹ thuật số — sơn mới, sàn mới, đồ đạc và nhiều hơn nữa.',
    icon: 'tool',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80',
    turnaround: '24 giờ',
    price_from: '',
    sort_order: 7
  },
  {
    title: 'Chỉnh Sửa Video',
    description: 'Chỉnh sửa video tham quan bất động sản và drone chuyên nghiệp với hiệu chỉnh màu sắc, âm nhạc và chuyển cảnh mượt mà.',
    icon: 'video',
    image: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=600&q=80',
    turnaround: '24 giờ',
    price_from: '',
    sort_order: 8
  }
];

const insertService = db.prepare(`
  INSERT INTO services (title, description, icon, image, turnaround, price_from, sort_order)
  VALUES (@title, @description, @icon, @image, @turnaround, @price_from, @sort_order)
`);
services.forEach(s => insertService.run(s));

const testimonials = [
  {
    name: 'Sarah Thompson',
    role: 'Môi Giới Bất Động Sản, Century 21',
    content: 'Skyline Visual Studio đã hoàn toàn thay đổi danh sách bất động sản của tôi. Sự chú ý đến từng chi tiết và thời gian giao hàng 12 giờ thực sự ấn tượng. Các tin đăng của tôi hiện bán nhanh hơn 40%!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=47'
  },
  {
    name: 'Michael Chen',
    role: 'Nhiếp Ảnh Gia Cưới',
    content: 'Họ đã biến ảnh cưới của tôi thành những kỷ niệm tuyệt đẹp mà khách hàng trân trọng mãi. Hiệu chỉnh màu và retouching hoàn toàn hoàn hảo. Rất đáng để giới thiệu!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Nhiếp Ảnh Gia Chuyên Nghiệp',
    content: 'Đội ngũ không chỉ tài năng mà còn rất dễ làm việc cùng. Giao tiếp mượt mà, giá cả cạnh tranh và chất lượng luôn xuất sắc.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=32'
  },
  {
    name: 'James Wilson',
    role: 'Nhà Phát Triển Bất Động Sản',
    content: 'Dịch vụ dàn dựng ảo thực sự thay đổi cuộc chơi! Các căn hộ trống giờ trông đẹp đẽ và bán nhanh hơn rất nhiều. ROI của dịch vụ này thật tuyệt vời.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=8'
  }
];

const insertTestimonial = db.prepare(`
  INSERT INTO testimonials (name, role, content, rating, avatar)
  VALUES (@name, @role, @content, @rating, @avatar)
`);
testimonials.forEach(t => insertTestimonial.run(t));

console.log('✅ Seed hoàn tất: 8 dịch vụ, 4 đánh giá');
