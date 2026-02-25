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
