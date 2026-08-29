import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BottomCTA } from './components/BottomCTA';
import { ThankYouPage } from './components/ThankYouPage';
import { LeadFormData } from './types';

export function App() {
  const [submittedData, setSubmittedData] = useState<LeadFormData | null>(null);

  const handleFormSubmit = (data: LeadFormData) => {
    setSubmittedData(data);
  };

  const handleScrollToForm = () => {
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

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-100 font-sans antialiased selection:bg-[#e6b133] selection:text-black">
      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Main Navigation Header */}
      <Navbar onBookClick={handleScrollToForm} />

      {/* 3. Hero Section with Booking Form & Stats */}
      <HeroSection
        onFormSubmit={handleFormSubmit}
        onBookClick={handleScrollToForm}
      />

      {/* 4. Advanced Clinical Treatments (Skin & Hair) + Highlight Banners */}
      <TreatmentsSection onSelectTreatment={handleSelectTreatment} />

      {/* 5. Before & After Patient Gallery Showcase */}
      <BeforeAfterGallery onBookClick={handleScrollToForm} />

      {/* 6. Why We Are Hosur's Most Trusted Clinic (8 Features + Doctor Consult Banner) */}
      <WhyChooseUs onBookClick={handleScrollToForm} />

      {/* 7. Verified Success Stories (Google Rating + Real Instagram Reels + Written Reviews) */}
      <TestimonialsSection />

      {/* 8. Bottom Direct Helpline CTA & Footer */}
      <BottomCTA onBookClick={handleScrollToForm} />
    </div>
  );
}

export default App;
