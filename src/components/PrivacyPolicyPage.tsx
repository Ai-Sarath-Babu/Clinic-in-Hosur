import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Lock, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Calendar,
  Eye,
  Bell,
  Database,
  UserCheck
} from 'lucide-react';
import { 
  CLINIC_NAME, 
  CLINIC_PHONE_DISPLAY, 
  CLINIC_PHONE_INTL, 
  CLINIC_LOCATION 
} from '../data';

interface PrivacyPolicyPageProps {
  onNavigateHome: () => void;
  onBookClick: () => void;
  onNavigatePolicy?: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ 
  onNavigateHome, 
  onBookClick 
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `Privacy Policy | ${CLINIC_NAME} - Hosur`;
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-100 font-sans antialiased selection:bg-[#e6b133] selection:text-black">
      
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="sticky top-0 z-40 bg-[#0c0c0f]/95 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-[#e6b133] transition"
          >
            <ArrowLeft className="w-4 h-4 text-[#e6b133]" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={`tel:${CLINIC_PHONE_INTL}`}
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-zinc-300 hover:text-[#e6b133] transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#e6b133]" />
              <span>{CLINIC_PHONE_DISPLAY}</span>
            </a>

            <button
              onClick={() => {
                onNavigateHome();
                setTimeout(() => {
                  const el = document.getElementById('appointment-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-[#e6b133] hover:bg-[#d49f25] text-black font-extrabold text-xs uppercase tracking-wider transition shadow-md shadow-[#e6b133]/20"
            >
              Book Free Slot
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="relative py-12 sm:py-16 border-b border-zinc-900 bg-gradient-to-b from-[#111115] to-[#0a0a0b] overflow-hidden">
        {/* Subtle grid accent */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6b133]/15 border border-[#e6b133]/30 text-[#e6b133] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PATIENT PRIVACY & DATA PROTECTION</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
            This Privacy Policy outlines how <strong className="text-white">{CLINIC_NAME}</strong> (Hosur, Tamil Nadu) collects, protects, uses, and safeguards personal information and healthcare inquiry details provided by our patients and website visitors.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-zinc-500">
            <span>Last Updated: September 2026</span>
            <span>•</span>
            <span>Effective For: Bonitaa Skin and Hair Care, Hosur</span>
            <span>•</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" /> Compliant with DPDP Act & Medical Ethics
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-12 text-sm sm:text-base leading-relaxed text-zinc-300">
          
          {/* Quick Summary Highlights */}
          <div className="bg-[#121216] border border-[#e6b133]/30 rounded-2xl p-5 sm:p-6 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#e6b133] mb-3">
              <Lock className="w-4 h-4" />
              <span>At a Glance: Our Privacy Commitments</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#e6b133] shrink-0 mt-0.5" />
                <span><strong>No Data Selling:</strong> We never sell, rent, or trade patient phone numbers or details to any third-party marketing agency.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#e6b133] shrink-0 mt-0.5" />
                <span><strong>Doctor-Patient Privilege:</strong> Consultation concerns, scalp diagnostics, and skin concerns remain 100% confidential.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#e6b133] shrink-0 mt-0.5" />
                <span><strong>Transactional Notifications:</strong> Contact info is used exclusively for consultation confirmations and appointment alerts.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#e6b133] shrink-0 mt-0.5" />
                <span><strong>Patient Rights:</strong> You can request data correction, appointment cancellation, or record removal at any time.</span>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#e6b133]/15 text-[#e6b133] font-bold text-xs">
                01
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                1. Clinic Identity & Contact Information
              </h2>
            </div>
            <p className="text-zinc-400">
              This Privacy Policy applies to the clinical services, consultation booking channels, digital forms, and website operations of:
            </p>
            <div className="bg-[#121215] border border-zinc-800 rounded-xl p-4 sm:p-5 space-y-2 text-xs sm:text-sm">
              <p><strong className="text-white">Clinic Name:</strong> {CLINIC_NAME}</p>
              <p><strong className="text-white">Facility Address:</strong> Shanthi Nagar, Hosur, Tamil Nadu 635109 (Near Hosur Bus Stand)</p>
              <p><strong className="text-white">Helpline / Direct Phone:</strong> +91 {CLINIC_PHONE_DISPLAY}</p>
              <p><strong className="text-white">Consultation Hours:</strong> 10:00 AM – 8:00 PM (Monday through Sunday)</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#e6b133]/15 text-[#e6b133] font-bold text-xs">
                02
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                2. Information We Collect
              </h2>
            </div>
            <p className="text-zinc-400">
              When you schedule a 100% Free Consultation, submit an inquiry, or interact with our clinic digitally, we may collect the following categories of information:
            </p>
            <ul className="space-y-3 list-disc pl-5 text-zinc-300">
              <li>
                <strong className="text-white">Personal Contact Identifiers:</strong> Full Name, 10-digit Mobile Phone Number, and Optional Email Address.
              </li>
              <li>
                <strong className="text-white">Consultation Preferences:</strong> Preferred mode of appointment (In-Clinic visit at Shanthi Nagar, Hosur or Online HD Video Consultation), preferred appointment date and time slot.
              </li>
              <li>
                <strong className="text-white">Clinical Inquiries & Treatment Interest:</strong> Skin care concerns (such as acne, pigmentation, open pores, laser hair removal) or hair care concerns (such as hair fall, bald patches, dandruff, hair transplant, PRP, or GFC therapy).
              </li>
              <li>
                <strong className="text-white">Technical & Usage Data:</strong> Anonymized device type, browser information, and referral sources to optimize mobile page loading speeds.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#e6b133]/15 text-[#e6b133] font-bold text-xs">
                03
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                3. Purpose & How We Use Your Information
              </h2>
            </div>
            <p className="text-zinc-400">
              We process personal information strictly for legitimate healthcare, diagnostic, and clinical administration purposes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 bg-[#141418] border border-zinc-800 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm">
                  <Calendar className="w-4 h-4 text-[#e6b133]" />
                  <span>Appointment Scheduling</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Allocating dermatologist consultation slots, doctor availability, and clinic reception desk coordination.
                </p>
              </div>

              <div className="p-4 bg-[#141418] border border-zinc-800 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm">
                  <Bell className="w-4 h-4 text-[#e6b133]" />
                  <span>Instant Verification Call & SMS</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Calling or sending SMS/WhatsApp alerts within 15 minutes to confirm booking details and provide clinic directions.
                </p>
              </div>

              <div className="p-4 bg-[#141418] border border-zinc-800 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm">
                  <UserCheck className="w-4 h-4 text-[#e6b133]" />
                  <span>Clinical Case Assessment</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Allowing our certified dermatologists to review your hair or skin history prior to examination.
                </p>
              </div>

              <div className="p-4 bg-[#141418] border border-zinc-800 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm">
                  <Eye className="w-4 h-4 text-[#e6b133]" />
                  <span>Treatment Follow-Ups</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Post-procedure care instructions, session reminders for multi-stage therapies (like PRP or Laser), and medical follow-up.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#e6b133]/15 text-[#e6b133] font-bold text-xs">
                04
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                4. Strict Doctor-Patient Medical Confidentiality
              </h2>
            </div>
            <p className="text-zinc-300">
              Healthcare data requires the highest echelon of protection. In accordance with ethical medical standards and applicable data protection regulations:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-zinc-300">
              <li>
                All clinical consultations, trichological scalp scans, and dermatological evaluations are protected under medical privacy protocols.
              </li>
              <li>
                <strong>Before & After Case Photography:</strong> Clinical photographs displayed on our website or media showcase are utilized <em>solely</em> with the explicit, documented written consent of the respective patient. Unconsented medical images are never shared.
              </li>
              <li>
                Prescriptions and treatment charts are maintained in secure, authorized electronic medical record (EMR) systems accessible only by licensed clinic medical personnel.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#e6b133]/15 text-[#e6b133] font-bold text-xs">
                05
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                5. Third-Party Disclosures & Non-Sale Commitment
              </h2>
            </div>
            <div className="p-4 bg-emerald-950/20 border border-emerald-800/40 rounded-xl text-emerald-200 text-xs sm:text-sm">
              <strong className="text-emerald-300 font-bold block mb-1">Our Anti-Spam Guarantee:</strong>
              We do not sell, license, rent, or trade your personal telephone numbers, email addresses, or medical inquiries to third-party telemarketing companies, ad networks, or data brokers.
            </div>
            <p className="text-zinc-400">
              Personal information is only disclosed to authorized service partners necessary to fulfill clinical operations (such as secure SMS gateways for appointment confirmation or Formspree integration for secure form handling), all bound by strict non-disclosure obligations.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#e6b133]/15 text-[#e6b133] font-bold text-xs">
                06
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                6. Communication Consent & Opt-Out Preferences
              </h2>
            </div>
            <p className="text-zinc-400">
              By submitting your phone number via our booking form or calling our helpline, you consent to receive direct telephone calls, WhatsApp messages, or SMS notifications regarding your requested consultation.
            </p>
            <p className="text-zinc-400">
              If at any stage you wish to pause or opt-out of appointment notifications, you may inform our reception team directly during your phone call, message our WhatsApp support, or email our clinic desk.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#e6b133]/15 text-[#e6b133] font-bold text-xs">
                07
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                7. Data Retention & Digital Security
              </h2>
            </div>
            <p className="text-zinc-400">
              We implement industry-grade technical and organizational security measures including SSL/TLS 256-bit encryption in transit, firewalled servers, and credentialed administrative access to protect your data from unauthorized disclosure, loss, or misuse.
            </p>
            <p className="text-zinc-400">
              Patient consultation inquiry records are retained only for the duration necessary to satisfy clinical record-keeping compliance and continuity of medical care.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#e6b133]/15 text-[#e6b133] font-bold text-xs">
                08
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                8. Your Patient Rights
              </h2>
            </div>
            <p className="text-zinc-400">
              Under applicable digital privacy guidelines, you hold rights concerning your stored personal data:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-zinc-300">
              <li><strong>Right to Access:</strong> Request a summary of personal information held by our clinic.</li>
              <li><strong>Right to Rectification:</strong> Request prompt correction of outdated contact numbers or inaccurate profile details.</li>
              <li><strong>Right to Erasure:</strong> Request the deletion of marketing inquiry records when they are no longer required for regulatory healthcare compliance.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#e6b133]/15 text-[#e6b133] font-bold text-xs">
                09
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                9. Contact & Grievance Officer
              </h2>
            </div>
            <p className="text-zinc-400">
              If you have any questions, concerns, or grievances regarding this Privacy Policy or how your personal information is handled, please contact our clinic administration team:
            </p>
            <div className="bg-[#121215] border border-zinc-800 rounded-xl p-5 space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-white font-bold">
                <MapPin className="w-4 h-4 text-[#e6b133]" />
                <span>{CLINIC_NAME} - Patient Privacy Desk</span>
              </div>
              <p className="text-zinc-300">Shanthi Nagar, Hosur, Tamil Nadu 635109</p>
              <p className="text-zinc-300">Direct Telephone: <a href={`tel:${CLINIC_PHONE_INTL}`} className="text-[#e6b133] font-bold hover:underline">+91 {CLINIC_PHONE_DISPLAY}</a></p>
              <p className="text-zinc-400 text-xs">Available 10:00 AM – 8:00 PM (IST) all 7 days of the week.</p>
            </div>
          </section>

        </div>

        {/* Back To Home & Appointment CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#17171d] via-[#1a1a24] to-[#17171d] border border-zinc-800 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Ready to Begin Your Skin or Hair Transformation?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Experience advanced, FDA-approved dermatological and hair care treatments in Hosur with a 100% Free Consultation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                onNavigateHome();
                setTimeout(() => {
                  const el = document.getElementById('appointment-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="px-6 py-3 rounded-xl bg-[#e6b133] hover:bg-[#d49f25] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider transition shadow-lg shadow-[#e6b133]/20"
            >
              Book Free Consultation
            </button>
            <button
              onClick={onNavigateHome}
              className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-semibold text-xs sm:text-sm transition"
            >
              Return to Home Page
            </button>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-black py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          
          <div className="flex items-center gap-3">
            <img
              src="/assets/bonitaa_clinic_logo.png"
              alt="Bonitaa Skin & Hair Care"
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-zinc-400">
              © {new Date().getFullYear()} {CLINIC_NAME}. All Rights Reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button 
              onClick={onNavigateHome}
              className="hover:text-white transition cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                setTimeout(() => {
                  const el = document.getElementById('treatments');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="hover:text-white transition cursor-pointer"
            >
              Treatments
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                setTimeout(() => {
                  const el = document.getElementById('success-stories');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="hover:text-white transition cursor-pointer"
            >
              Success Stories
            </button>
            <span className="text-[#e6b133] font-semibold">Privacy Policy</span>
            <a 
              href="https://maps.google.com/?q=Bonitaa+Skin+and+Hair+Care+Hosur" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#e6b133] transition"
            >
              Get Directions
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
};
