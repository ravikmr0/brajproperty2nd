import { useEffect, useState } from 'react';
import { galleryImages, TAGLINE } from '../data/siteData';
import { X } from 'lucide-react';

const categories = [
  'All',
  'Bankey Bihari Greens',
  'Bankey Bihari Kunj',
  'Braj Anand Vatika',
  'Krishna Gaur City',
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const withBase = (src: string) => {
    if (src.startsWith('http://') || src.startsWith('https://')) return src;
    const base = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');
    const cleaned = src.replace(/^\//, '');
    return `${base}${cleaned}`;
  };

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  useEffect(() => {
    filteredImages.forEach((img) => {
      console.log('[Gallery] image src:', withBase(img.src));
    });
  }, [filteredImages]);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-10 bg-gradient-to-br from-saffron-50 via-white to-temple-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Gallery</span>
          <h1 className="section-title mt-2 text-4xl md:text-5xl">
            Our <span className="text-saffron-500">Photo Gallery</span>
          </h1>
          <p className="section-subtitle mt-4">Explore our projects, team, and events through stunning visuals</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-saffron-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-saffron-50 hover:text-saffron-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((img) => (
              <button
                key={img.id}
                onClick={() => setLightboxImage(img.src)}
                className="relative rounded-xl overflow-hidden aspect-square group cursor-pointer"
              >
                {imageErrors[img.id] ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
                    Image failed to load
                  </div>
                ) : (
                  <img
                    src={withBase(img.src)}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={() => setImageErrors((prev) => ({ ...prev, [img.id]: true }))}
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-4">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 transition-transform">
                    {img.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-6 right-6 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <X className="w-5 h-5 text-white" />
          </button>
          <img
            src={withBase(lightboxImage).replace('w=600', 'w=1200')}
            alt="Gallery"
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}


    </div>
  );
}
