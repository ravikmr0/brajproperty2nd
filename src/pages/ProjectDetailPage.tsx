import { useParams, Link } from 'react-router-dom';
import { MapPin, ArrowLeft, ExternalLink, Phone, CheckCircle2 } from 'lucide-react';
import { projects, PHONE_NUMBER, WHATSAPP_NUMBER } from '../data/siteData';
import { useState } from 'react';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
        <Link to="/projects" className="btn-primary">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-0">
        <div className="max-w-7xl mx-auto px-4">
          <Link to="/projects" className="inline-flex items-center gap-2 text-saffron-600 font-medium text-sm mb-6 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Gallery */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden shadow-lg mb-4">
                <img
                  src={project.gallery[selectedImage]}
                  alt={project.name}
                  className="w-full h-72 md:h-96 object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {project.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === i ? 'border-saffron-500 shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${project.name} ${i + 1}`} className="w-full h-24 object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <div className="flex gap-2 mb-4">
                  <span className={`${project.statusColor} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                    {project.status}
                  </span>
                  <span className="bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1.5 rounded-full">
                    {project.type}
                  </span>
                </div>

                <h1 className="text-3xl font-heading font-bold text-gray-900 mb-3">{project.name}</h1>

                <div className="flex items-start gap-2 text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 text-saffron-500 shrink-0 mt-0.5" />
                  <span>{project.location}</span>
                </div>

                <div className="bg-saffron-50 rounded-xl p-4 mb-6">
                  <div className="text-sm font-medium text-saffron-700 mb-1">Road Width</div>
                  <div className="text-2xl font-bold text-saffron-600">{project.road}</div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

                {/* Amenities */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Amenities</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {project.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-3">
                  <a href={`tel:${PHONE_NUMBER}`} className="btn-primary w-full justify-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Call for Details
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in ${project.name}. Please share details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center"
                  >
                    Enquire on WhatsApp
                  </a>
                  <a
                    href={project.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-gradient-to-br from-saffron-50 to-temple-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2 text-center">Enquire About {project.name}</h3>
            <p className="text-gray-600 text-center mb-6">Fill in your details and our team will get back to you</p>

            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-600">Our team will contact you shortly with details about {project.name}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none bg-white"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none bg-white"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email (Optional)"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none bg-white"
                />
                <textarea
                  rows={3}
                  placeholder="Your Message (Optional)"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none bg-white resize-none"
                />
                <button type="submit" className="btn-primary w-full justify-center text-lg py-4">
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
