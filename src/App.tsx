import React, { useState } from 'react';
import { PageTab } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { AdmissionModal } from './components/AdmissionModal';
import { FeeCalculatorModal } from './components/FeeCalculatorModal';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { AcademicsView } from './views/AcademicsView';
import { AdmissionsView } from './views/AdmissionsView';
import { CampusLifeView } from './views/CampusLifeView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isFeeModalOpen, setIsFeeModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f4] text-slate-800 font-sans selection:bg-[#152540] selection:text-white w-full overflow-x-hidden">
      {/* 3-Zone Header Contract & Top Info Ribbon */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenApplyModal={() => setIsApplyModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1 w-full overflow-x-hidden">
        {activeTab === 'home' && (
          <HomeView
            setActiveTab={setActiveTab}
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
            onOpenFeeModal={() => setIsFeeModalOpen(true)}
          />
        )}

        {activeTab === 'about' && (
          <AboutView
            setActiveTab={setActiveTab}
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
          />
        )}

        {activeTab === 'academics' && (
          <AcademicsView
            setActiveTab={setActiveTab}
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
          />
        )}

        {activeTab === 'admissions' && (
          <AdmissionsView
            setActiveTab={setActiveTab}
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
            onOpenFeeModal={() => setIsFeeModalOpen(true)}
          />
        )}

        {activeTab === 'campus-life' && (
          <CampusLifeView
            setActiveTab={setActiveTab}
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
          />
        )}

        {activeTab === 'contact' && (
          <ContactView
            setActiveTab={setActiveTab}
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
          />
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenApplyModal={() => setIsApplyModalOpen(true)}
      />

      {/* Floating Action Buttons (Direct WhatsApp & Hotline) */}
      <FloatingActions onOpenApplyModal={() => setIsApplyModalOpen(true)} />

      {/* Interactive Admission Application Modal */}
      <AdmissionModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

      {/* Interactive Tuition & Fee Calculator Modal */}
      <FeeCalculatorModal
        isOpen={isFeeModalOpen}
        onClose={() => setIsFeeModalOpen(false)}
        onOpenApplyModal={() => setIsApplyModalOpen(true)}
      />
    </div>
  );
}
