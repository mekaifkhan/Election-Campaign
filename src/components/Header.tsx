import React from 'react';
import { Vote } from 'lucide-react';

interface HeaderProps {
  onPledgeClick: () => void;
  pledged: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onPledgeClick, pledged }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#004d32]/95 backdrop-blur-md border-b border-[#003824] text-white transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single line, no badges) */}
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-white hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span>APJ Hostel Election · JMI</span>
        </a>

        {/* Zone 2: 4-5 single-line clean text links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-emerald-100">
          <a
            href="#candidates"
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            Candidates
          </a>
          <a
            href="#manifesto"
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            Manifesto
          </a>
          <a
            href="#mess-poll"
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            Mess Wishlist
          </a>
          <a
            href="#grievance"
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            Direct Hotline
          </a>
          <a
            href="#campaign-tools"
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            Get Poster
          </a>
        </nav>

        {/* Zone 3: Exactly 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onPledgeClick}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all shadow-sm whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              pledged
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'bg-amber-400 hover:bg-amber-300 text-[#003623]'
            }`}
          >
            <Vote className="w-3.5 h-3.5" />
            <span>{pledged ? 'Pledged Support ✓' : 'Pledge Your Vote'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
