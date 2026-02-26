import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component, ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import LeadPopup from '@/components/LeadPopup';
import HomePage from '@/pages/HomePage';
import ProjectsPage from '@/pages/ProjectsPage';
import WhyInvestPage from '@/pages/WhyInvestPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import GalleryPage from '@/pages/GalleryPage';
import ContactPage from '@/pages/ContactPage';
import ProjectDetailPage from '@/pages/ProjectDetailPage';
import SearchResultsPage from '@/pages/SearchResultsPage';
import AboutPage from '@/pages/AboutPage';
import ScrollToTop from '@/components/ScrollToTop';
import { EMAIL, PHONE_NUMBER, TAGLINE } from '@/data/siteData';

const MAINTENANCE_MODE = false;

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
          <h2 style={{ color: 'red' }}>Something went wrong.</h2>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#333' }}>{this.state.error?.message}</pre>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#666', fontSize: '12px' }}>{this.state.error?.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  if (MAINTENANCE_MODE) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)]" />
          <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
            <img src="/logo.png" alt="Braj Property" className="mb-8 w-36 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]" />
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Braj Property</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Website Under Maintenance</h1>
            <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">{TAGLINE}</p>
            <p className="mt-6 max-w-2xl text-sm text-slate-300">
              We are improving our site to serve you better. Please check back shortly. For urgent queries, reach us at
              <span className="ml-2 inline-flex flex-wrap items-center justify-center gap-2 text-amber-200">
                <span>{PHONE_NUMBER}</span>
                <span className="hidden h-1 w-1 rounded-full bg-amber-200 sm:inline-block" />
                <span>{EMAIL}</span>
              </span>
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-slate-700/80 px-3 py-1">Vrindavan • Mathura</span>
              <span className="rounded-full border border-slate-700/80 px-3 py-1">MVDA Approved</span>
              <span className="rounded-full border border-slate-700/80 px-3 py-1">Residential & Commercial</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/why-invest" element={<WhyInvestPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/search" element={<SearchResultsPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingButtons />
          <LeadPopup />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
