import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Why Invest', path: '/why-invest' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setSearchOpen(false);
  }, [location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsOpen(false);
      setSearchOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/98 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.08)]'
        : 'bg-white/95 backdrop-blur-md shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-[70px] gap-3">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 md:w-11 md:h-11 rounded-full overflow-hidden shadow-md ring-2 ring-saffron-100 group-hover:ring-saffron-300 transition-all duration-200">
              <img src="/logo.png" alt="BrajProperty" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base md:text-lg font-heading font-bold text-gray-900 leading-none">
                Braj<span className="text-saffron-500">Property</span>
              </h1>
              <p className="text-[9px] md:text-[10px] text-gray-400 mt-0.5 font-medium tracking-wide">Your Gateway to Vrindavan</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-saffron-600 bg-saffron-50'
                    : 'text-gray-600 hover:text-saffron-600 hover:bg-saffron-50/60'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-saffron-500" />
                )}
              </Link>
            ))}
          </nav>

          {/* Tablet & Mobile inline search (after logo, before menu) */}
          <form onSubmit={handleSearch} className="flex lg:hidden flex-1 mx-2">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-9 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent text-sm bg-gray-50"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
            </div>
          </form>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search toggle (desktop only) */}
            <div className="hidden lg:flex items-center">
              {searchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <div className="relative">
                    <input
                      autoFocus
                      type="text"
                      placeholder="Search projects..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-52 px-4 py-2 pl-9 rounded-xl border border-saffron-200 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent text-sm bg-white"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  </div>
                  <button type="button" onClick={() => setSearchOpen(false)} className="ml-2 p-1.5 rounded-lg hover:bg-gray-100">
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 rounded-lg text-gray-500 hover:text-saffron-600 hover:bg-saffron-50 transition-all duration-200"
                  aria-label="Search"
                >
                  <Search className="w-4.5 h-4.5" />
                </button>
              )}
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors flex-shrink-0"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-[600px] border-t border-gray-100' : 'max-h-0'
      }`}>
        <div className="bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-saffron-600 bg-saffron-50 font-semibold'
                  : 'text-gray-700 hover:text-saffron-600 hover:bg-saffron-50/50'
              }`}
            >
              {link.label}
            </Link>
          ))}

        </div>
      </div>
    </header>
  );
}
