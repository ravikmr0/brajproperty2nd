import { Link } from 'react-router-dom';
import { TrendingUp, MapPin, Building2, Heart, IndianRupee, Users, BarChart3, ArrowRight } from 'lucide-react';
import { TAGLINE } from '../data/siteData';

export default function WhyInvestPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-saffron-50 via-white to-temple-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Investment Guide</span>
          <h1 className="section-title mt-2 text-4xl md:text-5xl">
            Why Invest in <span className="text-saffron-500">Vrindavan?</span>
          </h1>
          <p className="section-subtitle mt-4">Vrindavan is one of India's fastest-growing spiritual and real estate hubs</p>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Rapidly Growing Market',
                desc: "Vrindavan's real estate has seen 25-40% annual appreciation. With upcoming infrastructure projects like the Delhi-Mumbai Expressway, growth is set to accelerate further.",
              },
              {
                icon: Building2,
                title: 'Spiritual Tourism Boom',
                desc: 'Over 50 lakh tourists visit Vrindavan annually. New temples like Chandrodaya Mandir are attracting global attention, driving massive demand for properties.',
              },
              {
                icon: IndianRupee,
                title: 'Lower Entry Cost',
                desc: 'Compared to metros like Delhi, Mumbai, or Bangalore, Vrindavan offers prime plots at a fraction of the cost with much higher appreciation potential.',
              },
              {
                icon: Heart,
                title: 'Emotional + Financial Value',
                desc: 'Owning land in the divine city of Lord Krishna offers both spiritual fulfillment and excellent financial returns — a rare combination.',
              },
              {
                icon: Users,
                title: 'Rental Income Potential',
                desc: 'With millions of pilgrims visiting yearly, properties in Vrindavan command excellent rental yields, especially during festival seasons.',
              },
              {
                icon: MapPin,
                title: 'Strategic Location',
                desc: "Just 150 km from Delhi with excellent road connectivity. The upcoming metro and highway projects will further boost Vrindavan's accessibility.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100 group">
                <div className="w-14 h-14 bg-saffron-50 group-hover:bg-saffron-500 rounded-xl flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-7 h-7 text-saffron-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appreciation Chart */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-saffron-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Growth Potential</span>
            <h2 className="section-title mt-2">Property Appreciation in Vrindavan</h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 className="w-8 h-8 text-saffron-500" />
              <h3 className="text-xl font-semibold text-gray-900">Average Land Price Trend (per sq.ft.)</h3>
            </div>

            {/* Simple bar chart */}
            <div className="space-y-4">
              {[
                { year: '2018', price: '₹800', width: '20%' },
                { year: '2019', price: '₹1,100', width: '28%' },
                { year: '2020', price: '₹1,400', width: '35%' },
                { year: '2021', price: '₹1,800', width: '45%' },
                { year: '2022', price: '₹2,500', width: '62%' },
                { year: '2023', price: '₹3,200', width: '80%' },
                { year: '2024', price: '₹4,000', width: '100%' },
              ].map((item) => (
                <div key={item.year} className="flex items-center gap-4">
                  <span className="w-12 text-sm font-medium text-gray-600">{item.year}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-10 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-saffron-400 to-saffron-600 h-full rounded-full flex items-center justify-end px-4 transition-all duration-1000"
                      style={{ width: item.width }}
                    >
                      <span className="text-white text-xs font-bold whitespace-nowrap">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mt-6">
              * Indicative values based on market trends. Actual appreciation may vary.
            </p>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { number: '25-40%', label: 'Annual Appreciation' },
              { number: '50L+', label: 'Annual Tourists' },
              { number: '150 km', label: 'From Delhi NCR' },
              { number: '5x', label: 'Growth in 5 Years' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
                <div className="text-3xl font-bold text-saffron-500 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-saffron-500 to-temple-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-3">Start Your Investment Journey</h2>
          <p className="text-saffron-100 mb-6">{TAGLINE}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/projects" className="btn-primary bg-white text-saffron-600 hover:bg-gray-100">
              Explore Projects <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
              Book Site Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
