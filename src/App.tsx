/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, lazy, Suspense } from 'react';
import { HeaderAlert } from './components/HeaderAlert';
import { HeroSection } from './components/HeroSection';

// Code splitting: seções abaixo da dobra carregadas assincronamente para reduzir JavaScript inicial
const ConnectionSection = lazy(() => import('./components/ConnectionSection').then(m => ({ default: m.ConnectionSection })));
const PillarsSection = lazy(() => import('./components/PillarsSection').then(m => ({ default: m.PillarsSection })));
const ExpertSection = lazy(() => import('./components/ExpertSection').then(m => ({ default: m.ExpertSection })));
const SocialProofSection = lazy(() => import('./components/SocialProofSection').then(m => ({ default: m.SocialProofSection })));
const AnchoringSection = lazy(() => import('./components/AnchoringSection').then(m => ({ default: m.AnchoringSection })));
const GuaranteeSection = lazy(() => import('./components/GuaranteeSection').then(m => ({ default: m.GuaranteeSection })));
const FaqSection = lazy(() => import('./components/FaqSection').then(m => ({ default: m.FaqSection })));
const FooterSection = lazy(() => import('./components/FooterSection').then(m => ({ default: m.FooterSection })));
const CheckoutModal = lazy(() => import('./components/CheckoutModal').then(m => ({ default: m.CheckoutModal })));
const StickyBottomCta = lazy(() => import('./components/StickyBottomCta').then(m => ({ default: m.StickyBottomCta })));
const RecentBuyerToast = lazy(() => import('./components/RecentBuyerToast').then(m => ({ default: m.RecentBuyerToast })));

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
      {/* Barra de Aviso Superior (renderizada imediatamente no primeiro frame) */}
      <HeaderAlert onGoToCheckout={handleScrollToOffer} />

      <main className="flex-1">
        {/* 1. Título Principal / Hero (renderizado imediatamente no primeiro frame para LCP ultrarrápido) */}
        <HeroSection onGoToCheckout={handleScrollToOffer} />

        {/* Componentes abaixo da dobra com code-splitting */}
        <Suspense fallback={null}>
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
        </Suspense>
      </main>

      <Suspense fallback={null}>
        {/* 9. Rodapé com Informações de Segurança e Isenção de Responsabilidade */}
        <FooterSection />

        {/* Janela de Pagamento e Envio Imediato */}
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />

        {/* Barra de Ação Fixa Inferior -> leva até a secção da oferta */}
        <StickyBottomCta onGoToCheckout={handleScrollToOffer} />

        {/* Notificação Discreta de Atividade Recente */}
        <RecentBuyerToast />
      </Suspense>
    </div>
  );
}
