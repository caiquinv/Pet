/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, lazy, Suspense } from 'react';
import { HeaderAlert } from './components/HeaderAlert';
import { HeroSection } from './components/HeroSection';
import { trackInitiateCheckout, trackViewContent } from './utils/tracker';

// Code splitting: seções abaixo da dobra carregadas assincronamente para reduzir JavaScript inicial
const ConnectionSection = lazy(() => import('./components/ConnectionSection').then(m => ({ default: m.ConnectionSection })));
const PillarsSection = lazy(() => import('./components/PillarsSection').then(m => ({ default: m.PillarsSection })));
const ExpertSection = lazy(() => import('./components/ExpertSection').then(m => ({ default: m.ExpertSection })));
const SocialProofSection = lazy(() => import('./components/SocialProofSection').then(m => ({ default: m.SocialProofSection })));
const AnchoringSection = lazy(() => import('./components/AnchoringSection').then(m => ({ default: m.AnchoringSection })));
const GuaranteeSection = lazy(() => import('./components/GuaranteeSection').then(m => ({ default: m.GuaranteeSection })));
const FaqSection = lazy(() => import('./components/FaqSection').then(m => ({ default: m.FaqSection })));
const FooterSection = lazy(() => import('./components/FooterSection').then(m => ({ default: m.FooterSection })));
const StickyBottomCta = lazy(() => import('./components/StickyBottomCta').then(m => ({ default: m.StickyBottomCta })));

export default function App() {
  // Dispara evento ViewContent garantindo que o tracker esteja inicializado
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        trackViewContent();
      } catch (err) {
        console.warn('[Tracker] ViewContent capturado:', err);
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll até a secção de oferta
  const handleScrollToOffer = () => {
    const offerElement = document.getElementById('checkout-box') || document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Dispara exclusivamente InitiateCheckout dentro de try/catch, sem bloquear a navegação
  const handleBuyClick = () => {
    try {
      trackInitiateCheckout();
    } catch {
      // Silencioso - navegação nunca é interrompida
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Barra de Aviso Superior (renderizada imediatamente no primeiro frame) */}
      <HeaderAlert onGoToCheckout={handleScrollToOffer} />

      <main className="flex-1">
        {/* 1. Título Principal / Hero (renderizado imediatamente no primeiro frame para LCP ultrarrápido) */}
        <HeroSection onGoToCheckout={handleScrollToOffer} onDirectCheckout={handleBuyClick} />

        {/* Componentes abaixo da dobra com code-splitting */}
        <Suspense fallback={null}>
          {/* 2. Conexão e Contexto */}
          <ConnectionSection />

          {/* 3. Os 4 Pilares da Nutrição Caseira */}
          <PillarsSection />

          {/* 4. Especialista Responsável (Dra. Sofia Martins) */}
          <ExpertSection />

          {/* 5. Educação Nutricional e Benefícios Comprovados */}
          <SocialProofSection />

          {/* 6. Proposta de Valor e Apresentação da Oferta */}
          <AnchoringSection onDirectCheckout={handleBuyClick} />

          {/* 7. Garantia de Satisfação de 7 Dias -> leva até a secção da oferta */}
          <GuaranteeSection onGoToCheckout={handleBuyClick} />

          {/* 8. Perguntas Frequentes -> leva até a secção da oferta */}
          <FaqSection onGoToCheckout={handleBuyClick} />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        {/* 9. Rodapé com Informações de Segurança e Isenção de Responsabilidade */}
        <FooterSection />

        {/* Barra de Ação Fixa Inferior */}
        <StickyBottomCta onGoToCheckout={handleScrollToOffer} onDirectCheckout={handleBuyClick} />
      </Suspense>
    </div>
  );
}
