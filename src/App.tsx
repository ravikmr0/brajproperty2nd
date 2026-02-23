import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/why-invest" element={<WhyInvestPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
        <LeadPopup />
      </div>
    </Router>
  );
}

export default App;
