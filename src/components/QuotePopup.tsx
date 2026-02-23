import { X, FileText } from 'lucide-react';
import { PHONE_NUMBER } from '@/data/siteData';

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
  projectName?: string;
}

export default function QuotePopup({ isOpen, onClose, projectName }: QuotePopupProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    
    // Show success message
    alert(`Thank you, ${name}! We'll contact you soon at ${phone}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-saffron-500 to-temple-500 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <FileText className="w-10 h-10 mb-3" />
          <h3 className="text-xl font-heading font-bold">Get a Quote</h3>
          <p className="text-saffron-100 text-sm mt-1">
            {projectName ? `For ${projectName}` : 'Share your details and we\'ll contact you'}
          </p>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none text-sm"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                required
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron-400 focus:border-transparent outline-none text-sm"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Submit
            </button>

            <p className="text-center text-xs text-gray-400">
              Or call us at <a href={`tel:${PHONE_NUMBER}`} className="text-saffron-500 font-medium">{PHONE_NUMBER}</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
