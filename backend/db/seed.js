const db = require('./init');

db.exec('DELETE FROM testimonials');
db.exec('DELETE FROM services');
db.exec('DELETE FROM contacts');

const services = [
  {
    title: 'HDR Blending',
    description: 'Combine multiple exposure layers to produce flawless real estate images with sharp detail in both highlights and shadows.',
    icon: 'camera',
    image: '/project/HDR.jpg',
    turnaround: '12 hours',
    price_from: '',
    sort_order: 1
  },
  {
    title: 'Day to Dusk',
    description: 'Transform daytime real estate photos into stunning twilight scenes that attract more buyers and boost listing appeal.',
    icon: 'sun',
    image: '/project/Day  .jpg',
    turnaround: '12 hours',
    price_from: '',
    sort_order: 2
  },
  {
    title: 'Flash Ambient',
    description: 'Professionally blend flash and ambient light for interior photography, showcasing properties in their most natural, beautiful light.',
    icon: 'zap',
    image: '/project/Flash Ambient.jpg',
    turnaround: '12 hours',
    price_from: '',
    sort_order: 3
  },
  {
    title: 'Portrait Retouching',
    description: 'Professional portrait editing for weddings, corporate headshots, and personal photos with natural, flattering results.',
    icon: 'user',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
    turnaround: '12 hours',
    price_from: '',
    sort_order: 4
  },
  {
    title: 'Virtual Staging',
    description: 'Digitally furnish empty rooms so buyers can visualize the full potential of a property, increasing engagement and sales.',
    icon: 'home',
    image: '/project/Virtual Renovation and Virtual Staging.jpg',
    turnaround: '24 hours',
    price_from: '',
    sort_order: 5
  },
  {
    title: 'Floorplan 2D & 3D',
    description: 'Create accurate, detailed 2D and 3D floor plans that help buyers clearly understand a property\'s layout and dimensions.',
    icon: 'layout',
    image: '/project/Floorplan 2D.webp',
    turnaround: '24 hours',
    price_from: '',
    sort_order: 6
  },
  {
    title: 'Virtual Renovation',
    description: 'Showcase a property\'s before-and-after potential through digital renovation — new paint, flooring, furniture, and more.',
    icon: 'tool',
    image: '/project/Virtual Renovation and Virtual Staging.jpg',
    turnaround: '24 hours',
    price_from: '',
    sort_order: 7
  },
  {
    title: 'Video Editing',
    description: 'Professional editing for real estate walkthrough and drone videos with color grading, music, and smooth transitions.',
    icon: 'video',
    image: '/project/sunset..jpg',
    turnaround: '24 hours',
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
    role: 'Real Estate Agent, Century 21',
    content: 'Skyline Visual Studio completely transformed my property listings. The attention to detail and 12-hour turnaround is truly impressive. My listings now sell 40% faster!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=47'
  },
  {
    name: 'Michael Chen',
    role: 'Wedding Photographer',
    content: 'They turned my wedding photos into beautiful memories that clients will treasure forever. The color grading and retouching are absolutely perfect. Highly recommended!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Professional Photographer',
    content: 'The team is not only talented but also very easy to work with. Smooth communication, competitive pricing, and consistently outstanding quality.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=32'
  },
  {
    name: 'James Wilson',
    role: 'Real Estate Developer',
    content: 'The virtual staging service is a real game-changer! Empty units now look beautiful and sell much faster. The ROI on this service is incredible.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=8'
  }
];

const insertTestimonial = db.prepare(`
  INSERT INTO testimonials (name, role, content, rating, avatar)
  VALUES (@name, @role, @content, @rating, @avatar)
`);
testimonials.forEach(t => insertTestimonial.run(t));

console.log('✅ Seed complete: 8 services, 4 testimonials');
