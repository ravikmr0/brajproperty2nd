import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin, DollarSign, Home } from 'lucide-react';
import { projects } from '@/data/siteData';
import QuotePopup from '@/components/QuotePopup';

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.1) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

export default function ProjectsSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-white via-white to-saffron-50/30">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-saffron-500/[0.08] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.05] blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-orange-500/[0.04] blur-3xl pointer-events-none" />

        <div className="relative z-10 py-10 md:py-16 px-5 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Heading */}
            <div
              className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-gray-900 leading-[1.05] mb-3">
                Our{' '}
                <span className="bg-gradient-to-r from-saffron-500 via-yellow-700 to-saffron-900 bg-clip-text text-transparent">
                  Premium Projects
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Discover our curated portfolio of MVDA-approved developments with world-class amenities and spiritual living.
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-saffron-900" />
                <div className="w-2.5 h-2.5 rounded-full bg-saffron-900" />
                <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-saffron-900" />
              </div>
            </div>

            {/* Auto-playing Carousel */}
            <div className="relative">
              <div className="relative h-[340px] sm:h-[450px] lg:h-[560px] rounded-3xl overflow-hidden">
                {projects.map((project, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div
                      key={project.id}
                      className={`absolute inset-0 transition-all duration-1000 ease-out ${
                        isActive
                          ? 'opacity-100 scale-100 z-10'
                          : 'opacity-0 scale-[1.03] z-0'
                      }`}
                    >
                      <div className="group relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 h-full">
                        {/* Image with zoom effect */}
                        <img
                          src={project.image}
                          alt={project.name}
                          loading="lazy"
                          className="w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-700 ease-out"
                        />

                        {/* Premium gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/92 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                        {/* Status badges - Enhanced with backdrop blur */}
                        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 flex gap-3 z-20">
                          <span className={`${project.statusColor} text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full backdrop-blur-lg border border-white/25 shadow-lg`}>
                            {project.status}
                          </span>
                          <span className="bg-white/90 text-gray-800 text-xs sm:text-sm font-bold px-4 py-2 rounded-full backdrop-blur-lg border border-white/30 shadow-lg">
                            {project.type}
                          </span>
                        </div>

                        {/* Premium corner badge */}
                        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
                          <div className="text-white/70 text-xs font-semibold uppercase tracking-widest px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                            Featured
                          </div>
                        </div>

                        {/* Content overlay - enhanced */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 md:gap-8 z-20">
                          {/* Left side - heading and info */}
                          <div className="max-w-3xl transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-white font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 drop-shadow-xl">
                              {project.name}
                            </h3>

                            {/* Location with enhanced icon */}
                            <div className="flex items-center gap-2.5 text-white/90 mb-4">
                              <MapPin className="w-5 h-5 flex-shrink-0 text-saffron-300" />
                              <span className="text-base md:text-lg font-medium">{project.location}</span>
                            </div>

                            {/* Description */}
                            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4 max-w-2xl line-clamp-2 tracking-[0.3px]">
                              {project.description}
                            </p>

                            {/* Road info - Enhanced */}
                            <div className="flex items-center gap-2.5 text-sm md:text-base">
                              <Home className="w-5 h-5 text-saffron-300 flex-shrink-0" />
                              <span className="text-white/70 font-medium">Road Width</span>
                              <span className="text-white/90 font-semibold">· {project.road}</span>
                            </div>
                          </div>

                          {/* Right side - action buttons */}
                          <div className="flex flex-col sm:flex-row gap-4 lg:flex-col lg:shrink-0">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setSelectedProject(project.name);
                                setIsQuotePopupOpen(true);
                              }}
                              className="bg-saffron-900 hover:bg-saffron-950 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-saffron-500/30 transform hover:-translate-y-0.5"
                            >
                              Get Quote
                            </button>
                            <Link
                              to={`/projects/${project.slug}`}
                              className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 text-center transform hover:-translate-y-0.5"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>

                        {/* Hover border glow */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-saffron-400/40 transition-colors duration-500 pointer-events-none" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Minimal left/right controls */}
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === 0 ? projects.length - 1 : prev - 1
                  )
                }
                className="absolute left-3 md:left-4 lg:left-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full border border-white/40 bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
              >
                <ChevronLeft className="h-5 w-5 mx-auto" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % projects.length)
                }
                className="absolute right-3 md:right-4 lg:right-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full border border-white/40 bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
              >
                <ChevronRight className="h-5 w-5 mx-auto" />
              </button>

              {/* Minimal indicator controls */}
              <div className="mt-4 flex items-center justify-center gap-2">
                {projects.map((_, idx) => (
                  <span
                    key={idx}
                    aria-hidden="true"
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      idx === activeIndex
                        ? 'w-6 bg-saffron-900'
                        : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div
              className={`text-center mt-4 md:mt-6 transition-all duration-1000 delay-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-gray-600 text-sm tracking-widest uppercase mt-4">
                Building Dreams Since 1985
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Popup */}
      <QuotePopup
        isOpen={isQuotePopupOpen}
        onClose={() => setIsQuotePopupOpen(false)}
        projectName={selectedProject}
      />
    </>
  );
}
