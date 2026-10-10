import React, { useState } from 'react';
import { Check, Flame, Plus, ThumbsUp, BarChart2 } from 'lucide-react';
import { INITIAL_POLL_OPTIONS } from '../data/campaignData';
import { PollOption } from '../types/campaign';

export const MessWishlistPoll: React.FC = () => {
  const [options, setOptions] = useState<PollOption[]>(INITIAL_POLL_OPTIONS);
  const [votedOptionId, setVotedOptionId] = useState<string | null>(null);
  const [customDemand, setCustomDemand] = useState('');
  const [submittedCustom, setSubmittedCustom] = useState(false);

  const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0);

  const handleVote = (id: string) => {
    if (votedOptionId) return; // single vote
    setVotedOptionId(id);
    setOptions((prev) =>
      prev.map((opt) => (opt.id === id ? { ...opt, votes: opt.votes + 1 } : opt))
    );
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customDemand.trim()) return;

    const newOpt: PollOption = {
      id: `custom-${Date.now()}`,
      title: customDemand.trim(),
      category: 'Resident Demand',
      votes: 1
    };

    setOptions((prev) => [newOpt, ...prev]);
    setCustomDemand('');
    setSubmittedCustom(true);
    setVotedOptionId(newOpt.id);
  };

  return (
    <section id="mess-poll" className="py-16 bg-[#f4f3ed] border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
            <Flame className="w-4 h-4 text-amber-600" />
            <span>Interactive Resident Voice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            What Should Kaif, Ayaan & Najmul Fix First?
          </h2>
          <p className="text-stone-600 text-sm max-w-xl mx-auto">
            Cast your vote below. This helps the panel immediately prioritize which demands to present to the Warden and Mess Incharge on Day 1.
          </p>
        </div>

        {/* Polling Card */}
        <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-500 uppercase tracking-wider">
              <BarChart2 className="w-4 h-4 text-emerald-700" />
              <span>APJ Hostel Live Mess Poll</span>
            </div>
            <div className="text-xs font-semibold text-stone-500">
              Total Votes Cast:{' '}
              <span className="font-mono font-bold text-stone-900 tabular-nums">
                {totalVotes}
              </span>
            </div>
          </div>

          {/* Poll Options */}
          <div className="space-y-3.5 mb-8">
            {options.map((opt) => {
              const percentage = Math.round((opt.votes / totalVotes) * 100) || 0;
              const isSelected = votedOptionId === opt.id;

              return (
                <div
                  key={opt.id}
                  onClick={() => handleVote(opt.id)}
                  className={`group relative overflow-hidden rounded-xl border p-4 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-emerald-600 bg-emerald-50/50 shadow-xs'
                      : 'border-stone-200 hover:border-emerald-300 hover:bg-stone-50/50'
                  }`}
                >
                  {/* Visual Percentage Progress Fill */}
                  <div
                    className={`absolute inset-y-0 left-0 transition-all duration-500 opacity-20 pointer-events-none ${
                      isSelected ? 'bg-emerald-500' : 'bg-emerald-200'
                    }`}
                    style={{ width: `${percentage}%` }}
                  />

                  <div className="relative flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border text-xs transition-colors ${
                          isSelected
                            ? 'border-emerald-600 bg-emerald-600 text-white'
                            : 'border-stone-300 group-hover:border-emerald-500 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-stone-900 block">
                          {opt.title}
                        </span>
                        <span className="text-xs text-stone-500 font-medium">
                          Category: {opt.category}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="font-mono text-sm font-bold text-stone-900 tabular-nums">
                        {percentage}%
                      </div>
                      <div className="text-[11px] text-stone-500 tabular-nums">
                        {opt.votes} votes
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {votedOptionId && (
            <div className="mb-6 p-3 rounded-lg bg-emerald-100/70 text-emerald-900 text-xs font-semibold flex items-center gap-2">
              <ThumbsUp className="w-4 h-4 text-emerald-700" />
              <span>Thank you for voting! Your priority has been recorded in the campaign agenda.</span>
            </div>
          )}

          {/* Add custom demand input */}
          <form onSubmit={handleAddCustom} className="pt-4 border-t border-stone-100">
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
              Have another mess improvement suggestion?
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={customDemand}
                onChange={(e) => setCustomDemand(e.target.value)}
                placeholder="e.g., Sunday special feast, fresh curd during lunch every day..."
                className="flex-1 px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent bg-stone-50"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Wishlist</span>
              </button>
            </div>
            {submittedCustom && (
              <p className="text-xs text-emerald-700 font-medium mt-1.5">
                ✓ Added to live priorities!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
