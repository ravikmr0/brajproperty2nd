export const PHONE_NUMBER = '+916395103201';
export const WHATSAPP_NUMBER = '916395103201';
export const EMAIL = 'info@brajproperty.in';
export const ADDRESS = 'Vrindavan, Mathura, Uttar Pradesh, India';
export const TAGLINE = 'Invest Right. Live Better. Earn Smarter.';

export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  road: string;
  type: 'Residential' | 'Commercial';
  status: 'Completed' | 'Running' | 'Upcoming';
  statusColor: string;
  description: string;
  amenities: string[];
  image: string;
  gallery: string[];
  mapLink: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'krishna-gaur-city',
    name: 'Krishna Gaur City',
    location: 'Mathura-Vrindavan Road',
    road: '30 ft',
    type: 'Residential',
    status: 'Completed',
    statusColor: 'bg-green-500',
    description: 'An MVDA-approved residential colony near Bankey Bihari Temple. This project offers a blend of spiritual living and modern amenities, making it an ideal choice for families seeking a serene lifestyle in the heart of Vrindavan.',
    amenities: ['Gated Entry', 'Electricity', 'CC Roads', 'Street Lights', 'STP', 'Temple', 'Park', '24/7 Security', 'Water Supply'],
    image: '/projects/krishna-gaur-city-t.png',
    gallery: [
      '/projects/krishna-gaur-city-1.jpeg',
      '/projects/krishna-gaur-city-2.jpeg',
      '/projects/krishna-gaur-city-3.jpeg',
      '/projects/krishna-gaur-city-4.jpeg',
      '/projects/krishna-gaur-city-5.jpeg',
    ],
    mapLink: 'https://maps.google.com',
  },
  {
    id: '2',
    slug: 'bankey-bihari-kunj',
    name: 'Bankey Bihari Kunj',
    location: 'In front of Krishna Kutir, Ramtaal',
    road: '30 ft',
    type: 'Residential',
    status: 'Running',
    statusColor: 'bg-green-500',
    description: 'Where devotion meets peaceful living with comfort and positivity. A perfect destination for those who seek harmony between spiritual living and modern comforts in the heart of Vrindavan.',
    amenities: ['Gated Entry', 'Electricity', 'CC Roads', 'Street Lights', 'STP', 'Temple', 'Park', '24/7 Security', 'Water Supply'],
    image: '/projects/bankey-bihari-kunj-t.png',
    gallery: [
      '/projects/bankey-bihari-kunj-1.jpeg',
      '/projects/bankey-bihari-kunj-2.jpeg',
      '/projects/bankey-bihari-kunj-3.jpeg',
      '/projects/bankey-bihari-kunj-4.jpeg',
      '/projects/bankey-bihari-kunj-5.jpeg',
    ],
    mapLink: 'https://maps.google.com',
  },
  {
    id: '3',
    slug: 'bankey-bihari-greens',
    name: 'Bankey Bihari Greens',
    location: 'In front of Vaishno Mata Temple, near Chaar Dham',
    road: '40 ft',
    type: 'Commercial',
    status: 'Running',
    statusColor: 'bg-yellow-500',
    description: 'A devotion-inspired commercial development with strong future growth. Strategically located near Chaar Dham, this project promises excellent returns for investors looking at commercial opportunities in Vrindavan.',
    amenities: ['Gated Entry', 'Electricity', 'CC Roads', 'Street Lights', 'STP', 'Temple', 'Park', '24/7 Security', 'Water Supply'],
    image: '/projects/bankey-bihari-greens-t.png',
    gallery: [
      '/projects/bankey-bihari-greens-1.jpeg',
      '/projects/bankey-bihari-greens-2.jpeg',
      '/projects/bankey-bihari-greens-3.jpeg',
      '/projects/bankey-bihari-greens-4.jpeg',
    ],
    mapLink: 'https://maps.google.com',
  },
  {
    id: '4',
    slug: 'braj-anand-vatika',
    name: 'Braj Anand Vatika',
    location: 'Satoha–Naugaon, Govardhan Road',
    road: '40 ft',
    type: 'Residential',
    status: 'Running',
    statusColor: 'bg-yellow-500',
    description: 'A premium project combining devotion, nature, and appreciation potential. Located on the scenic Govardhan Road, this project offers a unique opportunity to own property in one of the most spiritually significant areas.',
    amenities: ['Gated Entry', 'Electricity', 'CC Roads', 'Street Lights', 'STP', 'Temple', 'Park', '24/7 Security', 'Water Supply'],
    image: '/projects/braj-anand-vatika-t.png',
    gallery: [
      '/projects/braj-anand-vatika-1.jpeg',
      '/projects/braj-anand-vatika-2.jpeg',
      '/projects/braj-anand-vatika-3.jpeg',
      '/projects/braj-anand-vatika-4.jpeg',
    ],
    mapLink: 'https://maps.google.com',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    location: 'Delhi',
    quote: 'BrajProperty helped me find the perfect plot near Bankey Bihari Temple. The documentation was transparent and the process was smooth. My investment has already appreciated 40% in just 2 years!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Gupta',
    location: 'Mumbai',
    quote: 'As a spiritual person, owning land in Vrindavan was my dream. BrajProperty made it hassle-free. The team is very professional and trustworthy.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Verma',
    location: 'Bangalore',
    quote: 'I invested in Krishna Gaur City and the returns have been phenomenal. The location, amenities, and MVDA approval gave me complete confidence.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sunita Devi',
    location: 'Jaipur',
    quote: 'The team at BrajProperty is genuinely helpful. They guided us through every step and even helped with site visits. Highly recommend!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 4,
  },
  {
    id: 5,
    name: 'Vikram Singh',
    location: 'Lucknow',
    quote: 'Best real estate experience in Vrindavan. Clear titles, great locations, and excellent after-sale support. My family now has a spiritual home in Vrindavan.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    rating: 5,
  },
  {
    id: 6,
    name: 'Meena Agarwal',
    location: 'Kolkata',
    quote: 'We bought a plot in Bankey Bihari Kunj and could not be happier. The colony is well-planned and the spiritual vibe is unmatched.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    rating: 5,
  },
];

