import React, { useState, useEffect } from 'react';
import { Zap, ShieldCheck, Lock } from 'lucide-react';
import { PRICE } from '../constants';

interface StickyBottomCtaProps {
  onGoToCheckout: () => void;
}

export const StickyBottomCta: React.FC<StickyBottomCtaProps> = ({ onGoToCheckout }) => {
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
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        
        <div className="hidden sm:block">
          <p className="text-xs font-bold text-stone-900 leading-tight">
            Guia Pet Comilão + 100 Receitas + Calculadora
          </p>
          <p className="text-[11px] text-emerald-700 font-semibold">
            Oferta Especial por apenas R$ {PRICE} (Acesso Vitalício Imediato)
          </p>
        </div>

        <button
          onClick={onGoToCheckout}
          className="w-full sm:w-auto flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-black text-xs sm:text-sm py-3 px-6 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
        >
          <Zap className="w-4 h-4 fill-white text-emerald-600 shrink-0" />
          <span>GARANTIR ACESSO IMEDIATO POR R$ {PRICE}</span>
        </button>

      </div>
    </div>
  );
};
