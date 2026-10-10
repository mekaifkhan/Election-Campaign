import React from 'react';
import { X, Printer, Phone, CheckSquare, MapPin } from 'lucide-react';
import { CANDIDATES, BALLOT_NOTICE } from '../data/campaignData';

interface PrintablePosterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintablePosterModal: React.FC<PrintablePosterModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-6 border border-stone-300">
        {/* Controls Bar (hidden during physical print) */}
        <div className="no-print bg-stone-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Official Campaign Poster (Print Ready)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Poster (A4)</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Poster Canvas */}
        <div className="p-6 sm:p-8 bg-[#FDFCF7] text-stone-900 border-8 border-stone-200 m-2 sm:m-4 rounded-xl">
          {/* Top Banner */}
          <div className="text-center pb-4 border-b-2 border-stone-900 mb-5">
            <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-widest text-[#004d32] mb-1">
              <span>JAMIA MILLIA ISLAMIA</span>
              <span>DR. A.P.J. ABDUL KALAM HOSTEL</span>
            </div>

            <div className="text-3xl sm:text-5xl font-black tracking-tight text-[#004d32] mt-2 mb-1">
              VOTE THESE THREE
            </div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-800">
              For Food Committee Election
            </div>

            {/* TICK DEKH KE LAGAYE BANNER */}
            <div className="mt-3 py-1.5 px-4 bg-amber-400 text-stone-950 text-xs sm:text-sm font-black tracking-wider uppercase rounded-xl border border-amber-500 shadow-xs inline-flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-emerald-950" />
              <span>TICK DEKH KE LAGAYE — SERIAL NO. 1, 15 & 18</span>
            </div>

            <div className="block mt-2 text-xs font-bold text-stone-600">
              ★ Better Food · Better Hostel ★
            </div>
          </div>

          {/* 3 Candidates Grid with exact ballot serials and room 806 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
            {/* Candidate 1: Kaif */}
            <div className="border-2 border-sky-400 bg-sky-50/70 rounded-xl p-3.5 text-center flex flex-col justify-between">
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-sky-700 text-white font-mono text-[11px] font-black uppercase mb-1.5">
                  SERIAL NO. 1
                </div>
                <h4 className="text-lg font-black text-stone-900">KAIF AHMAD KHAN</h4>
                <div className="text-[11px] font-bold text-sky-800 uppercase tracking-wide mt-0.5">
                  For Responsive Committee & Instant Action
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-sky-200">
                <a
                  href="tel:9128914453"
                  className="inline-flex items-center gap-1 font-mono text-xs font-bold text-stone-800"
                >
                  <Phone className="w-3 h-3 text-sky-700" />
                  <span>9128914453</span>
                </a>
                <div className="text-[10px] text-stone-500 font-semibold mt-0.5">Room 806 APJ</div>
              </div>
            </div>

            {/* Candidate 2: Najmul */}
            <div className="border-2 border-amber-400 bg-amber-50/70 rounded-xl p-3.5 text-center flex flex-col justify-between">
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-amber-600 text-white font-mono text-[11px] font-black uppercase mb-1.5">
                  SERIAL NO. 15
                </div>
                <h4 className="text-lg font-black text-stone-900">NAJMUL HODA</h4>
                <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wide mt-0.5">
                  For Cleaner Kitchen & Dining Spaces
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-amber-200">
                <a
                  href="tel:+917870721409"
                  className="inline-flex items-center gap-1 font-mono text-xs font-bold text-stone-800"
                >
                  <Phone className="w-3 h-3 text-amber-700" />
                  <span>+91 78707 21409</span>
                </a>
                <div className="text-[10px] text-stone-500 font-semibold mt-0.5">Room 806 APJ</div>
              </div>
            </div>

            {/* Candidate 3: Ayaan */}
            <div className="border-2 border-rose-400 bg-rose-50/70 rounded-xl p-3.5 text-center flex flex-col justify-between">
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-rose-600 text-white font-mono text-[11px] font-black uppercase mb-1.5">
                  SERIAL NO. 18
                </div>
                <h4 className="text-lg font-black text-stone-900">AYAAN ALAM</h4>
                <div className="text-[11px] font-bold text-rose-700 uppercase tracking-wide mt-0.5">
                  For Better Food Quality & 5-Day Chicken
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-rose-200">
                <a
                  href="tel:7209749240"
                  className="inline-flex items-center gap-1 font-mono text-xs font-bold text-stone-800"
                >
                  <Phone className="w-3 h-3 text-rose-600" />
                  <span>72097 49240</span>
                </a>
                <div className="text-[10px] text-stone-500 font-semibold mt-0.5">Room 806 APJ</div>
              </div>
            </div>
          </div>

          {/* 4 Core Pillars Strip */}
          <div className="bg-[#004d32] text-white rounded-xl p-4 mb-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center divide-y sm:divide-y-0 sm:divide-x divide-emerald-800 text-xs">
              <div className="pt-2 sm:pt-0">
                <div className="text-amber-300 font-extrabold text-[11px] mb-0.5">🍲 PILLAR 1</div>
                <div className="font-bold">Better Food Quality</div>
              </div>
              <div className="pt-2 sm:pt-0">
                <div className="text-amber-300 font-extrabold text-[11px] mb-0.5">🍗 PILLAR 2</div>
                <div className="font-bold">5 Day Chicken Return</div>
              </div>
              <div className="pt-2 sm:pt-0">
                <div className="text-amber-300 font-extrabold text-[11px] mb-0.5">✨ PILLAR 3</div>
                <div className="font-bold">Cleaner Kitchen & Mess</div>
              </div>
              <div className="pt-2 sm:pt-0">
                <div className="text-amber-300 font-extrabold text-[11px] mb-0.5">💬 PILLAR 4</div>
                <div className="font-bold">Student Action Helpline</div>
              </div>
            </div>
          </div>

          {/* Meeting Room & Footer Tagline */}
          <div className="bg-stone-100 rounded-xl p-3 text-center mb-3 border border-stone-200">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-stone-900">
              <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
              <span>To meet the candidates, visit / contact: <strong className="underline text-[#004d32]">Room 806, APJ Hostel</strong></span>
            </div>
          </div>

          <div className="text-center pt-1">
            <div className="text-sm sm:text-base font-black text-stone-900 italic">
              "For a Healthier, Fairer and Better Mess for All JMI Students"
            </div>
            <div className="text-[10px] text-stone-500 mt-0.5 uppercase tracking-wider font-semibold">
              Bring your hostel card to the polling booth · Dr. A.P.J. Abdul Kalam Hostel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
