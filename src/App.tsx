/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeaderAlert } from './components/HeaderAlert';
import { HeroSection } from './components/HeroSection';
import { ConnectionSection } from './components/ConnectionSection';
import { PillarsSection } from './components/PillarsSection';
import { ExpertSection } from './components/ExpertSection';
import { SocialProofSection } from './components/SocialProofSection';
import { BonusSection } from './components/BonusSection';
import { AnchoringSection } from './components/AnchoringSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';
import { CheckoutModal } from './components/CheckoutModal';
import { StickyBottomCta } from './components/StickyBottomCta';
import { RecentBuyerToast } from './components/RecentBuyerToast';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleScrollToOffer = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsCheckoutOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Notification Announcement */}
      <HeaderAlert onGoToCheckout={handleOpenCheckout} />

      {/* 
        MANDATORY ORDER OF SECTIONS AS REQUESTED:
        1. headline/hero
        2. conexão
        3. pilares
        4. expert
        5. prova social
        6. bonus
        7. ancoragem
        8. garantia
        9. FAQ
        10. rodapé
      */}
      <main className="flex-1">
        {/* 1. Headline / Hero */}
        <HeroSection onGoToCheckout={handleOpenCheckout} />

        {/* 2. Conexão */}
        <ConnectionSection />

        {/* 3. Pilares */}
        <PillarsSection />

        {/* 4. Expert */}
        <ExpertSection />

        {/* 5. Prova Social */}
        <SocialProofSection />

        {/* 6. Bônus (com Calculadora de Gramas Interativa Funcional) */}
        <BonusSection onGoToCheckout={handleOpenCheckout} />

        {/* 7. Ancoragem & Oferta Direta (R$ 14,90 com Liberação Imediata) */}
        <AnchoringSection onDirectCheckout={handleOpenCheckout} />

        {/* 8. Garantia Blindada (7 Dias 100% Incondicional) */}
        <GuaranteeSection onGoToCheckout={handleOpenCheckout} />

        {/* 9. FAQ (Perguntas Frequentes) */}
        <FaqSection onGoToCheckout={handleOpenCheckout} />
      </main>

      {/* 10. Rodapé */}
      <FooterSection />

      {/* Direct Checkout Modal (Pix & Cartão com Liberação Imediata) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Mobile Sticky CTA & Subtle Organic Proof */}
      <StickyBottomCta onGoToCheckout={handleOpenCheckout} />
      <RecentBuyerToast />
    </div>
  );
}
