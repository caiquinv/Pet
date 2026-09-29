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

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Barra de Aviso Superior */}
      <HeaderAlert onGoToCheckout={handleOpenCheckout} />

      <main className="flex-1">
        {/* 1. Título Principal / Hero */}
        <HeroSection onGoToCheckout={handleOpenCheckout} />

        {/* 2. Conexão e Contexto */}
        <ConnectionSection />

        {/* 3. Os 4 Pilares da Nutrição Caseira */}
        <PillarsSection />

        {/* 4. Especialista Responsável (Dra. Sofia Martins) */}
        <ExpertSection />

        {/* 5. Testemunhos e Casos Práticos */}
        <SocialProofSection />

        {/* 6. Proposta de Valor e Apresentação da Oferta (14,90 €) */}
        <AnchoringSection onDirectCheckout={handleOpenCheckout} />

        {/* 7. Garantia de Satisfação de 7 Dias */}
        <GuaranteeSection onGoToCheckout={handleOpenCheckout} />

        {/* 8. Perguntas Frequentes */}
        <FaqSection onGoToCheckout={handleOpenCheckout} />
      </main>

      {/* 9. Rodapé com Informações de Segurança e Isenção de Responsabilidade */}
      <FooterSection />

      {/* Janela de Pagamento e Envio Imediato */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Barra de Ação Fixa Inferior */}
      <StickyBottomCta onGoToCheckout={handleOpenCheckout} />

      {/* Notificação Discreta de Atividade Recente */}
      <RecentBuyerToast />
    </div>
  );
}
