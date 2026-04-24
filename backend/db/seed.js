const db = require('./init');

// Clear existing data
db.exec('DELETE FROM testimonials');
db.exec('DELETE FROM services');
db.exec('DELETE FROM contacts');

// Seed services
const services = [
  {
    title: 'HDR Blending',
    description: 'Combine multiple exposures to create perfectly balanced real estate photos with stunning detail in both highlights and shadows.',
    icon: 'camera',
    image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=80',
    turnaround: '12 hours',
    price_from: '$1.50',
    sort_order: 1
  },
  {
    title: 'Day to Dusk',
    description: 'Transform your daytime property photos into breathtaking twilight shots that attract more buyers and increase listing appeal.',
    icon: 'sun',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
    turnaround: '12 hours',
    price_from: '$3.00',
    sort_order: 2
  },
  {
    title: 'Flash Ambient',
    description: 'Expert blending of flash and ambient light for interior photography that showcases properties in their best natural light.',
    icon: 'zap',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80',
    turnaround: '12 hours',
    price_from: '$2.00',
    sort_order: 3
  },
  {
    title: 'Portrait Editing',
    description: 'Professional portrait retouching for weddings, corporate headshots, and personal photography with natural, flattering results.',
    icon: 'user',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
    turnaround: '12 hours',
    price_from: '$2.50',
    sort_order: 4
  },
  {
    title: 'Virtual Staging',
    description: 'Digitally furnish empty rooms to help buyers visualize the full potential of a property, boosting engagement and sales.',
    icon: 'home',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    turnaround: '24 hours',
    price_from: '$25.00',
    sort_order: 5
  },
  {
    title: 'Floorplan 2D & 3D',
    description: 'Create detailed and accurate 2D and 3D floor plans that give buyers a clear understanding of property layout and dimensions.',
    icon: 'layout',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    turnaround: '24 hours',
    price_from: '$15.00',
    sort_order: 6
  },
  {
    title: 'Virtual Renovation',
    description: 'Show the before and after potential of a property by digitally renovating spaces — new paint, flooring, fixtures and more.',
    icon: 'tool',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80',
    turnaround: '24 hours',
    price_from: '$20.00',
    sort_order: 7
  },
  {
    title: 'Video Editing',
    description: 'Professional property walkthrough and drone video editing with color grading, music, and seamless transitions.',
    icon: 'video',
    image: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=600&q=80',
    turnaround: '24 hours',
    price_from: '$30.00',
    sort_order: 8
  }
];

const insertService = db.prepare(`
  INSERT INTO services (title, description, icon, image, turnaround, price_from, sort_order)
  VALUES (@title, @description, @icon, @image, @turnaround, @price_from, @sort_order)
`);
services.forEach(s => insertService.run(s));

// Seed testimonials
const testimonials = [
  {
    name: 'Sarah Thompson',
    role: 'Real Estate Agent, Century 21',
    content: 'TantyMedia has completely transformed my property listings. Their attention to detail and quick 12-hour turnaround time truly impressed me. My listings now sell 40% faster!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=47'
  },
  {
    name: 'Michael Chen',
    role: 'Wedding Photographer',
    content: 'They transformed my wedding photos into stunning memories that my clients cherish forever. The color grading and retouching are absolutely flawless. Highly recommend!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Professional Photographer',
    content: 'Their team is not only talented but also incredibly easy to work with. Communication is seamless, prices are unbeatable, and quality is always top-notch.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=32'
  },
  {
    name: 'James Wilson',
    role: 'Property Developer',
    content: 'Virtual staging service is a game changer! Empty units now look beautifully furnished and sell much faster. The ROI on this service is incredible.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=8'
  }
];

const insertTestimonial = db.prepare(`
  INSERT INTO testimonials (name, role, content, rating, avatar)
  VALUES (@name, @role, @content, @rating, @avatar)
`);
testimonials.forEach(t => insertTestimonial.run(t));

console.log('✅ Seed completed: 8 services, 4 testimonials');
