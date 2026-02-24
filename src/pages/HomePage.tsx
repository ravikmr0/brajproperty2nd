import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Phone, MapPin, Download, ArrowRight, Shield, FileCheck, TrendingUp, CreditCard, Building2, Star,
  CheckCircle2, ChevronRight, ChevronLeft,
} from 'lucide-react';
import { testimonials, PHONE_NUMBER, TAGLINE } from '@/data/siteData';
import LocationSlider from '@/components/LocationSlider';
import ProjectsSlider from '@/components/ProjectsSlider';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=90',
    title: 'Own Your Dream Plot in the',
    highlight: 'Divine City of Vrindavan',
    subtitle: 'MVDA Approved | Prime Locations | High Return Potential'
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=90',
    title: 'Premium Residential Plots Near',
    highlight: 'Bankey Bihari & Prem Mandir',
    subtitle: 'Secure Your Future in the Holy Land'
  },
  {
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=90',
    title: 'Invest in Vrindavan\'s',
    highlight: 'Fastest Growing Property Market',
    subtitle: '25-40% Annual Appreciation | 100% Legal & Approved'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90',
    title: 'Modern Amenities in the',
    highlight: 'Sacred Heart of Braj',
    subtitle: 'Wide Roads | Green Spaces | Temple Connectivity'
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div>
      {/* Enhanced Hero Section with Slider */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-10 overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            </div>
          ))}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-saffron-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-temple-200/20 blur-3xl" />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-saffron-500/20 border border-saffron-400/30 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm animate-fade-in-up">
              <span className="w-2 h-2 bg-saffron-400 rounded-full animate-pulse" />
              <span className="text-saffron-200 text-sm font-semibold tracking-wide">MVDA APPROVED PROJECTS</span>
            </div>

            {/* Dynamic Heading based on current slide */}
            <h1 className="text-3xl md:text-[42px] lg:text-[54px] font-heading font-semibold text-white mb-5 animate-fade-in-up animate-delay-200" style={{ lineHeight: '1.18', letterSpacing: '0.4px' }}>
              {heroSlides[currentSlide].title}
              <span className="text-saffron-400 block mt-2">{heroSlides[currentSlide].highlight}</span>
            </h1>

            <div className="max-w-[520px]">
              <p className="text-[15px] md:text-[17px] text-gray-100/95 mb-3 animate-fade-in-up animate-delay-400" style={{ lineHeight: '1.6' }}>
                {heroSlides[currentSlide].subtitle}
              </p>
              <p className="text-saffron-300 font-semibold text-[15px] md:text-[17px] mb-6 animate-fade-in-up animate-delay-400 flex items-center gap-2">
                <span className="text-base" aria-hidden>*</span> {TAGLINE}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-3 mb-8 animate-fade-in-up animate-delay-600">
              <Link 
                to="/contact" 
                className="group relative bg-saffron-500 hover:bg-saffron-600 text-white font-semibold rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                style={{ padding: '10px 22px', fontSize: '14px' }}
              >
                <MapPin className="w-4 h-4" />
                <span>Get Quote</span>
              </Link>
              <Link 
                to="/projects" 
                className="group relative bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 font-semibold rounded-lg flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                style={{ padding: '10px 22px', fontSize: '14px' }}
              >
                <span>View Details</span>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-600">
              {['MVDA Approved', '100+ Happy Families', '4 Premium Projects'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-xl px-5 py-3 border border-white/20 hover:bg-white/25 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-white text-sm font-semibold">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Facts Panel */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl animate-fade-in-up animate-delay-400">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-saffron-500/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-saffron-300" />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">Trusted & Approved</div>
                  <div className="text-gray-200 text-sm">Clear titles, MVDA compliance</div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: MapPin, title: 'Prime Connectivity', desc: 'Near Bankey Bihari, Prem Mandir, ISKCON' },
                  { icon: TrendingUp, title: 'High Appreciation', desc: 'Strong long-term growth potential' },
                  { icon: FileCheck, title: 'Secure Documentation', desc: 'Transparent paperwork & registration' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mt-0.5">
                      <Icon className="w-5 h-5 text-saffron-300" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{title}</div>
                      <div className="text-gray-200 text-xs leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Link
                  to="/contact"
                  className="flex-1 text-center bg-white/15 hover:bg-white/25 text-white text-sm font-semibold py-2.5 rounded-lg transition-all"
                >
                  Book Site Visit
                </Link>
                <Link
                  to="/projects"
                  className="flex-1 text-center border border-white/30 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-white/15 transition-all"
                >
                  Explore Plots
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentSlide
                  ? 'w-12 h-3 bg-saffron-400'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/60'
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-white to-saffron-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">About BrajProperty</span>
              <h2 className="section-title mt-2">Building Trust, One Plot at a Time</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                BrajProperty brings the best opportunities in Vrindavan's fast-growing property market.
                Buying land is not just investment — it is a foundation for generations.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With MVDA-approved projects in prime locations near the holiest temples, we help families
                and investors secure their future in the divine city of Lord Krishna.
              </p>
              <Link to="/projects" className="btn-primary">
                Explore Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                alt="About BrajProperty"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-saffron-500 text-white rounded-xl p-5 shadow-xl">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm text-saffron-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Our Projects</span>
            <h2 className="section-title mt-2">Premium Residences</h2>
            <p className="section-subtitle">Discover our curated portfolio of luxury living spaces, designed for those who appreciate the finest things in life.</p>
          </div>

          <ProjectsSlider />

          <div className="text-center mt-8">
            <Link to="/projects" className="btn-primary">
              View All Projects <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-saffron-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="section-title mt-2">Your Trusted Property Partner</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Shield, title: 'MVDA Approved', desc: 'All projects are officially approved by Mathura-Vrindavan Development Authority.' },
              { icon: Building2, title: 'Prime Temple Connectivity', desc: 'Plots near Bankey Bihari, Prem Mandir, ISKCON & Chandrodaya temples.' },
              { icon: FileCheck, title: 'Secure Documentation', desc: 'Clear titles, transparent paperwork, and hassle-free registration process.' },
              { icon: CreditCard, title: 'Easy Payment Options', desc: 'Flexible payment plans and EMI options to suit every budget.' },
              { icon: TrendingUp, title: 'High Appreciation', desc: 'Vrindavan property values have seen 25-40% appreciation annually.' },
              { icon: Star, title: 'Trusted by 100+ Families', desc: 'Proven track record of delivering quality plots with complete satisfaction.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-saffron-200 group">
                <div className="w-14 h-14 bg-saffron-50 group-hover:bg-saffron-500 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-7 h-7 text-saffron-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Highlights */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Location Advantage</span>
            <h2 className="section-title mt-2">Near Holy Landmarks</h2>
            <p className="section-subtitle">Our projects are strategically located near Vrindavan's most revered temples</p>
          </div>

          <LocationSlider />
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-temple-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="section-title mt-2">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.id} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/testimonials" className="btn-secondary">
              View All Testimonials <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

