import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { MapPin } from 'lucide-react';
import { projects } from '@/data/siteData';
import QuotePopup from '@/components/QuotePopup';

export default function ProjectsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>('');

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
              >
                <div className="card group h-full flex flex-col">
                  <div className="relative h-72 overflow-hidden rounded-t-xl">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Status badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`${project.statusColor} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                        {project.status}
                      </span>
                      <span className="bg-white/90 text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full">
                        {project.type}
                      </span>
                    </div>

                    {/* Bottom info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-heading font-bold text-xl mb-2">
                        {project.name}
                      </h3>
                      <div className="flex items-start gap-2 text-white/90 text-sm">
                        <MapPin className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center gap-3 mb-4 text-sm text-gray-500 border-t border-gray-100 pt-4">
                      <span className="font-medium text-gray-700">Road:</span> 
                      <span>{project.road}</span>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedProject(project.name);
                          setIsQuotePopupOpen(true);
                        }}
                        className="flex-1 bg-saffron-500 hover:bg-saffron-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                      >
                        Get Quote
                      </button>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="flex-1 border-2 border-saffron-500 text-saffron-600 hover:bg-saffron-50 text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors text-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-10 hidden md:block"
          aria-label="Previous slide"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-6 h-6 text-gray-700"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-10 hidden md:block"
          aria-label="Next slide"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-6 h-6 text-gray-700"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Quote Popup */}
      <QuotePopup
        isOpen={isQuotePopupOpen}
        onClose={() => setIsQuotePopupOpen(false)}
        projectName={selectedProject}
      />
    </>
  );
}
