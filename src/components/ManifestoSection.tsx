import React from 'react';
import { Utensils, Drumstick, Sparkles, MessageSquareText, CheckCircle } from 'lucide-react';
import diningImg from '@/src/assets/images/hostel_mess_dining_1791577728079.jpg';
import { MANIFESTO_PILLARS } from '../data/campaignData';

export const ManifestoSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="w-5 h-5" />;
      case 'Drumstick':
        return <Drumstick className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <MessageSquareText className="w-5 h-5" />;
    }
  };

  return (
    <section id="manifesto" className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-2">
            The 4-Point Action Manifesto
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            Our Plan For A Better Mess
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Concrete, achievable goals designed to protect your health, your taste buds, and your rights
            as university hostel residents.
          </p>
        </div>

        {/* 2-Column Split: Image Showcase & Manifesto List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Campus Mess Vision Graphic */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-stone-900 text-white rounded-2xl overflow-hidden shadow-md">
            <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
              <img
                src={diningImg}
                alt="Clean APJ Hostel Mess Vision"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-300">
                  Standard of Excellence
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Fresh, Nutritious & Respectful Mess Living
                </h3>
              </div>
            </div>

            <div className="p-6">
              <h4 className="text-base font-bold text-amber-300 mb-2">
                "No Student Leaves The Mess Unsatisfied"
              </h4>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
                Jamia students come from across the country to study rigorously for degrees, UPSC, GATE, and campus placements.
                Unhealthy or cold food causes illness, fatigue, and distress. We treat mess food as vital fuel for your academic future.
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-stone-800 text-xs text-stone-400">
                <span>✓ Tested RO Water</span>
                <span>·</span>
                <span>✓ Hot Tawa Roti</span>
                <span>·</span>
                <span>✓ 5-Day Chicken</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Numbered Editorial Manifesto Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MANIFESTO_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-stone-50 rounded-2xl p-6 border border-stone-200/90 hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded">
                      {pillar.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white border border-stone-200 text-emerald-800 flex items-center justify-center shadow-2xs">
                      {getIcon(pillar.icon)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 tracking-tight mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-700 mb-3">
                    {pillar.subtitle}
                  </div>
                  <p className="text-stone-600 text-xs leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-stone-200/70">
                  {pillar.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
