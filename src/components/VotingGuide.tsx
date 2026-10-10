import React, { useState } from 'react';
import { Calendar, MapPin, IdCard, HelpCircle, ChevronDown, ChevronUp, CheckSquare, Users } from 'lucide-react';
import { BALLOT_NOTICE } from '../data/campaignData';

export const VotingGuide: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Which ballot numbers should I mark for the Food Committee panel?',
      a: 'As the campaign slogan says: "Tick dekh ke lagaye!" — Mark Serial No. 1 (Kaif Ahmad Khan), Serial No. 15 (Najmul Hoda), and Serial No. 18 (Ayaan Alam). All three must be ticked together for complete panel victory!'
    },
    {
      q: 'Where can I meet the candidates in person to discuss my ideas or room concerns?',
      a: 'You can meet Kaif, Najmul, and Ayaan anytime in Room 806, APJ Hostel. You can also call or WhatsApp them directly.'
    },
    {
      q: 'Who is eligible to vote in the APJ Hostel Food Committee Election?',
      a: 'All currently enrolled and resident students allotted to Dr. A.P.J. Abdul Kalam Hostel, Jamia Millia Islamia with a valid hostel card/ID are entitled to vote.'
    },
    {
      q: 'How will the 5-day chicken menu be funded without increasing mess fees?',
      a: 'By eliminating middleman contractor waste, auditing bulk mandi wholesale pricing, and plugging inventory leakage, we can optimize the mess budget to comfortably restore 5-day chicken nights without unjustified fee hikes.'
    },
    {
      q: 'What should I carry to the polling booth on Election Day?',
      a: 'Carry your official Jamia Millia Islamia Student Identity Card and your APJ Hostel Identity Card / Hostel Fee Receipt.'
    }
  ];

  return (
    <section id="voting-guide" className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-2">
            Election Day Instructions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            How & Where To Cast Your Vote
          </h2>
          <p className="text-stone-600 text-sm max-w-xl mx-auto mb-4">
            Everything you need to know about exercising your voting right at Dr. A.P.J. Abdul Kalam Hostel.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 text-stone-950 font-black rounded-xl text-xs sm:text-sm border border-amber-500 shadow-xs">
            <CheckSquare className="w-4 h-4 text-emerald-950" />
            <span>"{BALLOT_NOTICE.slogan}" — Serial No. 1 · Serial No. 15 · Serial No. 18</span>
          </div>
        </div>

        {/* 4 Quick Guidance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-emerald-50/80 rounded-xl p-4 border border-emerald-300 text-center">
            <div className="w-9 h-9 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center mx-auto mb-2.5">
              <CheckSquare className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-stone-900 text-xs mb-1 uppercase tracking-wider">Ballot Choice</h4>
            <div className="text-xs font-mono font-bold text-emerald-950 leading-tight">
              <div>SL 1: Kaif</div>
              <div>SL 15: Najmul</div>
              <div>SL 18: Ayaan</div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 text-center">
            <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-2.5">
              <MapPin className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-stone-900 text-xs mb-1 uppercase tracking-wider">Polling Booth</h4>
            <p className="text-xs text-stone-600 leading-tight">
              APJ Dining Hall Foyer / Common Hall
            </p>
          </div>

          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 text-center">
            <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-2.5">
              <IdCard className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-stone-900 text-xs mb-1 uppercase tracking-wider">ID Document</h4>
            <p className="text-xs text-stone-600 leading-tight">
              Jamia Student ID & APJ Hostel Slip
            </p>
          </div>

          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 text-center">
            <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center mx-auto mb-2.5">
              <Users className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-stone-900 text-xs mb-1 uppercase tracking-wider">Meet In Person</h4>
            <p className="text-xs font-bold text-emerald-800 leading-tight">
              Room 806, APJ Hostel
            </p>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200">
          <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-700" />
            <span>Frequently Asked Questions</span>
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-stone-200/90 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-stone-900 text-sm hover:text-emerald-800 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-stone-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-600 border-t border-stone-100 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
