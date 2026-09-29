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

      <main className="flex-1">
        {/* 1. Headline / Hero */}
        <HeroSection onGoToCheckout={handleOpenCheckout} />

        {/* 2. Conexão */}
        <ConnectionSection />

        {/* 3. Pilares (Comida de Verdade, Transição Segura, Lista Semáforo e 100 Receitas) */}
        <PillarsSection />

        {/* 4. Expert (Dra. Fernanda Soares) */}
        <ExpertSection />

        {/* 5. Prova Social (Antes/Depois & Depoimentos Reais) */}
        <SocialProofSection />

        {/* 6. Ancoragem de Valor Refeita & Oferta Direta (R$ 14,90 Pagamento Único) */}
        <AnchoringSection onDirectCheckout={handleOpenCheckout} />

        {/* 7. Garantia Blindada (7 Dias 100% Incondicional) */}
        <GuaranteeSection onGoToCheckout={handleOpenCheckout} />

        {/* 8. FAQ (Perguntas Frequentes) */}
        <FaqSection onGoToCheckout={handleOpenCheckout} />
      </main>

      {/* 9. Rodapé */}
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
