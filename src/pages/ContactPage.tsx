import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Navigation, Loader2 } from 'lucide-react';
import { PHONE_NUMBER, EMAIL, ADDRESS, WHATSAPP_NUMBER, TAGLINE } from '../data/siteData';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormSubmitted(true);
    } catch (err) {
      setError('Failed to send message. Please try calling us instead.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-10 bg-gradient-to-br from-saffron-50 via-white to-temple-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h1 className="section-title mt-2 text-4xl md:text-5xl">
            Get in <span className="text-saffron-500">Touch</span>
          </h1>
          <p className="section-subtitle mt-4">We'd love to hear from you. Reach out for any queries about our projects.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8">
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
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-green-500 group-hover:text-white fill-current transition-colors"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
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
                  <div className="w-12 h-12 bg-saffron-50 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-saffron-500" />
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
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                        {error}
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Enter phone number"
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email (optional)"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                      <select 
                        name="interestedIn"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none text-gray-600 disabled:bg-gray-50 disabled:cursor-not-allowed"
                      >
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
                        name="message"
                        rows={4}
                        placeholder="Tell us what you're looking for..."
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Submit Enquiry'
                      )}
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


    </div>
  );
}
