import React, { useState, useRef } from 'react';
import { Download, Sparkles, Check, Share2, Copy, CheckSquare, MapPin } from 'lucide-react';
import { BALLOT_NOTICE } from '../data/campaignData';

export const DigitalPosterGenerator: React.FC = () => {
  const [residentName, setResidentName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [floor, setFloor] = useState('1st Floor');
  const [downloading, setDownloading] = useState(false);

  const handleDownloadCard = () => {
    setDownloading(true);

    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1350; // Instagram / WhatsApp 4:5 story ratio
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      setDownloading(false);
      return;
    }

    // Background gradient: Deep Jamia Emerald
    const gradient = ctx.createLinearGradient(0, 0, 0, 1350);
    gradient.addColorStop(0, '#003623');
    gradient.addColorStop(0.5, '#004d32');
    gradient.addColorStop(1, '#002618');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1080, 1350);

    // Subtle decorative border
    ctx.strokeStyle = '#e5a93c';
    ctx.lineWidth = 14;
    ctx.strokeRect(30, 30, 1020, 1290);

    // Inner gold hairline
    ctx.strokeStyle = 'rgba(229, 169, 60, 0.4)';
    ctx.lineWidth = 2;
    ctx.strokeRect(45, 45, 990, 1260);

    // Header Kicker
    ctx.fillStyle = '#fde68a';
    ctx.font = 'bold 26px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('JAMIA MILLIA ISLAMIA · DR. A.P.J. ABDUL KALAM HOSTEL', 540, 105);

    // Election Category
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 64px sans-serif';
    ctx.fillText('FOOD COMMITTEE ELECTION', 540, 180);

    // Golden Slogan Banner with "TICK DEKH KE LAGAYE"
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(100, 215, 880, 56);
    ctx.fillStyle = '#002618';
    ctx.font = '900 28px sans-serif';
    ctx.fillText('★ TICK DEKH KE LAGAYE · BETTER FOOD, BETTER HOSTEL ★', 540, 253);

    // Resident Endorsement Box
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.beginPath();
    ctx.roundRect(100, 295, 880, 175, 20);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText('OFFICIAL RESIDENT ENDORSEMENT', 540, 335);

    const displayName = residentName.trim() ? residentName.trim() : 'APJ Hostel Resident';
    const roomText = roomNumber.trim() ? `Room ${roomNumber} (${floor})` : `${floor}, APJ Hostel, JMI`;

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 44px sans-serif';
    ctx.fillText(`"${displayName}"`, 540, 395);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '500 22px sans-serif';
    ctx.fillText(`Pledging full vote & support from ${roomText}`, 540, 440);

    // Candidates Header
    ctx.fillStyle = '#fde68a';
    ctx.font = 'bold 30px sans-serif';
    ctx.fillText('VOTE THE 3-MEMBER PANEL (BALLOT SERIAL NUMBERS):', 540, 520);

    // 3 Candidate Blocks (Kaif 1, Najmul 15, Ayaan 18)
    const candidates = [
      {
        serial: 'SERIAL NO. 1',
        name: 'KAIF AHMAD KHAN',
        role: 'Responsive Committee & Instant Action',
        phone: '9128914453',
        room: 'Room 806 APJ',
        accent: '#0284c7',
        y: 560
      },
      {
        serial: 'SERIAL NO. 15',
        name: 'NAJMUL HODA',
        role: 'Cleaner Kitchen & Sanitized Dining',
        phone: '+91 78707 21409',
        room: 'Room 806 APJ',
        accent: '#d97706',
        y: 705
      },
      {
        serial: 'SERIAL NO. 18',
        name: 'AYAAN ALAM',
        role: 'Better Food Quality & 5-Day Chicken',
        phone: '72097 49240',
        room: 'Room 806 APJ',
        accent: '#e11d48',
        y: 850
      }
    ];

    candidates.forEach((c) => {
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.roundRect(100, c.y, 880, 125, 16);
      ctx.fill();

      // Left color tag
      ctx.fillStyle = c.accent;
      ctx.fillRect(100, c.y, 16, 125);

      // Serial badge
      ctx.fillStyle = '#004d32';
      ctx.beginPath();
      ctx.roundRect(135, c.y + 15, 175, 32, 6);
      ctx.fill();
      ctx.fillStyle = '#fde68a';
      ctx.font = 'bold 18px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(c.serial, 222, c.y + 37);

      // Name
      ctx.fillStyle = '#0f172a';
      ctx.font = '900 32px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(c.name, 325, c.y + 40);

      // Role
      ctx.fillStyle = '#475569';
      ctx.font = '600 20px sans-serif';
      ctx.fillText(c.role, 140, c.y + 88);

      // Room & Phone on right
      ctx.fillStyle = c.accent;
      ctx.font = 'bold 24px monospace';
      ctx.textAlign = 'right';
      ctx.fillText(`📞 ${c.phone}`, 950, c.y + 48);

      ctx.fillStyle = '#64748b';
      ctx.font = '600 18px sans-serif';
      ctx.fillText(`📍 ${c.room}`, 950, c.y + 88);
    });

    // 4 Key Pillars Banner
    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.fillRect(80, 1005, 920, 100);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 21px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🍗 5-DAY CHICKEN MENU RETURN   •   ✨ STERILIZED KITCHEN TRAYS', 540, 1045);
    ctx.fillText('🍲 HOT TAWA ROTIS & PURE DAIRY   •   📱 24/7 WHATSAPP HELPLINE', 540, 1080);

    // Meet Candidates Notice
    ctx.fillStyle = '#fde68a';
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText('TO MEET THE CANDIDATES: VISIT ROOM 806, APJ HOSTEL', 540, 1160);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 28px sans-serif';
    ctx.fillText('"TICK DEKH KE LAGAYE — SERIAL NO. 1, 15 & 18"', 540, 1205);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '400 18px sans-serif';
    ctx.fillText('Bring your Jamia Student ID Card on Election Day • Vote for Progress', 540, 1245);

    // Export image download
    const link = document.createElement('a');
    link.download = `APJ_Hostel_Election_Endorsement_${displayName.replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    setDownloading(false);
  };

  const shareText = `I am supporting Kaif Ahmad Khan (Serial 1), Najmul Hoda (Serial 15), and Ayaan Alam (Serial 18) for Food Committee Election at APJ Hostel, Jamia Millia Islamia! "Tick dekh ke lagaye!" To meet the candidates, visit Room 806, APJ Hostel.`;

  return (
    <section id="campaign-tools" className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Digital Campaign Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            Generate Your Voter Endorsement Card
          </h2>
          <p className="text-stone-600 text-base leading-relaxed mb-4">
            Show your support across WhatsApp status, Instagram stories, and hostel batch groups.
            Personalize your endorsement card with your name and room number.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-stone-900 rounded-lg text-xs font-bold border border-amber-300">
            <CheckSquare className="w-3.5 h-3.5 text-emerald-800" />
            <span>Serial No. 1: Kaif · Serial No. 15: Najmul · Serial No. 18: Ayaan</span>
            <span>·</span>
            <span>Room 806 APJ</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Form: Inputs */}
          <div className="lg:col-span-6 bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            <h3 className="text-xl font-bold text-stone-900 mb-4">
              Personalize Your Campaign Card
            </h3>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={residentName}
                  onChange={(e) => setResidentName(e.target.value)}
                  placeholder="e.g. Tariq Ansari"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Room Number
                  </label>
                  <input
                    type="text"
                    value={roomNumber}
                    onChange={(e) => setRoomNumber(e.target.value)}
                    placeholder="e.g. 214"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Hostel Floor
                  </label>
                  <select
                    value={floor}
                    onChange={(e) => setFloor(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="Ground Floor">Ground Floor</option>
                    <option value="1st Floor">1st Floor</option>
                    <option value="2nd Floor">2nd Floor</option>
                    <option value="3rd Floor">3rd Floor</option>
                    <option value="4th Floor">4th Floor</option>
                    <option value="5th Floor">5th Floor</option>
                    <option value="6th Floor">6th Floor</option>
                    <option value="7th Floor">7th Floor</option>
                    <option value="8th Floor">8th Floor</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleDownloadCard}
                disabled={downloading}
                className="w-full py-3 px-4 rounded-xl bg-[#004d32] hover:bg-[#003824] text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-300" />
                <span>{downloading ? 'Generating High-Res Card...' : 'Download HD Campaign Card (PNG)'}</span>
              </button>

              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `${shareText} Contact candidates: Kaif (9128914453), Najmul (+91 78707 21409), Ayaan (72097 49240)`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Endorsement on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Live Preview: Visual representation of the card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm bg-gradient-to-b from-[#003623] via-[#004d32] to-[#002618] text-white rounded-2xl p-5 shadow-xl border-4 border-amber-400/80 relative">
              <div className="text-center mb-3">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block">
                  JAMIA MILLIA ISLAMIA · APJ HOSTEL
                </span>
                <h4 className="text-base font-black text-white tracking-tight mt-0.5">
                  FOOD COMMITTEE ELECTION
                </h4>
                <div className="mt-1 inline-block bg-amber-400 text-[#002618] px-2 py-0.5 rounded text-[10px] font-extrabold uppercase">
                  Tick Dekh Ke Lagaye · Better Mess
                </div>
              </div>

              {/* Endorsement badge */}
              <div className="bg-white/10 rounded-xl p-3 text-center my-3 border border-white/20">
                <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wide block">
                  Resident Endorsement
                </span>
                <div className="text-sm font-black text-white mt-0.5">
                  "{residentName.trim() || 'Your Name Here'}"
                </div>
                <div className="text-[10px] text-stone-200">
                  {roomNumber.trim() ? `Room ${roomNumber} (${floor})` : `${floor}, APJ Hostel`}
                </div>
              </div>

              {/* Candidate mini-cards (Kaif 1, Najmul 15, Ayaan 18) */}
              <div className="space-y-1.5 text-slate-900 text-xs my-3">
                <div className="bg-white rounded-lg p-2.5 flex items-center justify-between border-l-4 border-sky-500">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="bg-[#004d32] text-amber-300 px-1.5 py-0.5 rounded text-[9px] font-mono font-black">
                        SL 1
                      </span>
                      <span className="font-extrabold text-[11px]">KAIF AHMAD KHAN</span>
                    </div>
                    <div className="text-[9px] text-slate-500 mt-0.5">Responsive Committee · Room 806</div>
                  </div>
                  <div className="font-mono text-[10px] font-bold text-sky-700">9128914453</div>
                </div>

                <div className="bg-white rounded-lg p-2.5 flex items-center justify-between border-l-4 border-amber-500">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="bg-[#004d32] text-amber-300 px-1.5 py-0.5 rounded text-[9px] font-mono font-black">
                        SL 15
                      </span>
                      <span className="font-extrabold text-[11px]">NAJMUL HODA</span>
                    </div>
                    <div className="text-[9px] text-slate-500 mt-0.5">Clean Kitchen & Mess · Room 806</div>
                  </div>
                  <div className="font-mono text-[10px] font-bold text-amber-700">+91 78707 21409</div>
                </div>

                <div className="bg-white rounded-lg p-2.5 flex items-center justify-between border-l-4 border-rose-500">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="bg-[#004d32] text-amber-300 px-1.5 py-0.5 rounded text-[9px] font-mono font-black">
                        SL 18
                      </span>
                      <span className="font-extrabold text-[11px]">AYAAN ALAM</span>
                    </div>
                    <div className="text-[9px] text-slate-500 mt-0.5">Better Food & 5-Day Chicken · Room 806</div>
                  </div>
                  <div className="font-mono text-[10px] font-bold text-rose-700">72097 49240</div>
                </div>
              </div>

              {/* Tagline footer */}
              <div className="text-center pt-2 border-t border-white/20">
                <span className="text-[9px] text-amber-200 font-bold block">
                  📍 Meet Candidates: Room 806, APJ Hostel
                </span>
                <span className="text-[8px] text-emerald-200/80 block mt-0.5">
                  "Tick dekh ke lagaye" — Serial No. 1, 15, and 18
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
