import React from 'react';
import { 
  Check, 
  ShieldCheck, 
  Flame, 
  Zap, 
  Lock, 
  CreditCard, 
  X
} from 'lucide-react';
import { PRICE, ORIGINAL_PRICE, CHECKOUT_URL } from '../constants';

interface AnchoringSectionProps {
  onDirectCheckout: () => void;
}

export const AnchoringSection: React.FC<AnchoringSectionProps> = ({ onDirectCheckout }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-100/80 border-b border-stone-200" id="oferta">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full mb-3">
            <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
            VALOR E CLAREZA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight mb-4">
            Quanto custa continuar a tentar soluções aleatórias sem orientação?
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Ter uma orientação organizada pode ser muito mais útil e económico do que continuar a comprar produtos diferentes sem saber por onde começar.
          </p>
        </div>

        {/* 1. COMPARAÇÃO DETALHADA: TENTATIVAS ALEATÓRIAS VS. MÉTODO ESTRUTURADO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-stretch">
          
          {/* Card 1: Ciclo de tentativas aleatórias */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-rose-200 shadow-sm flex flex-col justify-between relative">
            <span className="absolute -top-3 left-6 bg-rose-600 text-white text-[11px] font-black px-3.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
              O Ciclo das Tentativas
            </span>
            
            <div>
              <div className="flex items-center gap-2 mb-2 text-rose-600">
                <X className="w-5 h-5 shrink-0 stroke-[3]" />
                <h3 className="font-extrabold text-stone-900 text-xl">
                  Tentativas sem Orientação
                </h3>
              </div>
              <p className="text-xs text-stone-500 mb-6">
                Gastos repetidos e desnecessários ao tentar adivinhar o que resulta:
              </p>

              <ul className="space-y-3.5 text-xs sm:text-sm text-stone-700 mb-6">
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-600">Mudanças frequentes de marcas sem critério</span>
                  <span className="font-bold text-rose-600">Gastos contínuos</span>
                </li>
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-600">Produtos, loções e champôs comprados por impulso</span>
                  <span className="font-bold text-rose-600">Resultados efémeros</span>
                </li>
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-600">Tempo perdido na internet com dicas contraditórias</span>
                  <span className="font-bold text-rose-600">Dúvidas constantes</span>
                </li>
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-600">Dificuldade em saber por onde começar</span>
                  <span className="font-bold text-rose-600">Frustração</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-rose-50 rounded-2xl border border-rose-200">
              <div className="flex justify-between items-center text-sm font-bold text-rose-950 mb-1">
                <span>Resultado:</span>
                <span className="text-base font-black text-rose-600">Desgaste e incerteza</span>
              </div>
              <p className="text-[11px] text-rose-700 leading-snug">
                Sem um método claro, gasta-se tempo e dinheiro sem entender o que realmente favorece o conforto do animal.
              </p>
            </div>
          </div>

          {/* Card 2: Método Organizado */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-500 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-wider">
              Orientação Clara
            </div>

            <div>
              <span className="bg-emerald-100 text-emerald-900 text-[11px] font-black px-3.5 py-0.5 rounded-full uppercase tracking-wider">
                Método Pele Tranquila Canina
              </span>

              <div className="flex items-center gap-2 mb-2 mt-3 text-emerald-600">
                <Check className="w-5 h-5 shrink-0 stroke-[3]" />
                <h3 className="font-extrabold text-stone-900 text-xl">
                  Passo a Passo Estruturado
                </h3>
              </div>
              <p className="text-xs text-stone-500 mb-6">
                Toda a informação prática reunida de forma simples e direta:
              </p>

              <ul className="space-y-3.5 text-xs sm:text-sm text-stone-700 mb-6">
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">100 receitas para cães (50 cozinhadas + 50 cruas)</span>
                  <span className="font-bold text-emerald-700">Variedade total</span>
                </li>
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Lista Semáforo com alimentos permitidos e proibidos</span>
                  <span className="font-bold text-emerald-700">Segurança</span>
                </li>
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Protocolo de transição segura em 4 fases</span>
                  <span className="font-bold text-emerald-700">Sem desarranjos</span>
                </li>
                <li className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Ingredientes simples e económicos de supermercado</span>
                  <span className="font-bold text-emerald-700">Poupança real</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
              <div className="flex justify-between items-center text-sm font-bold text-emerald-950 mb-1">
                <span>Investimento Único:</span>
                <span className="text-xl font-black text-emerald-700">{PRICE}</span>
              </div>
              <p className="text-[11px] text-emerald-800 leading-snug">
                Um valor acessível para ter em mãos um guia de consulta permanente e parar de tentar soluções às cegas.
              </p>
            </div>
          </div>

        </div>

        {/* 2. REGRA DO VALOR ACESSÍVEL */}
        <div className="bg-gradient-to-r from-emerald-900 via-stone-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 mb-12 shadow-lg border border-emerald-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            <div className="md:col-span-2 space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-emerald-800/80 px-2.5 py-1 rounded-md">
                VALOR JUSTO E ACESSÍVEL
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Menos de 0,50 € por dia no primeiro mês
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Um café numa esplanada custa cerca de 1,00 €. O valor para aceder a todo o guia digital com 100 receitas e lista de alimentos fica por apenas {PRICE} em pagamento único.
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/20 text-center flex flex-col items-center justify-center">
              <p className="text-xs text-stone-300 font-medium">Acesso Vitalício por apenas:</p>
              <div className="text-3xl sm:text-4xl font-black text-amber-300 my-1">
                {PRICE}
              </div>
              <p className="text-[11px] text-emerald-200">Pagamento Único · Sem Assinaturas</p>
            </div>

          </div>
        </div>

        {/* 3. CARD DE OFERTA DIRETA DEFINITIVA: O QUE RECEBO -> VALOR -> GARANTIA -> CTA */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border-3 border-emerald-600 shadow-2xl relative overflow-hidden" id="checkout-box">
          
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-100/60 rounded-full blur-2xl pointer-events-none"></div>

          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block bg-orange-500 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm mb-3">
              OFERTA DE LANÇAMENTO EM PORTUGAL
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight leading-tight">
              Método Pele Tranquila Canina
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              O guia digital prático com 100 receitas e orientações para apoiar a saúde da pele e a rotina do seu cão.
            </p>
          </div>

          {/* PASSO 1: O QUE RECEBO */}
          <div className="bg-stone-50 rounded-2xl p-5 sm:p-7 border border-stone-200/80 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-200">
              <p className="text-xs sm:text-sm font-black text-stone-900 uppercase tracking-wider">
                O que está incluído no seu acesso:
              </p>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                100 Receitas no Total
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span><strong>📘 Guia Digital Completo:</strong> O passo a passo da nutrição caseira e rotina de cuidados</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span><strong>🍲 50 Receitas Cozinhadas:</strong> Práticas, nutritivas e feitas com alimentos acessíveis</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span><strong>🥩 50 Receitas Cruas:</strong> Formulações naturais equilibradas com orientações seguras</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span><strong>📋 Lista Semáforo de Alimentos:</strong> O que oferecer, o que pede cautela e o que evitar</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span><strong>🔄 Protocolo de Transição em 4 Fases:</strong> Adaptação suave sem desarranjos intestinais</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span><strong>⚖️ Proporções Práticas:</strong> Equilíbrio simples de carnes, legumes e fibras</span>
              </div>
            </div>
          </div>

          {/* PASSO 2: VALOR */}
          <div className="flex flex-col items-center justify-center text-center my-6">
            <p className="text-sm font-bold text-stone-500 line-through mb-1">
              De {ORIGINAL_PRICE} por apenas
            </p>
            <div className="flex items-baseline gap-1 text-emerald-700">
              <span className="text-6xl sm:text-7xl font-black tracking-tight text-emerald-600">{PRICE}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-stone-700 mt-2">
              Pagamento único · Acesso vitalício imediato · Sem mensalidades
            </p>
          </div>

          {/* PASSO 3: GARANTIA */}
          <div className="max-w-xl mx-auto mb-7 p-4 sm:p-5 bg-emerald-50/80 rounded-2xl border border-emerald-200/90 text-center">
            <div className="flex items-center justify-center gap-2 text-emerald-900 font-bold text-xs sm:text-sm mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Garantia Incondicional de 7 Dias</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Pode conhecer o material e decidir com calma. Se nos primeiros 7 dias considerar que o método não foi útil para si e para o seu cão, basta solicitar o reembolso total. Sem perguntas nem burocracia.
            </p>
          </div>

          {/* PASSO 4: CTA */}
          <div className="max-w-xl mx-auto space-y-4">
            
            <a
              href={CHECKOUT_URL}
              onClick={() => onDirectCheckout?.()}
              className="w-full group bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-xl shadow-emerald-700/30 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer no-underline"
            >
              <Zap className="w-6 h-6 fill-white text-emerald-600 shrink-0" />
              <div className="text-left">
                <span className="block text-xs uppercase tracking-wider font-semibold opacity-90">
                  Disponibilização Imediata
                </span>
                <span className="block text-base sm:text-lg font-black leading-tight">
                  QUERO O MÉTODO PELE TRANQUILA – {PRICE}
                </span>
              </div>
            </a>

            {/* Selos de Segurança e Confiança */}
            <div className="flex flex-col items-center justify-center gap-1.5 pt-2 text-center">
              <p className="text-xs sm:text-sm font-bold text-stone-700">
                Pagamento 100% Seguro via Hotmart · MB WAY e Cartão · Envio Imediato por E-mail
              </p>
              <div className="flex items-center justify-center gap-3 text-xs text-stone-500">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  Ambiente Encriptado
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Garantia de 7 Dias
                </span>
              </div>
              <p className="text-[11px] text-stone-500 pt-1">
                *O Método Pele Tranquila Canina tem caráter informativo e educativo e não substitui uma avaliação ou acompanhamento veterinário. Em caso de sintomas persistentes, procure um médico veterinário.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
