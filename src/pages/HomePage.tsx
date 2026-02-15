import { Link } from 'react-router-dom';
import {
  Phone, MapPin, Download, ArrowRight, Shield, FileCheck, TrendingUp, CreditCard, Building2, Star,
  CheckCircle2, ChevronRight,
} from 'lucide-react';
import { projects, testimonials, PHONE_NUMBER, WHATSAPP_NUMBER, TAGLINE } from '../data/siteData';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
            alt="Vrindavan property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-saffron-500/20 border border-saffron-400/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-saffron-400 rounded-full animate-pulse" />
              <span className="text-saffron-200 text-sm font-medium">MVDA Approved Projects</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6 animate-fade-in-up animate-delay-200">
              Own Your Dream Plot in the
              <span className="text-saffron-400"> Divine City of Vrindavan</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-4 animate-fade-in-up animate-delay-400">
              MVDA Approved | Prime Locations | High Return Potential
            </p>
            <p className="text-saffron-300 font-semibold text-lg mb-8 animate-fade-in-up animate-delay-400">
              ✨ {TAGLINE}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-600">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                <MapPin className="w-5 h-5 mr-2" />
                Book Site Visit
              </Link>
              <button className="btn-secondary border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </button>
              <a href={`tel:${PHONE_NUMBER}`} className="btn-primary bg-green-500 hover:bg-green-600 text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-10 animate-fade-in-up animate-delay-600">
              {['MVDA Approved', '100+ Happy Families', '4 Premium Projects'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-white text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-saffron-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <Link to="/about" className="btn-primary">
                Know More <ArrowRight className="w-4 h-4 ml-2" />
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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Our Projects</span>
            <h2 className="section-title mt-2">Featured Projects</h2>
            <p className="section-subtitle">Explore MVDA-approved residential and commercial plots in Vrindavan</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link key={project.id} to={`/projects/${project.slug}`} className="card group">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`${project.statusColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {project.status}
                    </span>
                    <span className="bg-white/90 text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 group-hover:text-saffron-600 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <MapPin className="w-4 h-4 text-saffron-500" />
                    {project.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Road: {project.road}</span>
                    <span className="text-saffron-600 font-semibold text-sm flex items-center gap-1">
                      View Details <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/projects" className="btn-primary">
              View All Projects <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-saffron-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="section-title mt-2">Your Trusted Property Partner</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Location Advantage</span>
            <h2 className="section-title mt-2">Near Holy Landmarks</h2>
            <p className="section-subtitle">Our projects are strategically located near Vrindavan's most revered temples</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Bankey Bihari Temple', distance: '2-5 km', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80' },
              { name: 'Prem Mandir', distance: '3-6 km', img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80' },
              { name: 'ISKCON Temple', distance: '2-4 km', img: 'https://images.unsplash.com/photo-1591018653407-b78cf89e4e5e?w=400&q=80' },
              { name: 'Chandrodaya Temple', distance: '4-7 km', img: 'https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=400&q=80' },
            ].map((temple) => (
              <div key={temple.name} className="card group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={temple.img} alt={temple.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold text-lg">{temple.name}</h4>
                    <p className="text-saffron-300 text-sm">{temple.distance} from projects</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-temple-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="section-title mt-2">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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

          <div className="text-center mt-10">
            <Link to="/testimonials" className="btn-secondary">
              View All Testimonials <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Strong CTA Strip */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80"
            alt="CTA background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-saffron-600/90 to-temple-700/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Plan Your Visit to Vrindavan Today
          </h2>
          <p className="text-saffron-100 text-lg mb-8">{TAGLINE}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-white text-saffron-600 hover:bg-gray-100 text-lg px-8 py-4">
              <MapPin className="w-5 h-5 mr-2" />
              Book Free Site Visit
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want to plan a site visit to Vrindavan.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg px-8 py-4"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
