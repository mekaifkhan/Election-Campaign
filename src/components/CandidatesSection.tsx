import React, { useState } from 'react';
import { Phone, MessageCircle, Copy, Check, CheckCircle2, HeartHandshake, CheckSquare, MapPin } from 'lucide-react';
import { CANDIDATES, BALLOT_NOTICE } from '../data/campaignData';

export const CandidatesSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="candidates" className="py-16 bg-[#faf9f5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-2">
            The Three Voices Representing APJ Hostel
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            Meet Your Candidates
          </h2>
          <p className="text-stone-600 text-base leading-relaxed mb-6">
            Three dedicated hostel residents united with a single mission: to revolutionize our mess food,
            enforce kitchen hygiene, and make student grievances the top priority.
          </p>

          {/* Ballot & Room 806 Highlight Box */}
          <div className="bg-amber-100/80 border border-amber-300 rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-900">
            <div className="flex items-center gap-2 font-black text-sm text-stone-900">
              <CheckSquare className="w-5 h-5 text-emerald-800 shrink-0" />
              <span>Ballot Guideline: <span className="text-emerald-900 underline decoration-amber-500 font-extrabold">"{BALLOT_NOTICE.slogan}"</span></span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-700 bg-white/80 px-3 py-1.5 rounded-lg border border-amber-200">
              <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              <span>To meet them, contact: <strong>Room 806, APJ Hostel</strong></span>
            </div>
          </div>
        </div>

        {/* 3 Candidate Cards with Serial 1, 15, 18 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CANDIDATES.map((cand) => (
            <div
              key={cand.id}
              className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Header Banner matching the poster colors */}
                <div className={`p-6 border-b ${cand.colorScheme.border} ${cand.colorScheme.bg}`}>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#003824] text-amber-300 font-mono font-black text-xs shadow-xs">
                      <CheckSquare className="w-3.5 h-3.5 text-amber-300" />
                      <span>SERIAL NO. {cand.serialNo}</span>
                    </span>
                    <span
                      className={`px-3 py-0.5 rounded-full text-xs font-bold ${cand.colorScheme.badgeBg} ${cand.colorScheme.badgeText}`}
                    >
                      APJ Hostel
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-stone-900 tracking-tight">
                    {cand.displayName}
                  </h3>
                  <p className={`text-sm font-bold mt-1 ${cand.colorScheme.accent}`}>
                    {cand.agendaTitle}
                  </p>
                </div>

                {/* Candidate Content & Priorities */}
                <div className="p-6">
                  <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                    {cand.agendaDescription}
                  </p>

                  <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                    Key Commitments:
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {cand.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Room contact */}
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium py-2 px-3 bg-stone-50 rounded-lg border border-stone-100">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>Hostel Room: <strong>{cand.roomContact}</strong></span>
                  </div>
                </div>
              </div>

              {/* Contact & Action Section */}
              <div className="p-6 pt-0 mt-auto">
                <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200 mb-4">
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                    <span>Direct Phone Number:</span>
                    <button
                      onClick={() => handleCopy(cand.id, cand.phone)}
                      className="text-stone-600 hover:text-emerald-700 font-medium inline-flex items-center gap-1 cursor-pointer"
                      title="Copy phone number"
                    >
                      {copiedId === cand.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-600 font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="text-base font-mono font-bold text-stone-900 tracking-tight">
                    {cand.phone}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={`tel:${cand.rawPhone}`}
                    className="w-full py-2.5 px-3 rounded-lg text-xs font-bold bg-stone-900 hover:bg-stone-800 text-white flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={`https://wa.me/${cand.whatsappNumber}?text=${encodeURIComponent(
                      `Salam ${cand.name}! (Serial No. ${cand.serialNo}) I am an APJ Hostel resident and want to share my mess feedback with you.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-lg text-xs font-bold bg-[#25D366] hover:bg-[#1ebd5a] text-white flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Vote as a Panel Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-emerald-200 p-6 sm:p-8 shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
            <HeartHandshake className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-stone-900 mb-1">
              Why Vote For All Three As A Panel? (Serial 1, 15 & 18)
            </h4>
            <p className="text-sm text-stone-600 leading-relaxed mb-2">
              Mess management cannot be solved by one isolated representative. Kaif (Serial 1) guarantees swift student grievance handling & accountability, Najmul (Serial 15) enforces kitchen cleanliness & drinking water, and Ayaan (Serial 18) oversees taste & food quality. When all three are elected together, you get 100% coordination and zero excuses.
            </p>
            <div className="text-xs font-bold text-emerald-800 flex items-center gap-2">
              <span>⚠️ Ballot Instruction: "Tick dekh ke lagaye" — Serial No. 1, 15, and 18</span>
              <span>·</span>
              <span>Meet them: Room 806, APJ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
