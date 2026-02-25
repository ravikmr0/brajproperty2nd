import { Link } from 'react-router-dom';
import {
  Shield, FileCheck, MapPin, Users, Heart, Building2,
  ArrowRight, CheckCircle2, Landmark, Target,
  TrendingUp, Plane, TreePine, Award, Handshake
} from 'lucide-react';
import { projects } from '@/data/siteData';

const trustPoints = [
  {
    icon: Shield,
    title: 'MVDA Approved Projects',
    desc: 'Every project we offer is fully approved by MVDA, ensuring legal security and peace of mind for every investor.',
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Landmark,
    title: 'Prime Temple Connectivity',
    desc: 'Our plots are strategically located near iconic temples like Bankey Bihari, Prem Mandir, and ISKCON Vrindavan.',
    gradient: 'from-amber-500 to-orange-500',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: FileCheck,
    title: 'Clear Registry & Legal Transparency',
    desc: 'We believe in 100% documentation transparency — clear titles, registered plots, and hassle-free ownership transfer.',
    gradient: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Plane,
    title: 'Growing Infrastructure & Airport Connectivity',
    desc: 'Proximity to Yamuna Expressway, upcoming Noida International Airport, and expanding road networks fuel rapid appreciation.',
    gradient: 'from-purple-500 to-pink-500',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Users,
    title: '100+ Happy Families',
    desc: 'Over a hundred families have trusted BrajProperty to secure their future with a piece of holy Vrindavan land.',
    gradient: 'from-rose-500 to-red-500',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    icon: Handshake,
    title: 'End-to-End Assistance',
    desc: 'From site visits to documentation to possession — our dedicated team guides you at every step of your journey.',
    gradient: 'from-indigo-500 to-blue-500',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
];

const legacyPoints = [
  { icon: Shield, label: 'Security', desc: 'MVDA-approved plots with clear legal titles ensure your investment is fully protected.' },
  { icon: TrendingUp, label: 'Appreciation', desc: 'Vrindavan has seen 25-40% annual land appreciation — your wealth grows with every passing year.' },
  { icon: TreePine, label: 'Peaceful Environment', desc: 'Live amidst the divine energy of Vrindavan — serene ghats, ancient temples, and spiritual tranquility.' },
  { icon: Plane, label: 'Future Growth', desc: 'Yamuna Expressway, Noida International Airport, and smart city plans are transforming the region.' },
];

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">

      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-saffron-500/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585128903994-9788298932a4?w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/60"></div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-saffron-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-temple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-6">
            About BrajProperty
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Building Trust.<br />
            Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-saffron-500">Generations.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-6 max-w-3xl mx-auto">
            Your Gateway to Secure & Spiritual Living in Vrindavan.
          </p>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            At BrajProperty, we believe that owning land in Vrindavan is more than a financial decision — it's an emotional homecoming.
            We help families, devotees, and investors find their sacred piece of Braj Bhoomi with complete trust and transparency.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            {[
              { icon: Shield, label: 'MVDA Approved' },
              { icon: Users, label: '100+ Families' },
              { icon: FileCheck, label: 'Clear Registry' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Icon className="w-4 h-4 text-amber-400" />
                <span className="text-white text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. WHO WE ARE ===== */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,153,51,0.05),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                  alt="BrajProperty Projects"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-saffron-500/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-saffron-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100+</div>
                    <div className="text-sm text-gray-500">Happy Families</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-saffron-500 to-temple-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                A Vision to Simplify Land Investment in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-500 to-temple-600">Vrindavan</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                BrajProperty was founded with a singular vision — to make land ownership in the holy city of Vrindavan
                accessible, transparent, and rewarding for every Indian family. We understand that buying land is one
                of the most significant decisions of your life, and we ensure every step is guided by trust.
              </p>

              <div className="space-y-4">
                {[
                  'Only MVDA-approved projects — no compromises on legal security.',
                  'Transparent documentation with clear registry and ownership titles.',
                  'Customer-first approach with dedicated relationship managers.',
                  'End-to-end support from site visit to possession.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. OUR MISSION ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-saffron-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,69,19,0.05),transparent_50%)]"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-saffron-500 to-temple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Target className="w-7 h-7 text-white" />
            </div>
          </div>
          <span className="block text-saffron-500 font-semibold text-sm uppercase tracking-widest mb-3">Our Mission</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-8 leading-tight max-w-4xl mx-auto">
            To provide legally secure, high-growth residential plots that combine{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-500 to-temple-600">spiritual peace</span>{' '}
            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-temple-600 to-saffron-500">smart investment.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We don't just sell plots — we create opportunities for families to build their dream homes in one of India's
            most sacred and fastest-growing cities. Every project is chosen with care, approved by authorities, and
            positioned for long-term growth.
          </p>

          {/* Mission Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { number: '4+', label: 'Premium Projects' },
              { number: '100+', label: 'Families Served' },
              { number: '100%', label: 'MVDA Approved' },
              { number: '25-40%', label: 'Annual Growth' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-saffron-500 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. WHY CHOOSE BRAJPROPERTY ===== */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,153,51,0.06),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-saffron-500 to-temple-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Why Families Trust{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-500 to-temple-600">BrajProperty</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Six pillars of trust that make us Vrindavan's most preferred real estate partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustPoints.map(({ icon: Icon, title, desc, gradient, iconBg, iconColor }) => (
              <div key={title} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-transparent h-full">
                  <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center mb-5 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className={`w-7 h-7 ${iconColor}`} />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-3 leading-tight">{title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. OUR PROJECTS ===== */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-saffron-50/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,153,51,0.06),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-saffron-500 to-temple-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg mb-4">
              Our Projects
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-500 to-temple-600">Projects</span> in Vrindavan
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Each project is carefully selected for location, legal compliance, and growth potential.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.slice(0, 4).map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.gallery?.[0] || project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <span className={`absolute top-3 left-3 px-3 py-1 ${project.statusColor} text-white text-xs font-bold rounded-full`}>
                    {project.status}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-2 group-hover:text-saffron-500 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="line-clamp-1">{project.location}</span>
                  </div>
                  <div className="mt-3 flex items-center text-saffron-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
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

      {/* ===== 6. INVESTMENT + EMOTIONAL ANGLE ===== */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,69,19,0.04),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Side */}
            <div>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-saffron-500 to-temple-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg mb-4">
                Legacy & Investment
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Land is Not Just Property —<br />
                It is <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-500 to-temple-600">Legacy.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                When you invest in Vrindavan, you're not just buying land — you're creating a heritage for generations.
                A place where your family can find peace, build memories, and watch their wealth grow alongside the
                spiritual energy of Lord Krishna's divine abode.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {legacyPoints.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-saffron-500/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-saffron-500" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">{label}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Legacy Investment in Vrindavan"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-saffron-500 to-temple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">A Spiritual Investment</div>
                        <div className="text-gray-500 text-sm">Where faith meets financial wisdom</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. CTA SECTION ===== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-saffron-500 via-temple-600 to-saffron-500"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585128903994-9788298932a4?w=1920&q=60')] bg-cover bg-center opacity-10"></div>

        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">
            Invest Right. Invest in Braj.
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Take the first step towards securing your family's future in the most sacred land of India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-saffron-600 hover:bg-gray-100 font-bold rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-lg"
            >
              <Building2 className="w-5 h-5 mr-2" />
              View Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white/80 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 text-lg"
            >
              Contact Us <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

