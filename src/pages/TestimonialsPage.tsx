import { Star, Quote } from 'lucide-react';
import { testimonials, TAGLINE } from '../data/siteData';
import { Link } from 'react-router-dom';

export default function TestimonialsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-10 bg-gradient-to-br from-saffron-50 via-white to-temple-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h1 className="section-title mt-2 text-4xl md:text-5xl">
            What Our <span className="text-saffron-500">Customers Say</span>
          </h1>
          <p className="section-subtitle mt-4">Real stories from real investors who trusted BrajProperty</p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { number: '100+', label: 'Happy Families' },
              { number: '4.9/5', label: 'Customer Rating' },
              { number: '95%', label: 'Referral Rate' },
              { number: '10+', label: 'Years of Trust' },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-saffron-50 rounded-xl p-6">
                <div className="text-2xl md:text-3xl font-bold text-saffron-600">{stat.number}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative">
                <Quote className="w-8 h-8 text-saffron-200 absolute top-4 right-4" />
                <div className="flex items-center gap-3 mb-4">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-saffron-200" />
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-gray-500 text-sm">{t.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                  {Array.from({ length: 5 - t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-200" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-saffron-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Video Reviews</span>
            <h2 className="section-title mt-2">Watch Customer Stories</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative rounded-xl overflow-hidden shadow-lg aspect-video bg-gray-900 group cursor-pointer">
                <img
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1507003211169-0a1dd7228f2d' : i === 2 ? '1494790108377-be9c29b29330' : '1472099645785-5658abf4ff4e'}?w=400&q=80`}
                  alt={`Video testimonial ${i}`}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-saffron-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">Happy Customer {i}</p>
                  <p className="text-gray-300 text-xs">Watch their journey</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
