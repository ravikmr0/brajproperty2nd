import { useState, useEffect, useRef } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Navigation,
  Loader2,
  Send,
  MessageCircle,
  Sparkles,
  Building2,
  Users,
  ArrowRight,
  Star,
  Shield,
  HeartHandshake,
} from 'lucide-react';
import { PHONE_NUMBER, EMAIL, ADDRESS, WHATSAPP_NUMBER, TAGLINE } from '@/data/siteData';

/* ─── tiny intersection-observer hook for scroll reveal ──── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function RevealSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Floating decorative particles ──── */
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-saffron-400/20 rounded-full animate-particle"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${3 + i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      interestedIn: formData.get('interestedIn'),
      message: formData.get('message'),
      formType: 'contact',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to send message');
      setFormSubmitted(true);
    } catch (err) {
      setError('Failed to send message. Please try calling us instead.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-600 via-saffron-500 to-temple-500" />
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-saffron-400/20 rounded-full blur-3xl" />
        <FloatingParticles />

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <RevealSection>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-4">
              <MessageCircle className="w-4 h-4 text-white" />
              <span className="text-white/90 font-medium text-sm">We're Here to Help</span>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 leading-tight">
              Let's Build Your
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Dream Together</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-gold-400/40 rounded-sm" />
              </span>
            </h1>
          </RevealSection>

          <RevealSection delay={200}>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-6 leading-relaxed">
              Reach out to our dedicated team for expert guidance on investing in the
              sacred land of Vrindavan. Your spiritual home awaits.
            </p>
          </RevealSection>

          <RevealSection delay={300}>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 bg-white text-saffron-600 font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in Vrindavan property. Please share details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-green-600 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </RevealSection>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ═══════════════════ STATS BAR ═══════════════════ */}
      <section className="relative -mt-2 z-10">
        <div className="max-w-5xl mx-auto px-4">
          <RevealSection>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 md:p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { icon: Building2, value: '4+', label: 'Active Projects', color: 'text-saffron-500 bg-saffron-50' },
                  { icon: Users, value: '500+', label: 'Happy Families', color: 'text-temple-500 bg-temple-50' },
                  { icon: Star, value: '4.9★', label: 'Client Rating', color: 'text-gold-600 bg-gold-50' },
                  { icon: Clock, value: '<30 min', label: 'Response Time', color: 'text-green-500 bg-green-50' },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl md:text-3xl font-heading font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══════════════════ CONTACT INFO + FORM ═══════════════════ */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
            {/* ─── LEFT: Contact Info ─── */}
            <div className="lg:col-span-2">
              <RevealSection>
                <div className="mb-6">
                  <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Contact Info</span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-1.5 mb-3">
                    Let's <span className="text-saffron-500">Connect</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our dedicated team is always ready to assist you in finding the perfect property in Vrindavan.
                  </p>
                </div>
              </RevealSection>

              {/* Contact cards */}
              <div className="space-y-3 mb-6">
                {[
                  {
                    href: `tel:${PHONE_NUMBER}`,
                    icon: Phone,
                    iconBg: 'bg-gradient-to-br from-saffron-400 to-saffron-600',
                    title: 'Call Us',
                    detail: PHONE_NUMBER,
                    sub: 'Tap to call directly',
                    hoverBorder: 'hover:border-saffron-300',
                    isLucide: true,
                  },
                  {
                    href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in Vrindavan property. Please share details.`,
                    icon: null,
                    iconBg: 'bg-gradient-to-br from-green-400 to-green-600',
                    title: 'WhatsApp',
                    detail: PHONE_NUMBER,
                    sub: 'Chat with us instantly',
                    hoverBorder: 'hover:border-green-300',
                    external: true,
                    isLucide: false,
                  },
                  {
                    href: `mailto:${EMAIL}`,
                    icon: Mail,
                    iconBg: 'bg-gradient-to-br from-blue-400 to-blue-600',
                    title: 'Email Us',
                    detail: EMAIL,
                    sub: 'We reply within 2 hours',
                    hoverBorder: 'hover:border-blue-300',
                    isLucide: true,
                  },
                ].map((item, i) => (
                  <RevealSection key={i} delay={i * 100}>
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className={`group flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 bg-white ${item.hoverBorder} hover:shadow-lg transition-all duration-300`}
                    >
                      <div
                        className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0`}
                      >
                        {item.isLucide && item.icon ? (
                          <item.icon className="w-6 h-6 text-white" />
                        ) : (
                          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-gray-900 group-hover:text-saffron-600 transition-colors">
                          {item.title}
                        </div>
                        <div className="text-gray-700 text-sm font-medium truncate">{item.detail}</div>
                        <div className="text-gray-400 text-xs mt-0.5">{item.sub}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-saffron-500 group-hover:translate-x-1 transition-all ml-auto shrink-0" />
                    </a>
                  </RevealSection>
                ))}
              </div>

              {/* Address + Hours card */}
              <RevealSection delay={300}>
                <div className="bg-gradient-to-br from-saffron-50 via-white to-temple-50 rounded-2xl p-6 border border-saffron-100">
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-gradient-to-br from-temple-400 to-temple-600 rounded-xl flex items-center justify-center shrink-0 shadow">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Office Address</div>
                        <div className="text-gray-600 text-sm leading-relaxed mt-1">{ADDRESS}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-gradient-to-br from-saffron-400 to-saffron-600 rounded-xl flex items-center justify-center shrink-0 shadow">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Office Hours</div>
                        <div className="text-gray-600 text-sm mt-1">Mon – Sat: 9:00 AM – 7:00 PM</div>
                        <div className="text-gray-500 text-sm">Sunday: By appointment</div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Vrindavan+Mathura"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-white text-temple-600 font-semibold px-5 py-3 rounded-xl border-2 border-temple-200 hover:bg-temple-50 hover:border-temple-300 transition-all duration-300"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </RevealSection>
            </div>

            {/* ─── RIGHT: Form ─── */}
            <div className="lg:col-span-3">
              <RevealSection delay={200}>
                <div className="relative">
                  {/* Glow behind form */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-saffron-200/30 via-temple-200/20 to-gold-200/30 rounded-3xl blur-2xl" />

                  <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100">
                    {/* Form header */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-saffron-400 to-saffron-600 rounded-xl flex items-center justify-center shadow">
                        <Send className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900">
                          Send Us a Message
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-8 ml-[52px]">
                      Fill in the form and our team will get back to you within <strong className="text-saffron-600">30 minutes</strong>.
                    </p>

                    {formSubmitted ? (
                      /* ─── Success state ─── */
                      <div className="text-center py-14">
                        <div className="relative inline-block mb-8">
                          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-xl animate-glow-pulse">
                            <CheckCircle2 className="w-12 h-12 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2">
                            <Sparkles className="w-7 h-7 text-gold-500 animate-float" />
                          </div>
                        </div>
                        <h4 className="text-3xl font-heading font-bold text-gray-900 mb-3">Thank You!</h4>
                        <p className="text-gray-600 mb-2 text-lg">Your enquiry has been received.</p>
                        <p className="text-gray-500 mb-8">Our team will contact you within <span className="text-saffron-600 font-semibold">30 minutes</span>.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                          <a href={`tel:${PHONE_NUMBER}`} className="btn-primary">
                            <Phone className="w-4 h-4 mr-2" />
                            Call Us Now
                          </a>
                          <button
                            onClick={() => setFormSubmitted(false)}
                            className="btn-secondary"
                          >
                            Send Another Message
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* ─── Form ─── */
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                            <span className="shrink-0">⚠️</span>
                            {error}
                          </div>
                        )}

                        <div className="grid sm:grid-cols-2 gap-5">
                          {/* Name */}
                          <div className="relative">
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                              Full Name <span className="text-saffron-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Enter your name"
                              required
                              disabled={isSubmitting}
                              onFocus={() => setFocusedField('name')}
                              onBlur={() => setFocusedField(null)}
                              className={`w-full px-4 py-3.5 border-2 rounded-xl outline-none transition-all duration-300 disabled:bg-gray-50 disabled:cursor-not-allowed ${
                                focusedField === 'name'
                                  ? 'border-saffron-400 shadow-lg shadow-saffron-100 bg-saffron-50/30'
                                  : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'
                              }`}
                            />
                          </div>
                          {/* Phone */}
                          <div className="relative">
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                              Phone Number <span className="text-saffron-500">*</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              placeholder="Enter phone number"
                              required
                              disabled={isSubmitting}
                              onFocus={() => setFocusedField('phone')}
                              onBlur={() => setFocusedField(null)}
                              className={`w-full px-4 py-3.5 border-2 rounded-xl outline-none transition-all duration-300 disabled:bg-gray-50 disabled:cursor-not-allowed ${
                                focusedField === 'phone'
                                  ? 'border-saffron-400 shadow-lg shadow-saffron-100 bg-saffron-50/30'
                                  : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'
                              }`}
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter email (optional)"
                            disabled={isSubmitting}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-4 py-3.5 border-2 rounded-xl outline-none transition-all duration-300 disabled:bg-gray-50 disabled:cursor-not-allowed ${
                              focusedField === 'email'
                                ? 'border-saffron-400 shadow-lg shadow-saffron-100 bg-saffron-50/30'
                                : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'
                            }`}
                          />
                        </div>

                        {/* Project select */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Interested In</label>
                          <select
                            name="interestedIn"
                            disabled={isSubmitting}
                            onFocus={() => setFocusedField('project')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-4 py-3.5 border-2 rounded-xl outline-none transition-all duration-300 text-gray-600 disabled:bg-gray-50 disabled:cursor-not-allowed appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23999%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center] bg-[length:20px] ${
                              focusedField === 'project'
                                ? 'border-saffron-400 shadow-lg shadow-saffron-100 bg-saffron-50/30'
                                : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'
                            }`}
                          >
                            <option value="">Select a project</option>
                            <option value="krishna-gaur-city">Krishna Gaur City</option>
                            <option value="bankey-bihari-kunj">Bankey Bihari Kunj</option>
                            <option value="bankey-bihari-greens">Bankey Bihari Greens</option>
                            <option value="braj-anand-vatika">Braj Anand Vatika</option>
                            <option value="general">General Enquiry</option>
                          </select>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Message</label>
                          <textarea
                            name="message"
                            rows={4}
                            placeholder="Tell us what you're looking for..."
                            disabled={isSubmitting}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-4 py-3.5 border-2 rounded-xl outline-none transition-all duration-300 resize-none disabled:bg-gray-50 disabled:cursor-not-allowed ${
                              focusedField === 'message'
                                ? 'border-saffron-400 shadow-lg shadow-saffron-100 bg-saffron-50/30'
                                : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'
                            }`}
                          />
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full relative overflow-hidden bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-bold text-lg py-4 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            {isSubmitting ? (
                              <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="w-5 h-5" />
                                Submit Enquiry
                              </>
                            )}
                          </span>
                        </button>

                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
                          {[
                            { icon: Shield, text: 'Safe & Secure' },
                            { icon: HeartHandshake, text: 'No Spam' },
                            { icon: Clock, text: 'Quick Response' },
                          ].map((badge, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-gray-400 text-xs">
                              <badge.icon className="w-3.5 h-3.5" />
                              <span>{badge.text}</span>
                            </div>
                          ))}
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ MAP SECTION ═══════════════════ */}
      <section className="py-10 bg-gradient-to-b from-white via-saffron-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <RevealSection>
            <div className="text-center mb-6">
              <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Our Location</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-1.5 mb-2">
                Find Us in <span className="text-saffron-500">Vrindavan</span>
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Visit our office in the heart of the holy city. We're conveniently located for site visits.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="relative group">
              {/* Decorative border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-saffron-300 via-temple-300 to-gold-300 rounded-3xl opacity-30 group-hover:opacity-50 blur-sm transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56505.68326167!2d77.66!3d27.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce47bfac039%3A0xbbe33e2ca6148c62!2sVrindavan%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BrajProperty Office Location"
                />
              </div>
            </div>
          </RevealSection>
        </div>
      </section>


    </div>
  );
}
