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

  // Smooth scroll to the single offer/checkout box on the page
  const handleScrollToOffer = () => {
    const offerElement = document.getElementById('checkout-box') || document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Direct checkout opens the Hotmart checkout page
  const handleOpenCheckout = () => {
    // If needed can track event or analytics
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        value: 14.90,
        currency: 'EUR'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Barra de Aviso Superior -> leva até a secção da oferta */}
      <HeaderAlert onGoToCheckout={handleScrollToOffer} />

      <main className="flex-1">
        {/* 1. Título Principal / Hero -> botão verde leva até a secção da oferta */}
        <HeroSection onGoToCheckout={handleScrollToOffer} />

        {/* 2. Conexão e Contexto */}
        <ConnectionSection />

        {/* 3. Os 4 Pilares da Nutrição Caseira */}
        <PillarsSection />

        {/* 4. Especialista Responsável (Dra. Sofia Martins) */}
        <ExpertSection />

        {/* 5. Testemunhos e Casos Práticos */}
        <SocialProofSection />

        {/* 6. Proposta de Valor e Apresentação da Oferta (ÚNICO BOTÃO QUE ABRE O CHECKOUT) */}
        <AnchoringSection onDirectCheckout={handleOpenCheckout} />

        {/* 7. Garantia de Satisfação de 7 Dias -> leva até a secção da oferta */}
        <GuaranteeSection onGoToCheckout={handleScrollToOffer} />

        {/* 8. Perguntas Frequentes -> leva até a secção da oferta */}
        <FaqSection onGoToCheckout={handleScrollToOffer} />
      </main>

      {/* 9. Rodapé com Informações de Segurança e Isenção de Responsabilidade */}
      <FooterSection />

      {/* Janela de Pagamento e Envio Imediato (Acessada exclusivamente pelo botão do checkout-box) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Barra de Ação Fixa Inferior -> leva até a secção da oferta */}
      <StickyBottomCta onGoToCheckout={handleScrollToOffer} />

      {/* Notificação Discreta de Atividade Recente */}
      <RecentBuyerToast />
    </div>
  );
}
