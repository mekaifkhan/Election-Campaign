/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CandidatesSection } from './components/CandidatesSection';
import { ManifestoSection } from './components/ManifestoSection';
import { MessWishlistPoll } from './components/MessWishlistPoll';
import { DigitalPosterGenerator } from './components/DigitalPosterGenerator';
import { MessGrievanceBox } from './components/MessGrievanceBox';
import { VotingGuide } from './components/VotingGuide';
import { WhatsAppShareModal } from './components/WhatsAppShareModal';
import { PrintablePosterModal } from './components/PrintablePosterModal';
import { Footer } from './components/Footer';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { CANDIDATES } from './data/campaignData';

export default function App() {
  const [pledged, setPledged] = useState<boolean>(() => {
    return localStorage.getItem('apj_vote_pledged') === 'true';
  });
  const [pledgeCount, setPledgeCount] = useState<number>(384);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePledge = () => {
    if (!pledged) {
      setPledged(true);
      setPledgeCount((prev) => prev + 1);
      localStorage.setItem('apj_vote_pledged', 'true');

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#004d32', '#e5a93c', '#ffffff', '#22c55e']
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbfa] text-stone-900 selection:bg-amber-300 selection:text-emerald-950">
      {/* Navigation Header */}
      <Header onPledgeClick={handlePledge} pledged={pledged} />

      {/* Main Campaign Content */}
      <main className="flex-1">
        {/* Hero Banner with Candidates Strip */}
        <Hero
          pledged={pledged}
          pledgeCount={pledgeCount}
          onPledge={handlePledge}
          onOpenShareModal={() => setIsShareModalOpen(true)}
          onOpenPosterModal={() => setIsPosterModalOpen(true)}
        />

        {/* The 3 Candidates Detail Section with Direct Call & WhatsApp */}
        <CandidatesSection />

        {/* 4-Point Action Manifesto & Dining Vision */}
        <ManifestoSection />

        {/* Interactive Student Mess Wishlist Poll */}
        <MessWishlistPoll />

        {/* Digital Poster & Endorsement Card Studio */}
        <DigitalPosterGenerator />

        {/* Direct Mess Grievance Box & Candidate Hotline */}
        <MessGrievanceBox />

        {/* Polling Venue & Voting Guide */}
        <VotingGuide />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <WhatsAppShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      <PrintablePosterModal
        isOpen={isPosterModalOpen}
        onClose={() => setIsPosterModalOpen(false)}
      />

      {/* Subtle Floating Candidate Hotline Bar (Desktop & Mobile) */}
      <div className="no-print fixed bottom-4 right-4 z-40 flex items-center gap-2">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={() => setIsShareModalOpen(true)}
          className="px-3.5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold text-xs shadow-lg flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer"
          title="Share campaign on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Forward Campaign</span>
        </button>
      </div>
    </div>
  );
}
