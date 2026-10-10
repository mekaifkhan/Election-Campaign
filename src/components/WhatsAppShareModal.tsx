import React, { useState } from 'react';
import { X, Copy, Check, MessageCircle, Share2 } from 'lucide-react';
import { BROADCAST_TEMPLATES } from '../data/campaignData';

interface WhatsAppShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppShareModal: React.FC<WhatsAppShareModalProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string>(BROADCAST_TEMPLATES[0].id);

  if (!isOpen) return null;

  const currentTemplate =
    BROADCAST_TEMPLATES.find((t) => t.id === selectedTemplate) || BROADCAST_TEMPLATES[0];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleShare = (text: string) => {
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-[#004d32] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <MessageCircle className="w-5 h-5 text-amber-300" />
            <h3 className="font-bold text-base">WhatsApp Broadcast Messages</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-xs text-stone-600 mb-4">
            Select a ready-to-share message below and forward it directly to your APJ Hostel wing, floor, or course WhatsApp groups:
          </p>

          {/* Template Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg mb-4">
            {BROADCAST_TEMPLATES.map((tmpl) => (
              <button
                key={tmpl.id}
                onClick={() => setSelectedTemplate(tmpl.id)}
                className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-md transition-all truncate cursor-pointer ${
                  selectedTemplate === tmpl.id
                    ? 'bg-white text-emerald-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {tmpl.title}
              </button>
            ))}
          </div>

          {/* Preview Box */}
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 mb-6">
            <pre className="text-xs text-stone-800 whitespace-pre-wrap font-sans leading-relaxed max-h-56 overflow-y-auto">
              {currentTemplate.text}
            </pre>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleCopy(currentTemplate.id, currentTemplate.text)}
              className="py-2.5 px-4 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copiedId === currentTemplate.id ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Message</span>
                </>
              )}
            </button>

            <button
              onClick={() => handleShare(currentTemplate.text)}
              className="py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Forward to WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
