import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight, Zap, Award, Home, Star, TrendingUp, Shield, Sparkles, Building2, ArrowDown, CheckCircle2 } from 'lucide-react';
import { projects, TAGLINE } from '@/data/siteData';
import QuotePopup from '@/components/QuotePopup';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(easeOut * target);
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export default function ProjectsPage() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">
        {/* Background image with parallax */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Premium Property"
            className="w-full h-full object-cover opacity-40"
            style={{ transform: `scale(1.05) translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`, transition: 'transform 0.1s ease-out' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]" />
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(rgba(255,140,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,140,26,1) 1px, transparent 1px)', backgroundSize: '60px 60px'}} />

        {/* Glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-saffron-500/6 rounded-full blur-[120px] pointer-events-none" style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }} />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-24 md:py-28">

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-saffron-400/25 bg-saffron-500/10 backdrop-blur-sm mb-5">
            <Sparkles className="w-3.5 h-3.5 text-saffron-400" />
            <span className="text-saffron-300 font-semibold text-xs uppercase tracking-[0.2em]">Our Projects</span>
            <Star className="w-3.5 h-3.5 text-saffron-400 fill-saffron-400" />
          </div>

          {/* Heading */}
          <h1 className="font-heading font-extrabold leading-[1.08] mb-4">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-white tracking-tight">
              MVDA-Approved
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] mt-1 bg-gradient-to-r from-amber-300 via-saffron-400 to-orange-500 bg-clip-text text-transparent">
              Premium Projects
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-6 font-light tracking-wide">
            {TAGLINE}
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-saffron-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-saffron-400" />
            <div className="w-6 h-px bg-saffron-500/50" />
            <Building2 className="w-4 h-4 text-saffron-400/70" />
            <div className="w-6 h-px bg-saffron-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-saffron-400" />
            <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-saffron-500/50" />
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            {[
              { icon: Zap, value: 4, suffix: '', label: 'Active Projects' },
              { icon: Award, value: 100, suffix: '+', label: 'Happy Families' },
              { icon: Home, value: 5000, suffix: '+', label: 'Total Plots' },
            ].map(({ icon: Icon, value, suffix, label }, i) => (
              <div
                key={label}
                className="group relative p-6 rounded-2xl border border-white/8 bg-white/4 backdrop-blur-md hover:border-saffron-400/40 hover:bg-white/6 transition-all duration-500"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-saffron-500/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-saffron-400 to-orange-600 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-saffron-500/30 group-hover:scale-110 transition-transform duration-400">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1.5 tabular-nums">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </div>
                  <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-[0.18em]">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {[
              { icon: Shield, label: 'MVDA Approved' },
              { icon: TrendingUp, label: 'High ROI Guaranteed' },
              { icon: CheckCircle2, label: 'Premium Location' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/4 border border-white/8 backdrop-blur-sm hover:border-saffron-500/30 hover:bg-white/6 transition-all duration-300"
              >
                <Icon className="w-3.5 h-3.5 text-saffron-400" />
                <span className="text-gray-300 text-xs font-medium">{label}</span>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-4 h-4 text-saffron-400/50 mx-auto" />
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </section>

      {/* Projects Grid */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div 
                key={project.id} 
                className="group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-saffron-200">
                  <Link to={`/projects/${project.slug}`} className="block">
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-72">
                      <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Status Badges */}
                      <div className="absolute top-5 left-5 flex gap-2.5">
                        <span className={`${project.statusColor} text-white text-xs font-bold px-3.5 py-2 rounded-full backdrop-blur-sm border border-white/20`}>
                          {project.status}
                        </span>
                        <span className="bg-white/95 text-gray-800 text-xs font-bold px-3.5 py-2 rounded-full backdrop-blur-sm border border-white/20">
                          {project.type}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 group-hover:text-saffron-600 transition-colors duration-300">
                        {project.name}
                      </h3>
                      <div className="flex items-start gap-2 text-gray-600 text-sm mb-4">
                        <MapPin className="w-5 h-5 text-saffron-500 shrink-0 mt-0.5" />
                        <span>{project.location}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">{project.description}</p>
                      
                      {/* Road Info & Link */}
                      <div className="flex items-center justify-between pt-5 border-t border-gray-200">
                        <div className="flex gap-2">
                          <span className="text-sm text-gray-500">
                            <span className="font-semibold text-gray-700">Road:</span> {project.road}
                          </span>
                        </div>
                        <span className="text-saffron-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                          Explore <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* CTA Button */}
                  <div className="px-7 pb-7">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedProject(project.name);
                        setIsQuotePopupOpen(true);
                      }}
                      className="w-full bg-saffron-600 hover:bg-saffron-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-saffron-500/30"
                    >
                      Get Quote
                    </button>
                  </div>
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
