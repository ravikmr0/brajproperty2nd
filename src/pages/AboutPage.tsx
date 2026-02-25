import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  FileCheck2,
  Handshake,
  Landmark,
  MapPin,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 bg-white">
        <div className="absolute inset-0">
          <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-temple-100/60 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-gold-100/70 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(191,119,34,0.08),_transparent_55%)]" />
          <img
            src="/about.png"
            alt=""
            className="absolute right-0 bottom-0 w-[520px] opacity-10 hidden lg:block"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">About BrajProperty</span>
          <h1 className="section-title mt-3 text-4xl md:text-5xl">
            Building Trust. <span className="text-saffron-500">Creating Generations.</span>
          </h1>
          <p className="section-subtitle mt-4">
            Your Gateway to Secure & Spiritual Living in Vrindavan.
          </p>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            BrajProperty brings families and investors closer to Vrindavan's sacred energy through legally secure,
            MVDA-approved plots near major temples. We blend devotional peace with smart, long-term investment -
            creating a legacy that grows with every generation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['MVDA Approved', '100+ Families', 'Clear Registry'].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-temple-200 bg-white/80 px-4 py-2 text-sm font-medium text-saffron-500 shadow-sm"
              >
                <ShieldCheck className="h-4 w-4" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="section-title mt-2">Real Estate You Can Trust in Vrindavan</h2>
            <p className="text-gray-600 leading-relaxed mt-4">
              At BrajProperty, we bring you the best opportunities in Vrindavan real estate - a market that is
              growing rapidly in value and demand. We believe that buying land is not just an investment, but a
              foundation for generations. Our goal is simple to help you find the right property, at the right place,
              with the right returns.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                'MVDA-approved projects only',
                'Transparent documentation',
                'Customer-first approach',
                'Prime temple proximity',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <FileCheck2 className="mt-0.5 h-4 w-4 text-temple-600 shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-temple-100/60 blur-xl" />
            <img
              src="/about.png"
              alt="BrajProperty in Vrindavan"
              className="relative rounded-2xl shadow-xl border border-temple-100"
            />
          </div>
        </div>
      </section>

      {/* Mission + Goals */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-temple-50/40">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-temple-100 bg-white p-8 shadow-sm">
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
            <h2 className="section-title mt-2 text-2xl">Secure, Profitable, Hassle-Free</h2>
            <p className="text-gray-600 leading-relaxed mt-4">
              Our mission is to provide secure, profitable, and hassle-free property solutions for both end-users
              and investors. We offer plots that blend devotion, peace, and growth, giving you an opportunity to own
              a part of this sacred land. We believe long-term relationships through trust, honesty, and customer
              satisfaction.
            </p>
          </div>
          <div className="rounded-2xl border border-temple-100 bg-white p-8 shadow-sm">
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Our Goals</span>
            <h2 className="section-title mt-2 text-2xl">Trust, Transparency, Care</h2>
            <p className="text-gray-600 leading-relaxed mt-4">
              Our primary goal is to build trust by providing the right solutions and ensuring complete customer
              satisfaction. Whether you wish to build your dream home near the temples or seek a smart investment
              with assured returns, our dedicated team offers the best property options with honesty, transparency,
              and care.
            </p>
          </div>
        </div>
      </section>

      {/* About Projects */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">About the Projects</span>
            <h2 className="section-title mt-2">Peace, Devotion, and Modern Living</h2>
            <p className="section-subtitle mt-3">
              Discover the perfect blend of peace, devotion, and modern living with BrajProperty.in. Our premium
              plots in Vrindavan are ideal for both investment and personal living.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Located near renowned temples and highways',
              'Surrounded by spiritual ambiance and modern amenities',
              'Flexible plot sizes to suit your requirement',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-temple-100 bg-white p-6 shadow-sm">
                <MapPin className="h-5 w-5 text-temple-700" />
                <p className="mt-3 text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Bankey Bihari Greens',
              'Bankey Bihari Kunj',
              'Braj Anand Vatika',
              'Krishna Gaur City',
            ].map((project) => (
              <div key={project} className="rounded-2xl border border-temple-100 p-6 bg-white shadow-sm hover:shadow-lg transition-shadow">
                <MapPin className="h-5 w-5 text-temple-700" />
                <h3 className="mt-3 text-lg font-heading font-bold text-gray-900">{project}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gold-50/60">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Why Invest in Vrindavan</span>
            <h2 className="section-title mt-2">A Spiritual City with Strong Growth</h2>
            <p className="text-gray-600 leading-relaxed mt-4">
              Vrindavan is a rapidly growing spiritual and tourist destination. It offers high rental and resale
              potential, remains affordable compared to metro cities, and carries the blessings of owning land in
              the holy city.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                'Rapidly growing spiritual and tourist destination',
                'High rental and resale potential',
                'Affordable compared to metro cities',
                'Blessings of owning land in the holy city',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-gold-100 flex items-center justify-center text-temple-700 font-semibold">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-gold-100 bg-white p-8 shadow-sm">
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Property Highlights</span>
            <h3 className="text-2xl font-heading font-bold text-gray-900 mt-2">Prime, Secure, High-Return</h3>
            <div className="mt-5 grid gap-3">
              {[
                'Prime location near Bankey Bihari Temple, Prem Mandir, ISKCON, Chandrodaya Temple',
                'Ideal for residential or commercial use',
                'Safe and secure investment',
                'Best return on investment',
                'Easy payment options',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-gold-100 flex items-center justify-center text-temple-700 font-semibold">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-saffron-500 to-temple-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-3">Invest Right. Invest in Braj.</h2>
          <p className="text-saffron-100 mb-6">
            Explore MVDA-approved plots near Vrindavan's temples and build a legacy that grows with time.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/projects" className="btn-primary bg-white text-saffron-600 hover:bg-gray-100">
              View Projects <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/contact" className="btn-primary border border-white/70 text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

