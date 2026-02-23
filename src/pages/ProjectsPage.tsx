import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight } from 'lucide-react';
import { projects, TAGLINE } from '@/data/siteData';
import QuotePopup from '@/components/QuotePopup';

export default function ProjectsPage() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>('');

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-saffron-50 via-white to-temple-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-saffron-500 font-semibold text-sm uppercase tracking-wider">Our Projects</span>
          <h1 className="section-title mt-2 text-4xl md:text-5xl">
            MVDA-Approved <span className="text-saffron-500">Premium Projects</span>
          </h1>
          <p className="section-subtitle mt-4">{TAGLINE}</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card group">
                <Link to={`/projects/${project.slug}`} className="block">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`${project.statusColor} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                        {project.status}
                      </span>
                      <span className="bg-white/90 text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 group-hover:text-saffron-600 transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-start gap-2 text-gray-500 text-sm mb-3">
                      <MapPin className="w-4 h-4 text-saffron-500 shrink-0 mt-0.5" />
                      {project.location}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex gap-4">
                        <span className="text-sm text-gray-500">
                          <span className="font-medium text-gray-700">Road:</span> {project.road}
                        </span>
                      </div>
                      <span className="text-saffron-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Details <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="px-6 pb-6">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedProject(project.name);
                      setIsQuotePopupOpen(true);
                    }}
                    className="w-full btn-primary text-center"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Popup */}
      <QuotePopup
        isOpen={isQuotePopupOpen}
        onClose={() => setIsQuotePopupOpen(false)}
        projectName={selectedProject}
      />
    </div>
  );
}
