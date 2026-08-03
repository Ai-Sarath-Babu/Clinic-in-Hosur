import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Video, 
  CheckCircle2, 
  AlertCircle, 
  BookmarkCheck, 
  Sparkles 
} from 'lucide-react';
import { LeadFormInput } from '../types';

interface LeadBookingFormProps {
  source: string;
  formId?: string;
  buttonText?: string;
  onSuccess?: (data: LeadFormInput & { referenceId: string }) => void;
  compact?: boolean;
}

export default function LeadBookingForm({
  source,
  formId = 'xdaryoeg',
  buttonText = 'CONFIRM FREE CONSULTATION',
  onSuccess,
  compact = false
}: LeadBookingFormProps) {
  const [state, handleSubmit] = useForm(formId);

  const [formData, setFormData] = useState<LeadFormInput>({
    fullName: '',
    mobileNumber: '',
    email: '',
    consultationType: 'In-Clinic'
  });

  const [touched, setTouched] = useState({
    fullName: false,
    mobileNumber: false,
    email: false
  });

  const [refId] = useState(() => `BON-${Math.floor(100000 + Math.random() * 900000)}`);

  // Real-time validation checks
  const isNameValid = formData.fullName.trim().length >= 2;
  const isPhoneValid = /^[6-9]\d{9}$/.test(formData.mobileNumber);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());

  const isFormValid = isNameValid && isPhoneValid && isEmailValid;

  // Handle Formspree success trigger
  useEffect(() => {
    if (state.succeeded && onSuccess) {
      onSuccess({
        ...formData,
        referenceId: refId
      });
    }
  }, [state.succeeded, onSuccess, formData, refId]);

  const handleBlur = (field: keyof typeof touched) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleCustomSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Touch all fields to show any missing errors
    setTouched({
      fullName: true,
      mobileNumber: true,
      email: true
    });

    if (!isFormValid) {
      e.preventDefault();
      return;
    }

    // Call Formspree's handleSubmit
    handleSubmit(e);
  };

  // Helper for input container classes
  const getInputClass = (isValid: boolean, isTouched: boolean) => {
    const base = "w-full min-h-[44px] py-2.5 bg-clinic-dark border rounded-xl text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none transition-all duration-200";
    if (!isTouched) {
      return `${base} border-clinic-border focus:border-brand-gold/70 focus:ring-1 focus:ring-brand-gold/30`;
    }
    if (isValid) {
      return `${base} border-emerald-500/80 bg-emerald-950/15 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500/30`;
    }
    return `${base} border-rose-500/80 bg-rose-950/15 focus:border-rose-400 focus:ring-1 focus:ring-rose-500/30`;
  };

  if (state.succeeded) {
    return (
      <div className="bg-emerald-950/30 border border-emerald-500/40 rounded-xl p-5 sm:p-6 text-center space-y-3 my-2 animate-fadeIn">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-base font-bold text-white">Booking Request Confirmed!</h4>
        <p className="text-xs text-gray-300 leading-relaxed max-w-sm mx-auto">
          Thank you <span className="text-emerald-400 font-semibold">{formData.fullName || 'valued patient'}</span>! Reference ID: <span className="font-mono font-bold text-brand-gold">{refId}</span>. Our clinic coordinator will contact you within 15 minutes.
        </p>
        <div className="pt-2">
          <p className="text-[11px] text-brand-gold font-semibold">
            Need instant confirmation? Call us at <a href="tel:9626615566" className="underline font-bold text-white">9626615566</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleCustomSubmit} className="space-y-4 text-left">
      {/* Hidden inputs for Formspree context */}
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="referenceId" value={refId} />
      <input type="hidden" name="consultationType" value={formData.consultationType} />
      <input type="hidden" name="timestamp" value={new Date().toISOString()} />

      {/* Name Field */}
      <div>
        <label className="block text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
          Your Full Name <span className="text-brand-gold">*</span>
        </label>
        <div className="relative flex items-center">
          <span className="absolute left-3 text-gray-400 pointer-events-none">
            <User className="w-4 h-4" />
          </span>
          <input
            type="text"
            name="fullName"
            required
            placeholder="Enter first and last name"
            value={formData.fullName}
            onChange={e => {
              setFormData({ ...formData, fullName: e.target.value });
              if (!touched.fullName && e.target.value.length > 0) {
                setTouched(prev => ({ ...prev, fullName: true }));
              }
            }}
            onBlur={() => handleBlur('fullName')}
            className={`${getInputClass(isNameValid, touched.fullName)} pl-9 pr-9`}
          />
          {touched.fullName && (
            <span className="absolute right-3 pointer-events-none">
              {isNameValid ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-400" />
              )}
            </span>
          )}
        </div>
        {touched.fullName && !isNameValid && (
          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-medium">
            <AlertCircle className="w-3 h-3 shrink-0" />
            Please enter at least 2 characters
          </p>
        )}
        <ValidationError field="fullName" errors={state.errors} className="text-xs text-rose-400 mt-1" />
      </div>

      {/* Phone Field */}
      <div>
        <label className="block text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
          Phone Number <span className="text-brand-gold">*</span>
        </label>
        <div className="relative flex items-center">
          <span className="absolute left-3 text-gray-400 pointer-events-none text-xs font-mono font-bold">
            +91
          </span>
          <input
            type="tel"
            name="mobileNumber"
            required
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            placeholder="10-digit mobile number"
            value={formData.mobileNumber}
            onChange={e => {
              const cleaned = e.target.value.replace(/\D/g, '');
              setFormData({ ...formData, mobileNumber: cleaned });
              if (!touched.mobileNumber && cleaned.length > 0) {
                setTouched(prev => ({ ...prev, mobileNumber: true }));
              }
            }}
            onBlur={() => handleBlur('mobileNumber')}
            className={`${getInputClass(isPhoneValid, touched.mobileNumber)} pl-11 pr-9 font-mono`}
          />
          {touched.mobileNumber && (
            <span className="absolute right-3 pointer-events-none">
              {isPhoneValid ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-400" />
              )}
            </span>
          )}
        </div>
        {touched.mobileNumber && (
          isPhoneValid ? (
            <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3 h-3 shrink-0" />
              Valid 10-digit Indian mobile number
            </p>
          ) : (
            <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3 shrink-0" />
              Must be a 10-digit number starting with 6, 7, 8, or 9
            </p>
          )
        )}
        <ValidationError field="mobileNumber" errors={state.errors} className="text-xs text-rose-400 mt-1" />
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
          Email Address <span className="text-brand-gold">*</span>
        </label>
        <div className="relative flex items-center">
          <span className="absolute left-3 text-gray-400 pointer-events-none">
            <Mail className="w-4 h-4" />
          </span>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter email address"
            value={formData.email}
            onChange={e => {
              setFormData({ ...formData, email: e.target.value });
              if (!touched.email && e.target.value.length > 0) {
                setTouched(prev => ({ ...prev, email: true }));
              }
            }}
            onBlur={() => handleBlur('email')}
            className={`${getInputClass(isEmailValid, touched.email)} pl-9 pr-9`}
          />
          {touched.email && (
            <span className="absolute right-3 pointer-events-none">
              {isEmailValid ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-400" />
              )}
            </span>
          )}
        </div>
        {touched.email && (
          isEmailValid ? (
            <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3 h-3 shrink-0" />
              Valid email address
            </p>
          ) : (
            <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3 shrink-0" />
              Please enter a valid email address (e.g. name@domain.com)
            </p>
          )
        )}
        <ValidationError field="email" errors={state.errors} className="text-xs text-rose-400 mt-1" />
      </div>

      {/* Consultation Type Toggle Tabs */}
      <div>
        <label className="block text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
          Consultation Type <span className="text-brand-gold">*</span>
        </label>
        <div className="grid grid-cols-2 gap-2 bg-clinic-dark p-1 rounded-xl border border-clinic-border min-h-[44px] items-center">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, consultationType: 'In-Clinic' })}
            className={`min-h-[38px] py-2 px-3 text-xs font-extrabold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              formData.consultationType === 'In-Clinic'
                ? 'bg-clinic-card text-brand-gold border border-clinic-border shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
            <span>IN-CLINIC</span>
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, consultationType: 'Online' })}
            className={`min-h-[38px] py-2 px-3 text-xs font-extrabold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              formData.consultationType === 'Online'
                ? 'bg-clinic-card text-brand-gold border border-clinic-border shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Video className="w-3.5 h-3.5 text-brand-gold shrink-0" />
            <span>ONLINE</span>
          </button>
        </div>
      </div>

      {/* Form-level Error Message from Formspree */}
      <ValidationError errors={state.errors} className="text-xs text-rose-400 font-medium" />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full min-h-[48px] py-3.5 px-4 bg-brand-gold hover:bg-brand-gold-hover disabled:bg-gray-700 text-clinic-dark font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2 cursor-pointer mt-2"
      >
        {state.submitting ? (
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 animate-spin text-clinic-dark" />
            PROCESSING BOOKING...
          </span>
        ) : (
          <>
            <BookmarkCheck className="w-4.5 h-4.5 shrink-0" />
            <span>{buttonText}</span>
          </>
        )}
      </button>

      <p className="text-[10px] text-center text-gray-400 leading-normal pt-1">
        By submitting, you agree to receive a confirmation call/SMS within 15 mins. Limited-time 100% Free Consultation. No payment required.
      </p>
    </form>
  );
}
