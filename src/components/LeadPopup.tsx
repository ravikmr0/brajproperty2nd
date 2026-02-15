import { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { PHONE_NUMBER } from '../data/siteData';

export default function LeadPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('leadPopupDismissed');
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('leadPopupDismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-saffron-500 to-temple-500 p-6 text-white relative">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <Download className="w-10 h-10 mb-3" />
          <h3 className="text-xl font-heading font-bold">Download Free Brochure</h3>
          <p className="text-saffron-100 text-sm mt-1">Get details of all MVDA-approved projects in Vrindavan</p>
        </div>

        {/* Form */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Thank You!</h4>
              <p className="text-gray-600 text-sm mt-1">Our team will share the brochure shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none text-sm"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none text-sm"
              />
              <input
                type="email"
                placeholder="Email (Optional)"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none text-sm"
              />
              <button type="submit" className="btn-primary w-full">
                Download Brochure
              </button>
              <p className="text-center text-xs text-gray-400">
                Or call us at <a href={`tel:${PHONE_NUMBER}`} className="text-saffron-500 font-medium">{PHONE_NUMBER}</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
