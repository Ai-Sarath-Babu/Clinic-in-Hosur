import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BottomCTA } from './components/BottomCTA';
import { ThankYouPage } from './components/ThankYouPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { LeadFormData } from './types';
import { CLINIC_NAME } from './data';

const isPrivacyRoute = (pathname: string, hash: string): boolean => {
  const cleanPath = pathname.toLowerCase().replace(/\/$/, '');
  const cleanHash = hash.toLowerCase();
  return (
    cleanPath === '/privacy-policy' ||
    cleanPath === '/privacy' ||
    cleanHash === '#/privacy-policy' ||
    cleanHash === '#privacy-policy' ||
    cleanHash === '#/privacy' ||
    cleanHash === '#privacy'
  );
};

export function App() {
  const [submittedData, setSubmittedData] = useState<LeadFormData | null>(null);
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      if (isPrivacyRoute(window.location.pathname, window.location.hash)) {
        return '/privacy-policy';
      }
      return window.location.pathname || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      if (isPrivacyRoute(window.location.pathname, window.location.hash)) {
        setCurrentPath('/privacy-policy');
      } else {
        setCurrentPath(window.location.pathname || '/');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (path: string) => {
    try {
      window.history.pushState(null, '', path);
    } catch {
      window.location.hash = path;
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = () => {
    try {
      window.history.pushState(null, '', '/');
    } catch {
      window.location.hash = '';
    }
    setCurrentPath('/');
    document.title = `Best Skin & Hair Care Clinic in Hosur | ${CLINIC_NAME}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (data: LeadFormData) => {
    setSubmittedData(data);
  };

  const handleScrollToForm = () => {
    if (currentPath === '/privacy-policy') {
      navigateHome();
      setTimeout(() => {
        const el = document.getElementById('appointment-form');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    const el = document.getElementById('appointment-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTreatment = (treatmentName: string) => {
    handleScrollToForm();
  };

  if (submittedData) {
    return (
      <ThankYouPage
        data={submittedData}
        onReset={() => setSubmittedData(null)}
      />
    );
  }

  // Separate URL View: Privacy Policy Page
  if (currentPath === '/privacy-policy') {
    return (
      <PrivacyPolicyPage
        onNavigateHome={navigateHome}
        onBookClick={handleScrollToForm}
        onNavigatePolicy={() => navigateTo('/privacy-policy')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-100 font-sans antialiased selection:bg-[#e6b133] selection:text-black pb-14 lg:pb-0">
      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Main Navigation Header */}
      <Navbar 
        onBookClick={handleScrollToForm} 
        onNavigateHome={navigateHome}
        onNavigatePolicy={() => navigateTo('/privacy-policy')}
      />

      {/* 3. Hero Section with Booking Form & Stats */}
      <HeroSection
        onFormSubmit={handleFormSubmit}
        onBookClick={handleScrollToForm}
        onNavigatePolicy={() => navigateTo('/privacy-policy')}
      />

      {/* 4. Advanced Clinical Treatments (Skin & Hair) + Highlight Banners */}
      <TreatmentsSection onSelectTreatment={handleSelectTreatment} />

      {/* 5. Before & After Patient Gallery Showcase */}
      <BeforeAfterGallery onBookClick={handleScrollToForm} />

      {/* 6. Why We Are Hosur's Most Trusted Clinic (8 Features + Doctor Consult Banner) */}
      <WhyChooseUs onBookClick={handleScrollToForm} />

      {/* 7. Verified Success Stories (Google Rating + Real Instagram Reels + Written Reviews) */}
      <TestimonialsSection />

      {/* 8. Bottom Direct Helpline CTA & Footer with Privacy Policy */}
      <BottomCTA 
        onBookClick={handleScrollToForm} 
        onNavigatePolicy={() => navigateTo('/privacy-policy')}
      />
    </div>
  );
}

export default App;
