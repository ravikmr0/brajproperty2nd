import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle2, Navigation } from 'lucide-react';
import { PHONE_NUMBER, EMAIL, ADDRESS, WHATSAPP_NUMBER, TAGLINE } from '../data/siteData';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-saffron-50 via-white to-temple-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h1 className="section-title mt-2 text-4xl md:text-5xl">
            Get in <span className="text-saffron-500">Touch</span>
          </h1>
          <p className="section-subtitle mt-4">We'd love to hear from you. Reach out for any queries about our projects.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Let's Connect</h2>

              <div className="space-y-6 mb-8">
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-saffron-50 group-hover:bg-saffron-500 rounded-xl flex items-center justify-center transition-colors shrink-0">
                    <Phone className="w-5 h-5 text-saffron-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-saffron-600 transition-colors">Call Us</div>
                    <div className="text-gray-600 text-sm">{PHONE_NUMBER}</div>
                    <div className="text-gray-400 text-xs mt-1">Click to call directly</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in Vrindavan property. Please share details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-green-50 group-hover:bg-green-500 rounded-xl flex items-center justify-center transition-colors shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">WhatsApp</div>
                    <div className="text-gray-600 text-sm">{PHONE_NUMBER}</div>
                    <div className="text-gray-400 text-xs mt-1">Chat with us instantly</div>
                  </div>
                </a>

                <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-500 rounded-xl flex items-center justify-center transition-colors shrink-0">
                    <Mail className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Email</div>
                    <div className="text-gray-600 text-sm">{EMAIL}</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Office Address</div>
                    <div className="text-gray-600 text-sm">{ADDRESS}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Office Hours</div>
                    <div className="text-gray-600 text-sm">Mon–Sat: 9:00 AM – 7:00 PM</div>
                    <div className="text-gray-600 text-sm">Sunday: By appointment</div>
                  </div>
                </div>
              </div>

              {/* Quick actions */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://maps.google.com/?q=Vrindavan+Mathura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Send Us a Message</h3>
                <p className="text-gray-600 text-sm mb-6">Fill in the form and our team will get back within 30 minutes.</p>

                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h4>
                    <p className="text-gray-600 mb-6">Our team will contact you within 30 minutes.</p>
                    <a href={`tel:${PHONE_NUMBER}`} className="btn-primary">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us Now
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          placeholder="Enter phone number"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        placeholder="Enter email (optional)"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                      <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none text-gray-600">
                        <option value="">Select a project</option>
                        <option value="krishna-gaur-city">Krishna Gaur City</option>
                        <option value="bankey-bihari-kunj">Bankey Bihari Kunj</option>
                        <option value="bankey-bihari-greens">Bankey Bihari Greens</option>
                        <option value="braj-anand-vatika">Braj Anand Vatika</option>
                        <option value="general">General Enquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us what you're looking for..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none resize-none"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center text-lg py-4">
                      Submit Enquiry
                    </button>
                    <p className="text-center text-xs text-gray-400">
                      By submitting, you agree to be contacted by our team. Your information is safe with us.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56505.68326167!2d77.66!3d27.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce47bfac039%3A0xbbe33e2ca6148c62!2sVrindavan%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BrajProperty Office Location"
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-saffron-500 to-temple-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-3">Don't Wait — Start Today</h2>
          <p className="text-saffron-100 mb-6">{TAGLINE}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${PHONE_NUMBER}`} className="btn-primary bg-white text-saffron-600 hover:bg-gray-100">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want to know about plots in Vrindavan.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
