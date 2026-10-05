import React from 'react';
import { Flame, Zap } from 'lucide-react';
import { PRICE, ORIGINAL_PRICE, CHECKOUT_URL } from '../constants';

interface HeaderAlertProps {
  onGoToCheckout: () => void;
}

export const HeaderAlert: React.FC<HeaderAlertProps> = ({ onGoToCheckout }) => {
  return (
    <aside aria-label="Aviso de condição especial" className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 text-white text-xs py-2 px-3 shadow-sm border-b border-emerald-600/30">
      <div className="max-w-6xl mx-auto flex items-center justify-center md:justify-between gap-2">
        
        {/* Celular / Mobile: texto em uma linha, sem ser cortado, preço visível, botão escondido */}
        <div className="md:hidden flex items-center justify-center gap-1.5 text-xs text-white font-semibold whitespace-nowrap">
          <span className="flex items-center justify-center w-4 h-4 rounded-full bg-amber-400 text-stone-900 text-[10px] font-bold shrink-0">
            <Flame className="w-2.5 h-2.5 text-orange-600 fill-orange-600" />
          </span>
          <span>
            Guia completo por <strong className="text-amber-300 font-extrabold">{PRICE}</strong> · Acesso imediato
          </span>
        </div>

        {/* Desktop: barra mantida como estava com o botão de garantia */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-400 text-stone-900 text-xs font-bold shrink-0 animate-pulse">
              <Flame className="w-3.5 h-3.5 text-orange-600 fill-orange-600" />
            </span>
            <p className="leading-tight text-xs sm:text-sm font-medium">
              <strong className="text-amber-300 font-semibold">Método de Nutrição Caseira:</strong> Apoie o alívio da comichão do seu cão de <span className="line-through opacity-80">{ORIGINAL_PRICE}</span> por apenas <strong className="text-amber-300 font-black">{PRICE}</strong> (Acesso Imediato sem Mensalidades!)
            </p>
          </div>

          <a
            href={CHECKOUT_URL}
            onClick={() => onGoToCheckout()}
            className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black px-3.5 py-1 rounded-full text-xs shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0 no-underline"
          >
            <Zap className="w-3.5 h-3.5 fill-stone-950" />
            Garantir por {PRICE}
          </a>
        </div>

      </div>
    </aside>
  );
};
