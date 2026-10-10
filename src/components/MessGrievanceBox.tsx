import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle, PhoneCall, AlertCircle } from 'lucide-react';
import { CANDIDATES } from '../data/campaignData';

export const MessGrievanceBox: React.FC = () => {
  const [targetCandidate, setTargetCandidate] = useState<string>('all');
  const [residentRoom, setResidentRoom] = useState<string>('');
  const [issueType, setIssueType] = useState<string>('Food Taste / Cooking Quality');
  const [issueDetails, setIssueDetails] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!issueDetails.trim()) return;

    // Determine phone number
    let destinationPhone = '919128914453'; // Kaif as default coordinator
    let recipientName = 'Food Committee Panel (Kaif, Ayaan & Najmul)';

    if (targetCandidate === 'ayaan') {
      destinationPhone = '917209749240';
      recipientName = 'Ayaan Alam (Food Quality)';
    } else if (targetCandidate === 'najmul') {
      destinationPhone = '917870721409';
      recipientName = 'Najmul Hoda (Hygiene & Cleanliness)';
    } else if (targetCandidate === 'kaif') {
      destinationPhone = '919128914453';
      recipientName = 'Kaif Ahmad Khan (Grievances & Redressal)';
    }

    const message = `Salam ${recipientName}!
I am an APJ Hostel resident ${residentRoom ? `from Room ${residentRoom}` : ''}.
Issue Category: ${issueType}
Details: ${issueDetails}

Looking forward to your action and support in the Food Committee!`;

    const whatsappUrl = `https://wa.me/${destinationPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="grievance" className="py-16 bg-[#faf9f5] border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-emerald-700" />
            <span>24/7 Redressal System</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            Report A Mess Issue Directly To The Candidates
          </h2>
          <p className="text-stone-600 text-sm max-w-xl mx-auto">
            You don’t have to wait until election day. Tell us what is bothering you in the APJ Hostel mess right now, and see how our panel acts immediately.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Route Complaint To:
                </label>
                <select
                  value={targetCandidate}
                  onChange={(e) => setTargetCandidate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option value="all">★ Entire Panel (Kaif, Ayaan & Najmul)</option>
                  <option value="kaif">Kaif Ahmad Khan (Helpline & Representation - 9128914453)</option>
                  <option value="ayaan">Ayaan Alam (Food Quality & Menu)</option>
                  <option value="najmul">Najmul Hoda (Hygiene & Kitchen)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Your Room / Floor (Optional)
                </label>
                <input
                  type="text"
                  value={residentRoom}
                  onChange={(e) => setResidentRoom(e.target.value)}
                  placeholder="e.g. Room 312, 3rd Floor"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 placeholder:text-stone-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                Issue Category:
              </label>
              <select
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                <option value="Food Taste / Cooking Quality">Food Taste / Cooking Quality</option>
                <option value="Cold Rotis / Inadequate Quantity">Cold Rotis / Inadequate Quantity</option>
                <option value="Kitchen Hygiene / Utensil Cleanliness">Kitchen Hygiene / Utensil Cleanliness</option>
                <option value="RO Drinking Water Filter Issue">RO Drinking Water Filter Issue</option>
                <option value="Chicken Dinner Quality / Quantity">Chicken Dinner Quality / Quantity</option>
                <option value="Raw Materials / Milk & Dairy Quality">Raw Materials / Milk & Dairy Quality</option>
                <option value="Other Suggestion">Other Suggestion</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                Describe the Problem or Suggestion
              </label>
              <textarea
                rows={3}
                required
                value={issueDetails}
                onChange={(e) => setIssueDetails(e.target.value)}
                placeholder="Explain the issue clearly (e.g., Dinner dal was watery, rotis were served cold, water cooler TDS is high, tray cleaning...)"
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 placeholder:text-stone-400"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Grievance on WhatsApp</span>
              </button>

              <div className="text-xs text-stone-500 text-center sm:text-left">
                Messages are routed instantly to the candidates' verified WhatsApp numbers.
              </div>
            </div>

            {submitted && (
              <div className="p-3 bg-emerald-100 text-emerald-900 rounded-lg text-xs font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-700" />
                <span>Your message has been formatted and opened in WhatsApp!</span>
              </div>
            )}
          </form>

          {/* Direct helpline phone strip */}
          <div className="mt-8 pt-6 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CANDIDATES.map((c) => (
              <a
                key={c.id}
                href={`tel:${c.rawPhone}`}
                className="p-2.5 rounded-lg bg-stone-50 hover:bg-stone-100 border border-stone-200 transition-colors flex items-center gap-2.5 text-xs text-stone-800"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <div className="truncate">
                  <div className="font-bold truncate">{c.displayName}</div>
                  <div className="font-mono text-[11px] text-stone-500">{c.phone}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
