import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { managementTeam, TAGLINE } from '../data/siteData';

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-saffron-50 via-white to-temple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="section-title mt-2 text-4xl md:text-5xl">
              Building Foundations for <span className="text-saffron-500">Generations</span>
            </h1>
            <p className="section-subtitle mt-4">{TAGLINE}</p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="section-title mt-2">Your Trusted Property Partner in Vrindavan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At BrajProperty, we help families and investors own land in Vrindavan with security, trust, and growth.
                With over a decade of experience in the Vrindavan real estate market, we have helped hundreds of families
                realize their dream of owning property in the divine city.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We understand that buying land is not just an investment — it is a foundation for generations.
                That's why every project we develop is MVDA-approved, clearly documented, and strategically located
                near the holiest temples of Vrindavan.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['MVDA Approved', '100+ Happy Families', '4 Premium Projects', '10+ Years Trust'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
                alt="About BrajProperty"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-saffron-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'Provide secure, profitable, and hassle-free property solutions in the holy city of Vrindavan. We aim to make property ownership accessible and trustworthy for every family.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                desc: 'To be the most trusted name in Vrindavan real estate, known for transparency, quality, and customer satisfaction across all our projects.',
              },
              {
                icon: Heart,
                title: 'Our Values',
                desc: 'Transparency, honesty, long-term relationships, and customer satisfaction drive every decision we make. We treat every client like family.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-saffron-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-8 h-8 text-saffron-500" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="section-title mt-2">Leadership & Management</h2>
            <p className="section-subtitle">Meet the team driving BrajProperty's vision</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {managementTeam.map((member) => (
              <div key={member.name} className="card text-center group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-gray-900">{member.name}</h3>
                  <p className="text-saffron-500 text-sm font-medium mb-3">{member.designation}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-saffron-500 to-temple-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Users className="w-12 h-12 mx-auto mb-4 text-saffron-200" />
          <h2 className="text-3xl font-heading font-bold mb-3">Join 100+ Happy Families</h2>
          <p className="text-saffron-100 mb-6">Start your journey to owning a plot in Vrindavan today.</p>
          <Link to="/contact" className="btn-primary bg-white text-saffron-600 hover:bg-gray-100">
            Contact Us <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
