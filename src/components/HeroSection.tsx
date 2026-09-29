import React from 'react';
import { Check, Sparkles, Shield, Heart, Star, ArrowDown, Lock, Zap } from 'lucide-react';
import { ASSETS, PRICE, ORIGINAL_PRICE } from '../constants';

interface HeroSectionProps {
  onGoToCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGoToCheckout }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-14 lg:pt-10 lg:pb-20 bg-gradient-to-b from-amber-50/70 via-stone-50 to-[#faf8f5]">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Anti-slop top badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 mb-4 text-center">
          <span className="flex items-center gap-1.5 bg-emerald-100/90 text-emerald-900 px-3.5 py-1 rounded-full border border-emerald-300/70 shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            Método Prático Desenvolvido por Veterinária
          </span>
          <span className="hidden sm:inline text-stone-400">·</span>
          <span className="text-stone-600 font-medium flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            +4.700 cães livres de coceiras crônicas
          </span>
        </div>

        {/* 1. Primary Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-stone-900 tracking-tight leading-[1.14] mb-5">
            Seu filho peludo não deixa ninguém dormir de tanto se{' '}
            <span className="relative inline-block text-orange-600 font-black">
              coçar e se roer?
              <span className="absolute bottom-1 left-0 w-full h-2.5 bg-orange-200/60 -z-10 rounded-sm"></span>
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed font-normal">
            Descubra como a <strong>Alimentação Natural caseira, fácil e barata</strong> acalma as noites, hidrata o estômago, cicatriza a pele e devolve a energia do seu cão — <strong>economizando centenas de reais</strong> em remédios e rações ressecadas.
          </p>
        </div>

        {/* Hero Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-stone-200/70 border border-stone-200/80">
          
          {/* Left: Product & Food Visual */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-stone-100 group">
              <img
                src={ASSETS.heroFood}
                alt="Comida natural saudável para cães sendo preparada na panela"
                className="w-full h-64 sm:h-72 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent flex flex-col justify-end p-4 text-white">
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Comida de Verdade</span>
                <p className="text-sm sm:text-base font-bold leading-snug">
                  Carne magra, legumes frescos e nutrientes que hidratam e sossegam o estômago
                </p>
              </div>
            </div>

            {/* Overlapping Guide Tag Badge */}
            <div className="mt-4 w-full flex items-center justify-between p-3.5 bg-amber-50 rounded-xl border border-amber-200/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                  100
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 leading-tight">100 Receitas Cozidas & Cruas</p>
                  <p className="text-[11px] text-stone-600">Simples, baratas e aprovadas por veterinária</p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md">
                Completo
              </span>
            </div>
          </div>

          {/* Right Column: Direct Sales Conversion Box */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              MÉTODO NUTRIÇÃO CASEIRA ANTI-ALERGIA
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight leading-snug mb-3">
              Adeus Alergia Canina: o guia definitivo para acabar com as coceiras do seu cão
            </h2>

            <p className="text-sm sm:text-base text-stone-600 mb-5 leading-relaxed">
              Tenha em mãos o método completo da <strong>Dra. Fernanda Soares</strong> com comida caseira anti-inflamatória, 100 receitas fáceis e seguras, lista semáforo dos alimentos e calculadora automática de dosagem.
            </p>

            {/* Benefit Checkmarks */}
            <ul className="space-y-2.5 mb-6 text-sm text-stone-700">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span><strong>Noites de sono tranquilas:</strong> alívio rápido das coceiras e lambedura compulsiva das patas</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span><strong>Comida Caseira Anti-inflamatória:</strong> transição segura em 4 fases sem diarreia</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span><strong>Calculadora de Gramas:</strong> dosagem exata diária pelo peso e rotina do pet</span>
              </li>
            </ul>

            {/* Price Preview & Direct CTA Button */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-xs text-stone-400 line-through">De R$ {ORIGINAL_PRICE}</span>
                <span className="text-xs font-bold text-emerald-700 uppercase">Por apenas</span>
                <span className="text-2xl font-black text-emerald-600">R$ {PRICE}</span>
                <span className="text-[11px] text-stone-500 font-medium">(Pagamento único)</span>
              </div>

              <button
                onClick={onGoToCheckout}
                className="w-full group bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-base sm:text-lg py-4 px-6 rounded-2xl shadow-lg shadow-emerald-700/25 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 fill-white text-emerald-600" />
                </div>
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-wider font-semibold opacity-90">Liberação Imediata</span>
                  <span className="block font-black text-base sm:text-lg leading-tight">QUERO O GUIA COMPLETO AGORA</span>
                </div>
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-stone-500 pt-1">
                <span className="flex items-center gap-1 font-medium">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  Compra 100% Segura
                </span>
                <span>·</span>
                <span className="font-medium text-emerald-800">
                  Garantia Incondicional de 7 Dias
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
          <div className="p-3 bg-white/80 rounded-xl border border-stone-200/60 shadow-xs">
            <p className="text-xl sm:text-2xl font-black text-emerald-700">100%</p>
            <p className="text-xs text-stone-600 font-medium">Ingredientes Seguros de Mercado</p>
          </div>
          <div className="p-3 bg-white/80 rounded-xl border border-stone-200/60 shadow-xs">
            <p className="text-xl sm:text-2xl font-black text-amber-600">R$ {PRICE}</p>
            <p className="text-xs text-stone-600 font-medium">Valor Promocional Único</p>
          </div>
          <div className="p-3 bg-white/80 rounded-xl border border-stone-200/60 shadow-xs">
            <p className="text-xl sm:text-2xl font-black text-stone-900">4 Fases</p>
            <p className="text-xs text-stone-600 font-medium">Transição Segura Sem Diarreia</p>
          </div>
          <div className="p-3 bg-white/80 rounded-xl border border-stone-200/60 shadow-xs">
            <p className="text-xl sm:text-2xl font-black text-emerald-800">+100</p>
            <p className="text-xs text-stone-600 font-medium">Receitas Cozidas & Cruas</p>
          </div>
        </div>

      </div>
    </section>
  );
};
