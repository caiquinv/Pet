import React from 'react';
import { Check, Sparkles, Heart, Lock, Zap, ShieldCheck } from 'lucide-react';
import { ASSETS, PRICE, ORIGINAL_PRICE, CHECKOUT_URL } from '../constants';

interface HeroSectionProps {
  onGoToCheckout: () => void;
  onDirectCheckout?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGoToCheckout, onDirectCheckout }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-14 lg:pt-10 lg:pb-20 bg-gradient-to-b from-amber-50/70 via-stone-50 to-[#faf8f5]">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top badge sem promessas falsas */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 mb-4 text-center">
          <span className="flex items-center gap-1.5 bg-emerald-100/90 text-emerald-900 px-3.5 py-1.5 rounded-full border border-emerald-300/70 shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            Método Prático Orientado por Médica Veterinária
          </span>
          <span className="hidden sm:inline text-stone-400">·</span>
          <span className="text-stone-600 font-medium text-xs sm:text-sm">
            Guia Digital em PDF · Acesso Imediato
          </span>
        </div>

        {/* 1. Primary Headline & Clear Value Proposition */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-stone-900 tracking-tight leading-[1.15] mb-3">
            O seu cão passa noites inteiras a{' '}
            <span className="relative inline-block text-orange-600 font-black">
              coçar-se e a morder as patas?
              <span className="absolute bottom-1 left-0 w-full h-2.5 bg-orange-200/60 -z-10 rounded-sm"></span>
            </span>
          </h1>

          {/* Sequência lógica: Problema -> Solução -> Para quem é -> O que recebe */}
          <div className="max-w-2xl mx-auto text-stone-700 text-sm sm:text-base leading-relaxed space-y-2 mb-6">
            <p>
              O <strong>Método Pele Tranquila Canina</strong> é o guia prático em formato digital para tutores que querem compreender a sensibilidade da pele do seu cão e organizar uma rotina alimentar fresca, equilibrada e económica.
            </p>
            <p className="text-xs sm:text-sm text-stone-600 font-medium">
              Inclui <strong className="text-emerald-800 font-bold">100 receitas para cães</strong> (50 cozinhadas e 50 cruas), a <strong>Lista Semáforo</strong> de alimentos e o protocolo de transição segura para o dia a dia.
            </p>
          </div>

          {/* Caixa de Ação Rápida: Preço claro + CTA forte */}
          <div className="w-full max-w-lg mx-auto space-y-2.5">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-stone-700 font-semibold mb-1">
              <span>Acesso digital completo por apenas</span>
              <span className="text-emerald-700 font-black text-lg sm:text-xl">{PRICE}</span>
              <span className="text-stone-500 font-normal">(pagamento único)</span>
            </div>

            <a
              href={CHECKOUT_URL}
              onClick={() => onDirectCheckout?.()}
              className="w-full group bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-xl shadow-emerald-700/30 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 text-center no-underline cursor-pointer"
            >
              <Zap className="w-5 h-5 fill-white text-emerald-600 shrink-0" />
              <span>QUERO O MÉTODO PELE TRANQUILA – {PRICE}</span>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-stone-600 font-semibold pt-1">
              <span>Garantia de 7 dias</span>
              <span>·</span>
              <span>MB WAY e cartão</span>
              <span>·</span>
              <span>Acesso imediato no telemóvel</span>
            </div>

            <p className="text-[11px] text-stone-500 text-center">
              *Guia digital de apoio informativo e nutricional. Não substitui o acompanhamento veterinário.
            </p>
          </div>
        </div>

        {/* Hero Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-stone-200/70 border border-stone-200/80">
          
          {/* Left: Product & Food Visual */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-stone-100 group">
              <img
                src="/hero-dog-food.webp"
                alt="Alimentação natural e saudável para cães preparada com ingredientes frescos"
                width={900}
                height={672}
                fetchPriority="high"
                decoding="async"
                className="w-full h-64 sm:h-72 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent flex flex-col justify-end p-4 text-white">
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Ingredientes de Supermercado</span>
                <p className="text-sm sm:text-base font-bold leading-snug">
                  Carnes magras, legumes frescos e nutrientes que hidratam e apoiam o aparelho digestivo
                </p>
              </div>
            </div>

            {/* Overlapping Guide Tag Badge: Total 100 receitas bem evidente */}
            <div className="mt-4 w-full flex items-center justify-between p-3.5 bg-amber-50 rounded-xl border border-amber-200/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                  100
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 leading-tight">100 RECEITAS PARA CÃES</p>
                  <p className="text-[11px] text-stone-600">50 opções cozinhadas + 50 opções cruas equilibradas</p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md shrink-0">
                Guia em PDF
              </span>
            </div>
          </div>

          {/* Right Column: Direct Conversion Box */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              CONTEÚDO DO GUIA DIGITAL
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight leading-snug mb-3">
              O que recebe no seu acesso ao Método Pele Tranquila:
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 mb-5 leading-relaxed">
              Desenvolvido pela Médica Veterinária <strong>Dra. Sofia Martins</strong> para ajudar tutores a cuidar da pele e da alimentação do seu cão com praticidade.
            </p>

            {/* Benefit Checkmarks: Tangível e Claro */}
            <ul className="space-y-3 mb-6 text-xs sm:text-sm text-stone-700">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span><strong>📘 Guia Digital Completo:</strong> O passo a passo para compreender a rotina e os cuidados com a pele</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span><strong>🍲 50 Receitas Cozinhadas:</strong> Fáceis, nutritivas e preparadas com alimentos simples</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span><strong>🥩 50 Receitas Cruas:</strong> Formulações naturais com orientações seguras</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span><strong>📋 Lista Semáforo:</strong> O que oferecer, o que pede cautela e o que nunca dar</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span><strong>🔄 Protocolo em 4 Fases:</strong> Transição suave que protege a saúde digestiva</span>
              </li>
            </ul>

            {/* Price Preview & Direct CTA Button */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-xs text-stone-500 line-through">De {ORIGINAL_PRICE}</span>
                <span className="text-xs font-bold text-emerald-700 uppercase">Por apenas</span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-600">{PRICE}</span>
                <span className="text-xs text-stone-500 font-medium">(Pagamento único)</span>
              </div>

              <a
                href={CHECKOUT_URL}
                onClick={() => onDirectCheckout?.()}
                className="w-full group bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-base sm:text-lg py-4 px-6 rounded-2xl shadow-lg shadow-emerald-700/25 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 no-underline cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 fill-white text-emerald-600" />
                </div>
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-wider font-semibold opacity-90">Acesso Imediato</span>
                  <span className="block font-black text-base sm:text-lg leading-tight">QUERO O MÉTODO PELE TRANQUILA</span>
                </div>
              </a>

              <div className="text-center text-xs text-stone-600 font-semibold pt-1">
                Garantia de 7 dias · MB WAY e cartão · Acesso imediato no telemóvel
              </div>
              <p className="text-[11px] text-stone-500 text-center">
                *Não substitui o acompanhamento veterinário
              </p>
            </div>

          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
          <div className="p-3 bg-white/80 rounded-xl border border-stone-200/60 shadow-xs">
            <p className="text-xl sm:text-2xl font-black text-emerald-700">100%</p>
            <p className="text-xs text-stone-600 font-medium">Ingredientes Comuns de Supermercado</p>
          </div>
          <div className="p-3 bg-white/80 rounded-xl border border-stone-200/60 shadow-xs">
            <p className="text-xl sm:text-2xl font-black text-amber-600">{PRICE}</p>
            <p className="text-xs text-stone-600 font-medium">Preço Único Promocional</p>
          </div>
          <div className="p-3 bg-white/80 rounded-xl border border-stone-200/60 shadow-xs">
            <p className="text-xl sm:text-2xl font-black text-stone-900">4 Etapas</p>
            <p className="text-xs text-stone-600 font-medium">Transição Gradual e Sem Sobressaltos</p>
          </div>
          <div className="p-3 bg-white/80 rounded-xl border border-stone-200/60 shadow-xs">
            <p className="text-xl sm:text-2xl font-black text-emerald-800">100</p>
            <p className="text-xs text-stone-600 font-medium">Receitas (50 Cozinhadas + 50 Cruas)</p>
          </div>
        </div>

      </div>
    </section>
  );
};