export const galleryImages = [
  { id: 1, src: '/projects/bankey-bihari-greens-1.jpeg', category: 'Bankey Bihari Greens', alt: 'Bankey Bihari Greens view 1' },
  { id: 2, src: '/projects/bankey-bihari-greens-2.jpeg', category: 'Bankey Bihari Greens', alt: 'Bankey Bihari Greens view 2' },
  { id: 3, src: '/projects/bankey-bihari-greens-3.jpeg', category: 'Bankey Bihari Greens', alt: 'Bankey Bihari Greens view 3' },
  { id: 4, src: '/projects/bankey-bihari-greens-4.jpeg', category: 'Bankey Bihari Greens', alt: 'Bankey Bihari Greens view 4' },
  { id: 5, src: '/projects/bankey-bihari-kunj-1.jpeg', category: 'Bankey Bihari Kunj', alt: 'Bankey Bihari Kunj view 1' },
  { id: 6, src: '/projects/bankey-bihari-kunj-2.jpeg', category: 'Bankey Bihari Kunj', alt: 'Bankey Bihari Kunj view 2' },
  { id: 7, src: '/projects/bankey-bihari-kunj-3.jpeg', category: 'Bankey Bihari Kunj', alt: 'Bankey Bihari Kunj view 3' },
  { id: 8, src: '/projects/bankey-bihari-kunj-4.jpeg', category: 'Bankey Bihari Kunj', alt: 'Bankey Bihari Kunj view 4' },
  { id: 9, src: '/projects/bankey-bihari-kunj-5.jpeg', category: 'Bankey Bihari Kunj', alt: 'Bankey Bihari Kunj view 5' },
  { id: 10, src: '/projects/braj-anand-vatika-1.jpeg', category: 'Braj Anand Vatika', alt: 'Braj Anand Vatika view 1' },
  { id: 11, src: '/projects/braj-anand-vatika-2.jpeg', category: 'Braj Anand Vatika', alt: 'Braj Anand Vatika view 2' },
  { id: 12, src: '/projects/braj-anand-vatika-3.jpeg', category: 'Braj Anand Vatika', alt: 'Braj Anand Vatika view 3' },
  { id: 13, src: '/projects/braj-anand-vatika-4.jpeg', category: 'Braj Anand Vatika', alt: 'Braj Anand Vatika view 4' },
  { id: 14, src: '/projects/krishna-gaur-city-1.jpeg', category: 'Krishna Gaur City', alt: 'Krishna Gaur City view 1' },
  { id: 15, src: '/projects/krishna-gaur-city-2.jpeg', category: 'Krishna Gaur City', alt: 'Krishna Gaur City view 2' },
  { id: 16, src: '/projects/krishna-gaur-city-3.jpeg', category: 'Krishna Gaur City', alt: 'Krishna Gaur City view 3' },
  { id: 17, src: '/projects/krishna-gaur-city-4.jpeg', category: 'Krishna Gaur City', alt: 'Krishna Gaur City view 4' },
  { id: 18, src: '/projects/krishna-gaur-city-5.jpeg', category: 'Krishna Gaur City', alt: 'Krishna Gaur City view 5' },
];

export const managementTeam = [
  {
    name: 'Punit Sharma',
    designation: 'Founder & Chairman',
    image: '/punit-sharma.png',
    bio: 'With over 20 years of experience in real estate, Punit Sharma founded BrajProperty with a vision to make Vrindavan accessible to devotees and investors alike.',
  },
  {
    name: 'Vinay Sharma',
    designation: 'Managing Director',
    image: '/vinay-sharma.png',
    bio: 'A seasoned professional with deep knowledge of the Vrindavan property market, leading operations and client relationships.',
  },
  {
    name: 'Anita Gupta',
    designation: 'Head of Sales',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80',
    bio: 'Expert in helping families find their perfect plot with personalized attention and genuine care.',
  },
];
