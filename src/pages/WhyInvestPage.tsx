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

      {/* Key Highlights - Premium Design */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-saffron-50/30">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,153,51,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,69,19,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-saffron-500 to-temple-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg mb-4">
              Prime Investment Advantages
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-500 to-temple-600">Vrindavan</span> Stands Out
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the perfect blend of spiritual significance and exceptional ROI
            </p>
          </div>

          {/* Premium Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                gradient: 'from-blue-500 to-cyan-500',
                icon: TrendingUp,
                iconBg: 'bg-blue-50',
                iconColor: 'text-blue-600',
                title: 'Rapidly Growing Spiritual & Tourist Destination',
                desc: "Vrindavan's real estate has seen 25-40% annual appreciation. With over 50 lakh annual tourists and upcoming infrastructure like Delhi-Mumbai Expressway, growth is accelerating exponentially.",
                badge: 'High Growth',
                badgeColor: 'bg-blue-100 text-blue-700'
              },
              {
                gradient: 'from-emerald-500 to-teal-500',
                icon: IndianRupee,
                iconBg: 'bg-emerald-50',
                iconColor: 'text-emerald-600',
                title: 'High Rental & Resale Potential',
                desc: 'Properties in Vrindavan command excellent rental yields year-round. Strategic location near temples ensures consistent demand with strong capital appreciation and quick resale opportunities.',
                badge: 'Strong ROI',
                badgeColor: 'bg-emerald-100 text-emerald-700'
              },
              {
                gradient: 'from-purple-500 to-pink-500',
                icon: MapPin,
                iconBg: 'bg-purple-50',
                iconColor: 'text-purple-600',
                title: 'Affordable Compared to Metro Cities',
                desc: 'Invest in prime plots at a fraction of metro city costs. Just 150 km from Delhi with superior appreciation rates—get more land, better returns, and lower entry barriers.',
                badge: 'Best Value',
                badgeColor: 'bg-purple-100 text-purple-700'
              },
              {
                gradient: 'from-amber-500 to-orange-500',
                icon: Heart,
                iconBg: 'bg-amber-50',
                iconColor: 'text-amber-600',
                title: 'Blessings of Owning Land in the Holy City',
                desc: 'Own a piece of sacred land in Lord Krishna\'s divine abode. Experience spiritual fulfillment alongside financial prosperity—a rare investment that nourishes both soul and wealth.',
                badge: 'Divine Value',
                badgeColor: 'bg-amber-100 text-amber-700'
              },
            ].map(({ gradient, icon: Icon, iconBg, iconColor, title, desc, badge, badgeColor }) => (
              <div key={title} className="group relative">
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-transparent h-full">
                  {/* Badge */}
                  <span className={`inline-block px-3 py-1 ${badgeColor} text-xs font-bold rounded-full mb-4`}>
                    {badge}
                  </span>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className={`w-8 h-8 ${iconColor}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 leading-tight">
                    {title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {desc}
                  </p>
                  
                  {/* Hover arrow */}
                  <div className="mt-6 flex items-center text-saffron-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats Bar */}
          <div className="mt-16 bg-gradient-to-r from-saffron-500 via-temple-600 to-saffron-500 rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '25-40%', label: 'Annual Appreciation', icon: TrendingUp },
                { number: '50L+', label: 'Annual Tourists', icon: Users },
                { number: '150 km', label: 'From Delhi NCR', icon: MapPin },
                { number: '5x', label: 'Growth in 5 Years', icon: BarChart3 },
              ].map(({ number, label, icon: StatIcon }) => (
                <div key={label} className="text-center text-white">
                  <StatIcon className="w-6 h-6 mx-auto mb-2 opacity-80" />
                  <div className="text-3xl md:text-4xl font-bold mb-1">{number}</div>
                  <div className="text-xs md:text-sm text-saffron-100 font-medium">{label}</div>
                </div>
              ))}
            </div>
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
