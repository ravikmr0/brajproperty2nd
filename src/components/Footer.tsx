import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { PHONE_NUMBER, EMAIL, ADDRESS, TAGLINE } from '../data/siteData';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Why Invest', path: '/why-invest' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
];

const projectLinks = [
  { label: 'Krishna Gaur City', path: '/projects/krishna-gaur-city' },
  { label: 'Bankey Bihari Kunj', path: '/projects/bankey-bihari-kunj' },
  { label: 'Bankey Bihari Greens', path: '/projects/bankey-bihari-greens' },
  { label: 'Braj Anand Vatika', path: '/projects/braj-anand-vatika' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top CTA */}
      <div className="bg-gradient-to-r from-saffron-600 to-temple-600">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 text-center">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">
            Ready to Own Your Dream Plot in Vrindavan?
          </h3>
          <p className="text-saffron-100 mb-3 text-base">{TAGLINE}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={`tel:${PHONE_NUMBER}`} className="btn-primary bg-white text-saffron-600 hover:bg-gray-100">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
            <Link to="/contact" className="btn-primary bg-white text-saffron-600 hover:bg-gray-100">
              Book Site Visit
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
                <img
                  src="/logo.png"
                  alt="BrajProperty"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-white">
                  Braj<span className="text-saffron-400">Property</span>
                </h3>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted partner for property investment in the holy city of Vrindavan. MVDA-approved projects with high appreciation potential.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-saffron-500 flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-saffron-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Projects</h4>
            <ul className="space-y-2">
              {projectLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-saffron-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-saffron-400 shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="text-sm text-gray-400 hover:text-saffron-400 transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-saffron-400 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="text-sm text-gray-400 hover:text-saffron-400 transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-saffron-400 shrink-0" />
                <span className="text-sm text-gray-400">{ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} BrajProperty.in. All rights reserved.</p>
          <p className="text-saffron-400 font-medium">{TAGLINE}</p>
        </div>
      </div>
    </footer>
  );
}
