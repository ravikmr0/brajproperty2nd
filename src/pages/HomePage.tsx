import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Phone, ArrowRight, Shield, FileCheck, TrendingUp, CreditCard, Building2, Star,
  CheckCircle2, ChevronRight, ChevronLeft, Quote, MapPin,
} from 'lucide-react';
import { testimonials, PHONE_NUMBER } from '@/data/siteData';
import LocationSlider from '@/components/LocationSlider';
import ProjectsSlider from '@/components/ProjectsSlider';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=90',
    badge: '🏡 MVDA Approved',
    title: 'Own Sacred Land in',
    highlight: 'Vrindavan — Divine & Secure',
    subtitle: 'MVDA-approved plots near Bankey Bihari & Prem Mandir. Clear titles, transparent process, and strong appreciation potential.'
  },
  {
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&q=90',
    badge: '📈 25–40% Annual Appreciation',
    title: 'Premium Plots Starting at',
    highlight: '₹5,000/sq.yd — Limited',
    subtitle: "Invest in Vrindavan's fastest-growing corridors. 25–40% annual appreciation backed by 100+ happy families."
  },
  {
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920&q=90',
    badge: '🌟 Premium Locations',
    title: 'Build Your Dream Home',
    highlight: "In Krishna's Divine City",
    subtitle: 'Residential and investment plots with flexible EMI options, easy documentation, and dedicated support at every step.'
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=90',
    badge: '🤝 100+ Happy Families',
    title: 'Trusted by Families',
    highlight: 'Across 4 Premium Projects',
    subtitle: 'From site visit to registry — we handle everything. Your peace of mind is our highest priority.'
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
      {/* Hero Section */}
      <section className="relative min-h-[90vh] sm:min-h-screen w-full flex items-center overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-black/80 via-black/60 to-black/40 sm:to-black/30" />
            </div>
          ))}
        </div>

        {/* Navigation Arrows — hidden on mobile for cleaner look */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex w-10 h-10 bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/25 rounded-full items-center justify-center transition-all duration-200 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex w-10 h-10 bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/25 rounded-full items-center justify-center transition-all duration-200 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full pt-28 pb-24 sm:pt-28 sm:pb-36">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-12 items-center">

            {/* Left Column — Text Content */}
            <div className="text-center lg:text-left">
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 mb-5 sm:mb-5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                <span className="text-white text-[11px] sm:text-sm font-medium tracking-wide">MVDA Approved · Legally Verified</span>
              </div>

              {/* Headline — shorter on mobile */}
              <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[56px] font-heading font-bold text-white mb-3 sm:mb-4 leading-[1.15] tracking-tight">
                {heroSlides[currentSlide].title}
                {heroSlides[currentSlide].highlight && (
                  <span className="block text-saffron-400 mt-1">{heroSlides[currentSlide].highlight}</span>
                )}
              </h1>

              {/* Subtitle — hidden on mobile for clean look */}
              {heroSlides[currentSlide].subtitle && (
                <p className="hidden sm:block text-base md:text-lg text-gray-200/90 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  {heroSlides[currentSlide].subtitle}
                </p>
              )}

              {/* CTA Buttons — hidden on mobile */}
              <div className="hidden sm:flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-saffron-500 hover:bg-saffron-400 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-saffron-500/30 transition-all duration-200 hover:scale-105 hover:shadow-xl"
                >
                  <Phone className="w-4 h-4" />
                  Book Free Site Visit
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 border border-white/35 text-white font-semibold text-base px-6 py-3.5 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all duration-200"
                >
                  Explore Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Social proof — compact on mobile */}
              <div className="mt-5 sm:mt-8 flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="text-white text-xs sm:text-sm ml-1 font-semibold">4.9/5</span>
                </div>
                <span className="text-white/20">·</span>
                <span className="text-gray-300 text-xs sm:text-sm">100+ Families</span>
                <span className="text-white/20">·</span>
                <span className="text-gray-300 text-xs sm:text-sm">4 Projects</span>
              </div>
            </div>

            {/* Right Column — Quick Facts Card (lg+ only) */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/15">
                  <div className="w-11 h-11 rounded-xl bg-saffron-500/25 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-saffron-300" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-base leading-tight">100% Trusted & Approved</div>
                    <div className="text-gray-300 text-xs mt-0.5">Clear titles · MVDA compliant</div>
                  </div>
                </div>

                <div className="space-y-3.5 mb-5">
                  {[
                    { icon: MapPin, title: 'Prime Temple Connectivity', desc: 'Near Bankey Bihari, Prem Mandir, ISKCON' },
                    { icon: TrendingUp, title: '25–40% Annual Appreciation', desc: `One of Vrindavan's fastest-growing zones` },
                    { icon: FileCheck, title: 'Hassle-Free Documentation', desc: 'Transparent process & smooth registration' },
                    { icon: CreditCard, title: 'Flexible Payment Plans', desc: 'Easy EMI options for all budgets' },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Icon className="w-4 h-4 text-saffron-300" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm leading-snug">{title}</div>
                        <div className="text-gray-300 text-xs leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to="/contact"
                    className="flex-1 text-center bg-saffron-500 hover:bg-saffron-400 text-white text-sm font-bold py-2.5 rounded-xl transition-all shadow-md"
                  >
                    📞 Book Site Visit
                  </Link>
                  <Link
                    to="/projects"
                    className="flex-1 text-center border border-white/30 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-white/15 transition-all"
                  >
                    View Plots →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Badges — fewer on mobile */}
        <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-20 w-full px-4">
          <div className="mx-auto flex flex-row justify-center gap-2 sm:gap-3 md:gap-5">
            {['MVDA Approved', '100+ Happy Families', '4 Premium Projects', 'Vrindavan'].map((badge, idx) => (
              <div
                key={badge}
                className={`flex items-center gap-1.5 bg-black/30 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-white/15 ${idx >= 2 ? 'hidden sm:flex' : 'flex'}`}
              >
                <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0" />
                <span className="text-white text-[10px] sm:text-xs font-medium whitespace-nowrap">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-14 sm:bottom-[72px] left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-saffron-400'
                  : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/35 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-8 md:py-10 bg-gradient-to-b from-white to-saffron-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-saffron-900 font-semibold text-sm uppercase tracking-wider">About BrajProperty</span>
              <h2 className="section-title mt-2">Building Trust, One Plot at a Time</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  BrajProperty is dedicated to offering premium, legally verified, and strategically located land opportunities in Vrindavan’s rapidly growing real estate market. 
                  We understand that buying land is not just a financial investment it is a long-term legacy, a secure foundation for future generations, and a step toward building something meaningful in a spiritually powerful destination.
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">
                  With MVDA-approved projects situated near the holiest temples and key spiritual landmarks of Lord Krishna’s divine city, we provide properties that combine faith, security, and smart growth potential. 
                  Every project is carefully selected to ensure proper documentation, clear titles, and strong future appreciation prospects.
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Whether you are looking to build your dream home, create a peaceful retirement space, or secure high-potential investment land, BrajProperty guides you with transparency, professionalism, and personalized support at every step.
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Our mission is simple to help families and investors invest confidently in Vrindavan’s sacred land while ensuring legal safety, prime connectivity, and long-term value growth. 
                  With BrajProperty, you don’t just purchase land you secure peace of mind in the eternal land of devotion.
                </p>
              <Link to="/projects" className="btn-primary bg-temple-900 hover:bg-temple-800">
                Explore Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/about.png"
                alt="About BrajProperty"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 bg-saffron-800 text-white rounded-xl p-4 shadow-xl">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm text-white">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pt-6 pb-8 md:pt-8 md:pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
        
          <ProjectsSlider />

          <div className="text-center mt-4">
            <Link to="/projects" className="btn-primary bg-saffron-900 hover:bg-saffron-800">
              View All Projects <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 md:py-10 bg-gradient-to-b from-saffron-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="section-title mt-1.5">Your Trusted Property Partner</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Shield, title: 'MVDA Approved', desc: 'All projects are officially approved by Mathura-Vrindavan Development Authority.' },
              { icon: Building2, title: 'Prime Temple Connectivity', desc: 'Plots near Bankey Bihari, Prem Mandir, ISKCON & Chandrodaya temples.' },
              { icon: FileCheck, title: 'Secure Documentation', desc: 'Clear titles, transparent paperwork, and hassle-free registration process.' },
              { icon: CreditCard, title: 'Easy Payment Options', desc: 'Flexible payment plans and EMI options to suit every budget.' },
              { icon: TrendingUp, title: 'High Appreciation', desc: 'Vrindavan property values have seen 25-40% appreciation annually.' },
              { icon: Star, title: 'Trusted by 100+ Families', desc: 'Proven track record of delivering quality plots with complete satisfaction.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-temple-200 group">
                <div className="w-12 h-12 bg-gold-100 group-hover:bg-temple-600 rounded-xl flex items-center justify-center mb-3 transition-colors">
                  <Icon className="w-6 h-6 text-temple-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Highlights */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <span className="text-saffron-600 font-semibold text-sm uppercase tracking-wider">Location Advantage</span>
            <h2 className="section-title mt-1.5">Near Holy Landmarks</h2>
            <p className="section-subtitle">Our projects are strategically located near Vrindavan's most revered temples</p>
          </div>

          <LocationSlider />
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-8 md:py-10 bg-gradient-to-b from-temple-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="section-title mt-1.5">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.id} className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 italic">"{t.quote}"</p>
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

          <div className="text-center mt-6">
            <Link to="/testimonials" className="btn-secondary">
              View All Testimonials <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

