import React from 'react';
import { Phone, MessageCircle, MapPin, CheckSquare } from 'lucide-react';
import { CANDIDATES, BALLOT_NOTICE } from '../data/campaignData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002f1e] text-stone-300 py-12 border-t border-[#002316]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-emerald-900/60">
          {/* Col 1: Campaign Wordmark & Info */}
          <div>
            <div className="text-lg font-bold text-white mb-2">
              APJ Hostel Food Committee Campaign
            </div>
            <p className="text-xs text-stone-400 leading-relaxed mb-3">
              Dr. A.P.J. Abdul Kalam Hostel, Jamia Millia Islamia, Jamia Nagar, New Delhi - 110025.
            </p>
            <div className="text-xs text-amber-300 font-bold mb-2">
              "{BALLOT_NOTICE.slogan}" — Better Food · Better Hostel
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Contact / Meet: <strong>Room 806, APJ Hostel</strong></span>
            </div>
          </div>

          {/* Col 2: Candidates Direct Contacts with Serial Numbers */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
              Ballot Serials & Direct Contacts
            </div>
            <ul className="space-y-2 text-xs">
              {CANDIDATES.map((c) => (
                <li key={c.id} className="flex items-center justify-between">
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-900 text-amber-300 font-mono text-[10px] font-bold">
                      SL {c.serialNo}
                    </span>
                    <span>{c.displayName}:</span>
                  </span>
                  <a
                    href={`tel:${c.rawPhone}`}
                    className="font-mono text-emerald-300 hover:text-white transition-colors"
                  >
                    {c.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
              Campaign Links
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#candidates" className="hover:text-amber-300 transition-colors">
                  Meet Candidates (Room 806)
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-amber-300 transition-colors">
                  4-Point Action Manifesto
                </a>
              </li>
              <li>
                <a href="#mess-poll" className="hover:text-amber-300 transition-colors">
                  Live Mess Priorities Poll
                </a>
              </li>
              <li>
                <a href="#grievance" className="hover:text-amber-300 transition-colors">
                  24/7 Mess Grievance Hotline
                </a>
              </li>
              <li>
                <a href="#campaign-tools" className="hover:text-amber-300 transition-colors">
                  Voter Endorsement Card Generator
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © 2026 APJ Abdul Kalam Hostel Food Committee Election · Jamia Millia Islamia.
          </div>
          <div className="font-semibold text-amber-200">
            "Tick dekh ke lagaye: Serial 1, 15, and 18!" · Meet at Room 806
          </div>
        </div>
      </div>
    </footer>
  );
};
