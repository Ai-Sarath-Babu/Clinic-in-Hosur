import { useState } from 'react';
import { FAQ } from '../types';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface Props {
  faqs: FAQ[];
}

export default function FaqSection({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4" id="faq-section">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className="bg-clinic-card/75 border border-clinic-border rounded-xl overflow-hidden transition-all duration-300 hover:border-clinic-border/90"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand-gold/30"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-sm md:text-base font-semibold text-white tracking-tight">
                  {faq.question}
                </span>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? 'transform rotate-180 text-brand-gold' : ''
                }`}
              />
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-[500px] border-t border-clinic-border/40' : 'max-h-0'
              }`}
            >
              <div className="px-5 py-4 text-xs md:text-sm text-gray-300 leading-relaxed bg-clinic-dark/40">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
