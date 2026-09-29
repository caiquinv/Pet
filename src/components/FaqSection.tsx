import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Zap } from 'lucide-react';
import { PRICE } from '../constants';

interface FaqSectionProps {
  onGoToCheckout: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onGoToCheckout }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Como vou receber o material após o pagamento?',
      a: 'A liberação é imediata e automática! Assim que a compra for confirmada (no Pix é instantâneo), você recebe em seu e-mail o link de acesso exclusivo para baixar o Guia Adeus Alergia Canina completo em formato digital (PDF de alta qualidade), com todas as 100 receitas de nutrição caseira, lista semáforo e a calculadora inteligente de gramatura.',
    },
    {
      q: 'Alimentação natural não sai mais cara do que ração seca?',
      a: 'Não! O guia foi elaborado justamente para desmistificar isso. As receitas utilizam cortes baratos e ricos em nutrientes (moela, carne moída, frango, ovos caipiras) e legumes sazonais da feira (abóbora, cenoura, abobrinha). Um cão de porte pequeno a médio consome entre R$ 110 e R$ 160 por mês em comida fresca, o que é muito mais barato do que qualquer ração super premium ou medicamentosa.',
    },
    {
      q: 'Não tenho tempo para cozinhar todo dia. Como resolver isso?',
      a: 'Você não precisa cozinhar diariamente! No guia você aprende o método das Marmitas Congeladas: você cozinha uma única vez a cada 15 ou 30 dias (leva menos de 2 horas), distribui as refeições já pesadas em potinhos herméticos e congela. No dia a dia, basta descongelar a porção na geladeira na noite anterior. É tão prático quanto servir ração seca.',
    },
    {
      q: 'Meu cão tem intolerância a frango ou carne bovina. Posso usar o guia?',
      a: 'Com certeza! O material traz cardápios variados com fontes proteicas alternativas (peixes frescos ricos em ômega 3 como a sardinha, carne suína magra como lombo e ovos), ideais para cães que sofrem com alergias e intolerâncias alimentares.',
    },
    {
      q: 'Cães filhotes, idosos ou castrados podem consumir alimentação natural?',
      a: 'Sim, e eles se beneficiam imensamente! O guia traz orientações específicas para ajustar o percentual de cálcio e proteínas para filhotes em desenvolvimento, bem como ajustes de fibras e carnes magras para cães idosos e castrados que necessitam de controle calórico.',
    },
    {
      q: 'Como sei a quantidade exata de gramas para o peso dele?',
      a: 'Você tem acesso à nossa Calculadora de Porção Diária & Gramas por Peso. Basta selecionar o peso, se o pet é castrado, o escore de condição corporal e o nível de atividade. A ferramenta calcula na hora quantos gramas servir por refeição.',
    },
    {
      q: 'Meu cão está acostumado apenas com ração há anos. Ele não vai ter diarreia?',
      a: 'Não, desde que você siga o Protocolo de Transição Segura em 4 Fases (Dias 1-2: 75% ração / 25% AN; Dias 3-4: 50%/50%; Dias 5-6: 25%/75%; Dia 7+: 100% AN). Essa transição gradual permite que a flora bacteriana intestinal se adapte de forma suave e sem desconfortos.',
    },
    {
      q: 'O pagamento de R$ 14,90 é mensal ou único?',
      a: 'É um pagamento ÚNICO de apenas R$ 14,90. Não existe nenhuma assinatura, renovação automática ou cobrança futura. Você paga uma única vez e tem acesso vitalício a todo o material e atualizações.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            TIRE TODAS AS SUAS DÚVIDAS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight leading-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-stone-600 text-base">
            Tudo o que você precisa saber antes de garantir seu acesso ao guia
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 mb-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-stone-900 text-sm sm:text-base hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100 pt-3">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="text-center p-6 bg-emerald-50 rounded-2xl border border-emerald-200 max-w-xl mx-auto">
          <p className="text-xs sm:text-sm font-bold text-emerald-950 mb-3">
            Pronto para transformar a saúde do seu cão com comida de verdade?
          </p>
          <button
            onClick={onGoToCheckout}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-white" />
            GARANTIR MEU ACESSO IMEDIATO POR R$ {PRICE}
          </button>
        </div>

      </div>
    </section>
  );
};
