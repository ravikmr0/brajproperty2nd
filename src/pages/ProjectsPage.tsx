import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight, Zap, Award, Home, Star, TrendingUp, Shield, Sparkles, Building2, ArrowDown } from 'lucide-react';
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
      <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#080810]">
        {/* Background image with parallax */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Premium Property"
            className="w-full h-full object-cover opacity-20 scale-110"
            style={{ transform: `scale(1.1) translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080810]/80 via-[#080810]/60 to-[#080810]" />
        </div>

        {/* Animated particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-saffron-400/60 animate-particle"
            style={{
              left: `${10 + (i * 7.5)}%`,
              bottom: '10%',
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}

        {/* 3D rotating orbital ring - left */}
        <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] hidden lg:block" style={{ perspective: '1000px' }}>
          <div
            className="w-full h-full rounded-full border border-saffron-500/20 animate-orbit"
            style={{ transformStyle: 'preserve-3d', transform: `rotateX(70deg) rotateZ(${mousePos.x}deg)` }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-saffron-400 shadow-lg shadow-saffron-500/50" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-amber-300 shadow-lg shadow-amber-300/50" />
          </div>
        </div>

        {/* 3D rotating orbital ring - right */}
        <div className="absolute right-[-80px] top-1/3 w-[400px] h-[400px] hidden lg:block" style={{ perspective: '1000px' }}>
          <div
            className="w-full h-full rounded-full border border-amber-500/15 animate-orbit"
            style={{ transformStyle: 'preserve-3d', transform: `rotateX(60deg) rotateZ(${-mousePos.x}deg)`, animationDirection: 'reverse', animationDuration: '35s' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50" />
          </div>
        </div>

        {/* Glowing orbs with mouse parallax */}
        <div
          className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-saffron-500/8 rounded-full blur-[150px]"
          style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}
        />
        <div
          className="absolute bottom-10 left-1/6 w-[500px] h-[500px] bg-amber-600/6 rounded-full blur-[120px]"
          style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}
        />
        <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] animate-pulse" />

        {/* Geometric grid overlay */}
        <div className="absolute inset-0 opacity-[0.025]" style={{backgroundImage: 'linear-gradient(rgba(255,140,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,140,26,1) 1px, transparent 1px)', backgroundSize: '80px 80px'}} />

        {/* Diagonal lines decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.04] pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-saffron-400 to-transparent rotate-12" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent -rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 py-32">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-saffron-400/30 bg-gradient-to-r from-saffron-500/15 to-amber-500/10 backdrop-blur-md mb-8 animate-fade-in-up animate-glow-pulse">
            <Sparkles className="w-4 h-4 text-saffron-400 animate-pulse" />
            <span className="text-saffron-300 font-bold text-xs uppercase tracking-[0.25em]">Our Projects</span>
            <Star className="w-4 h-4 text-saffron-400 fill-saffron-400" />
          </div>

          {/* 3D Heading with perspective */}
          <div style={{ perspective: '1000px' }}>
            <h1
              className="font-heading font-extrabold leading-[1.1] mb-7 animate-fade-in-up"
              style={{
                transform: `rotateX(${mousePos.y * 0.1}deg) rotateY(${mousePos.x * 0.1}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                MVDA-Approved
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2 bg-gradient-to-r from-amber-200 via-saffron-400 to-orange-500 bg-clip-text text-transparent animate-shimmer" style={{ backgroundSize: '200% auto' }}>
                Premium Projects
              </span>
            </h1>
          </div>

          {/* Tagline with typewriter effect feel */}
          <p className="text-gray-300/90 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-14 animate-fade-in-up animate-delay-200 font-light tracking-wide">
            {TAGLINE}
          </p>

          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-5 mb-14 animate-fade-in-up animate-delay-400">
            <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-saffron-500/60 to-saffron-500/80" />
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-saffron-500 animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-saffron-400 animate-ping" />
            </div>
            <div className="w-8 h-px bg-saffron-500/60" />
            <Building2 className="w-5 h-5 text-saffron-400" />
            <div className="w-8 h-px bg-saffron-500/60" />
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-saffron-500 animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-saffron-400 animate-ping" style={{ animationDelay: '0.5s' }} />
            </div>
            <div className="h-px w-24 md:w-32 bg-gradient-to-l from-transparent via-saffron-500/60 to-saffron-500/80" />
          </div>

          {/* 3D Stats cards with floating effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 max-w-4xl mx-auto mb-14" style={{ perspective: '1200px' }}>
            {/* Stat 1 */}
            <div
              className="group relative animate-fade-in-up animate-float-rotate"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="relative p-7 md:p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl hover:border-saffron-400/50 transition-all duration-700 overflow-hidden animate-border-glow"
                style={{ transform: `rotateY(${mousePos.x * 0.15}deg) rotateX(${-mousePos.y * 0.15}deg)`, transformStyle: 'preserve-3d', transition: 'transform 0.2s ease-out, border-color 0.7s ease' }}
              >
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-saffron-500/15 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {/* Shine effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-700" />
                
                <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-saffron-400 to-orange-600 flex items-center justify-center mx-auto mb-5 shadow-xl shadow-saffron-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 tabular-nums">
                    <AnimatedCounter target={4} />
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 font-semibold uppercase tracking-[0.15em]">Active Projects</p>
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div
              className="group relative animate-fade-in-up animate-float-rotate"
              style={{ animationDelay: '0.3s', animationDuration: '7s' }}
            >
              <div className="relative p-7 md:p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl hover:border-saffron-400/50 transition-all duration-700 overflow-hidden animate-border-glow"
                style={{ transform: `rotateY(${mousePos.x * 0.15}deg) rotateX(${-mousePos.y * 0.15}deg)`, transformStyle: 'preserve-3d', transition: 'transform 0.2s ease-out, border-color 0.7s ease', animationDelay: '1s' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-saffron-500/15 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-700" />
                
                <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-saffron-400 to-orange-600 flex items-center justify-center mx-auto mb-5 shadow-xl shadow-saffron-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 tabular-nums">
                    <AnimatedCounter target={100} suffix="+" />
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 font-semibold uppercase tracking-[0.15em]">Happy Families</p>
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div
              className="group relative animate-fade-in-up animate-float-rotate"
              style={{ animationDelay: '0.5s', animationDuration: '8s' }}
            >
              <div className="relative p-7 md:p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl hover:border-saffron-400/50 transition-all duration-700 overflow-hidden animate-border-glow"
                style={{ transform: `rotateY(${mousePos.x * 0.15}deg) rotateX(${-mousePos.y * 0.15}deg)`, transformStyle: 'preserve-3d', transition: 'transform 0.2s ease-out, border-color 0.7s ease', animationDelay: '2s' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-saffron-500/15 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-700" />
                
                <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-saffron-400 to-orange-600 flex items-center justify-center mx-auto mb-5 shadow-xl shadow-saffron-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 tabular-nums">
                    <AnimatedCounter target={5000} suffix="+" />
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 font-semibold uppercase tracking-[0.15em]">Total Plots</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges - enhanced */}
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8 mb-12 animate-fade-in-up animate-delay-600">
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-saffron-500/30 transition-all duration-300">
              <Shield className="w-4.5 h-4.5 text-saffron-400" />
              <span className="text-gray-300 text-sm font-medium">MVDA Approved</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-saffron-500/30 transition-all duration-300">
              <TrendingUp className="w-4.5 h-4.5 text-saffron-400" />
              <span className="text-gray-300 text-sm font-medium">High ROI Guaranteed</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-saffron-500/30 transition-all duration-300">
              <Star className="w-4.5 h-4.5 text-saffron-400 fill-saffron-400" />
              <span className="text-gray-300 text-sm font-medium">Premium Location</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-5 h-5 text-saffron-400/60 mx-auto" />
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />
      </section>

      {/* Projects Grid */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                    <div className="p-7">
                      <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-saffron-600 transition-colors duration-300">
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
