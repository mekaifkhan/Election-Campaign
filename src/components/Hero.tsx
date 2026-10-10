import React from 'react';
import { Phone, MessageCircle, Share2, CheckCircle2, ChevronRight, Download, Users, MapPin, CheckSquare } from 'lucide-react';
import heroImg from '@/src/assets/images/hero_apj_hostel_1791577707620.jpg';
import { CANDIDATES, BALLOT_NOTICE } from '../data/campaignData';

interface HeroProps {
  pledged: boolean;
  pledgeCount: number;
  onPledge: () => void;
  onOpenShareModal: () => void;
  onOpenPosterModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  pledged,
  pledgeCount,
  onPledge,
  onOpenShareModal,
  onOpenPosterModal
}) => {
  return (
    <section id="top" className="relative overflow-hidden bg-[#003824] text-white">
      {/* Background Graphic & Texture Overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
        <img
          src={heroImg}
          alt="Dr. APJ Abdul Kalam Hostel Jamia Millia Islamia"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#002f1e]/80 via-[#003824]/95 to-[#002a1b] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
        {/* Top Kicker - Jamia Millia Islamia */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300/90 mb-3 text-center">
          <span>Jamia Millia Islamia</span>
          <span aria-hidden="true">·</span>
          <span>Dr. A.P.J. Abdul Kalam Hostel</span>
          <span aria-hidden="true">·</span>
          <span>Food Committee Election</span>
        </div>

        {/* High-Impact "Tick Dekh Ke Lagaye" Golden Announcement Bar */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="bg-amber-400 text-stone-950 px-4 py-2 rounded-xl font-black text-center text-xs sm:text-sm tracking-wide shadow-md flex items-center justify-center gap-2 border border-amber-300">
            <CheckSquare className="w-4 h-4 text-emerald-950 shrink-0" />
            <span className="uppercase tracking-wider">Ballot Alert:</span>
            <span>"{BALLOT_NOTICE.slogan}" — Serial No. 1, 15 & 18!</span>
          </div>
        </div>

        {/* Main Display Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white mb-3">
            VOTE THESE THREE FOR{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 block sm:inline">
              FOOD COMMITTEE
            </span>
          </h1>

          <p className="text-base sm:text-lg text-emerald-100 font-medium max-w-2xl mx-auto mb-4 leading-relaxed">
            "Better Food · Better Hostel" — Standing together for a healthier, fairer, and cleaner mess for all APJ Hostel students.
          </p>

          {/* Meeting Point Notice */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/90 border border-emerald-700/80 text-xs text-amber-200 mb-8 shadow-inner">
            <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span>To meet them, you can contact: <strong className="text-white underline decoration-amber-400 decoration-2">{BALLOT_NOTICE.roomShort}</strong></span>
          </div>
        </div>

        {/* Candidates Hero Strip with Serial Numbers (Kaif 1, Najmul 15, Ayaan 18) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
          {CANDIDATES.map((cand) => (
            <div
              key={cand.id}
              className="bg-white text-slate-900 rounded-xl p-5 shadow-lg border border-amber-200/60 backdrop-blur-sm hover:translate-y-[-2px] transition-all relative overflow-hidden flex flex-col justify-between"
            >
              {/* Prominent Serial Number Stamp on top */}
              <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#004d32] text-amber-300 font-mono font-black text-xs shadow-xs">
                    <CheckSquare className="w-3 h-3 text-amber-300" />
                    <span>SERIAL NO. {cand.serialNo}</span>
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500">
                  Room 806 APJ
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-0.5">
                  {cand.displayName}
                </h3>
                <div className="text-xs font-semibold text-emerald-800 tracking-wide uppercase mb-2">
                  {cand.agendaTitle}
                </div>

                <p className="text-xs text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                  {cand.agendaDescription}
                </p>
              </div>

              {/* Direct Call & WhatsApp Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
                <a
                  href={`tel:${cand.rawPhone}`}
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                  title={`Call ${cand.name}`}
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="truncate">{cand.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${cand.whatsappNumber}?text=${encodeURIComponent(
                    `Salam ${cand.name}! (Serial No. ${cand.serialNo}) I am an APJ Hostel resident supporting you for Food Committee.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                  title={`WhatsApp ${cand.name}`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Core Pillars Strip from Poster */}
        <div className="max-w-4xl mx-auto bg-[#002719]/90 border border-emerald-800/80 rounded-xl p-4 sm:p-5 mb-10 shadow-inner">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-emerald-800/60">
            <div className="pt-2 sm:pt-0 sm:px-3">
              <div className="text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">Pillar 1</div>
              <div className="text-sm font-semibold text-white">Better Food Quality</div>
              <div className="text-xs text-emerald-300/80 mt-0.5">Hot rotis & pure dairy</div>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <div className="text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">Pillar 2</div>
              <div className="text-sm font-semibold text-white">5-Day Chicken Return</div>
              <div className="text-xs text-emerald-300/80 mt-0.5">Halal & savory feasts</div>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <div className="text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">Pillar 3</div>
              <div className="text-sm font-semibold text-white">Cleaner Kitchen & Mess</div>
              <div className="text-xs text-emerald-300/80 mt-0.5">Steam trays & UV water</div>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <div className="text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">Pillar 4</div>
              <div className="text-sm font-semibold text-white">Instant Feedback</div>
              <div className="text-xs text-emerald-300/80 mt-0.5">24/7 Redressal hotline</div>
            </div>
          </div>
        </div>

        {/* Action Row & Live Voter Pledge Counter */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <button
            onClick={onPledge}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
              pledged
                ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 ring-2 ring-amber-300/50'
            }`}
          >
            {pledged ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>You Pledged Your Vote!</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-950" />
                <span>Pledge Support for the Panel</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenShareModal}
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-sm bg-emerald-800/80 hover:bg-emerald-700 text-white border border-emerald-600/50 transition-colors flex items-center justify-center gap-2"
          >
            <Share2 className="w-4 h-4 text-amber-300" />
            <span>Share on WhatsApp</span>
          </button>

          <button
            onClick={onOpenPosterModal}
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-amber-300" />
            <span>Official Poster</span>
          </button>
        </div>

        {/* Live Pledge Social Proof Bar */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-emerald-200">
          <Users className="w-4 h-4 text-amber-300" />
          <span className="font-bold text-white tabular-nums">{pledgeCount}</span>
          <span>APJ Hostel residents have pledged their support online</span>
        </div>
      </div>
    </section>
  );
};
