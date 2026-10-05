import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { PRICE, CHECKOUT_URL } from '../constants';

interface StickyBottomCtaProps {
  onGoToCheckout: () => void;
  onDirectCheckout?: () => void;
}

export const StickyBottomCta: React.FC<StickyBottomCtaProps> = ({ onGoToCheckout, onDirectCheckout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-2.5 sm:p-3 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-3">
        
        <div className="hidden sm:block">
          <p className="text-xs font-bold text-stone-900 leading-tight">
            Método Pele Tranquila Canina
          </p>
          <p className="text-[11px] text-emerald-700 font-semibold">
            100 Receitas + Lista Semáforo por apenas {PRICE} (Acesso Imediato)
          </p>
        </div>

        <a
          href={CHECKOUT_URL}
          onClick={() => onDirectCheckout?.()}
          className="w-full sm:w-auto flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-black text-xs sm:text-sm py-3 px-6 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer no-underline transition-transform active:scale-95 text-center"
        >
          <Zap className="w-4 h-4 fill-white text-emerald-600 shrink-0" />
          <span>Quero aceder ao guia completo – 14,90 €</span>
        </a>

        <div className="sm:hidden text-[10px] text-stone-500 font-medium text-center">
          Garantia de 7 dias · MB WAY e cartão · Acesso imediato
        </div>

      </div>
    </div>
  );
};
