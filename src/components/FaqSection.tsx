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
      q: 'Como recebo o acesso após a confirmação do pagamento?',
      a: 'O envio é imediato e automático! Logo que o pagamento seja processado, recebe no seu e-mail a ligação exclusiva para descarregar o Método Pele Tranquila Canina em formato digital (ficheiro PDF de leitura fácil em qualquer telemóvel, tablet ou computador), com todas as 100 receitas e a lista semáforo dos alimentos.',
    },
    {
      q: 'A alimentação caseira não fica mais cara do que a ração seca?',
      a: 'Pelo contrário! O objetivo do método é recorrer a ingredientes comuns e nutritivos (como carne de frango ou vaca picada, miudezas, ovos, abóbora, cenoura e curgete). Em Portugal, a alimentação fresca de um cão de porte pequeno a médio costuma rondar entre 30 € e 45 € mensais, um valor significativamente mais baixo do que sacos de rações veterinárias especiais.',
    },
    {
      q: 'Não tenho disponibilidade para cozinhar todos os dias. Como posso organizar-me?',
      a: 'Não precisa de cozinhar diariamente! O método ensina a planear e preparar as doses a cada 15 ou 20 dias: prepara a comida numa única ocasião (em cerca de hora e meia), distribui as doses pesadas em caixas herméticas e guarda no congelador. No dia a dia, basta passar a porção para o frigorífico na véspera. É tão prático como deitar ração na tigela.',
    },
    {
      q: 'O meu cão é intolerante ao frango. Posso aplicar o método?',
      a: 'Sem dúvida! O material apresenta diversas alternativas proteicas (carne de peru, carne de vaca, peixes ricos em ómega-3 como a sardinha, ou carne de porco magra), permitindo contornar sensibilidades alimentares específicas com facilidade.',
    },
    {
      q: 'Cães seniores, cães jovens ou animais esterilizados podem beneficiar da alimentação natural?',
      a: 'Sim, desde que a dose calórica e os nutrientes sejam devidamente equilibrados. O guia inclui orientações claras de ajuste para animais esterilizados com tendência a ganhar peso, bem como para cães com ritmo de vida mais calmo ou animais jovens.',
    },
    {
      q: 'Como sei a porção adequada para o porte do meu cão?',
      a: 'O guia traz tabelas práticas de proporções diárias de acordo com o porte e o peso do cão. Fica a saber com precisão as quantidades recomendadas de proteínas, legumes e fibras para compor cada refeição.',
    },
    {
      q: 'O meu cão sempre comeu ração a vida toda. A transição pode causar diarreia?',
      a: 'Se a transição for feita de forma repentina, o organismo pode estranhar. É exatamente por essa razão que o guia inclui o Protocolo de Transição Gradual em 4 Fases (Dias 1-2: 75% ração / 25% comida caseira; Dias 3-4: 50%/50%; Dias 5-6: 25%/75%; Dia 7+: 100% caseiro), permitindo uma adaptação intestinal harmoniosa.',
    },
    {
      q: 'O valor de 14,90 € é uma mensalidade ou pagamento único?',
      a: 'É um pagamento ÚNICO de 14,90 €. Não existe qualquer subscrição, fidelização nem cobranças posteriores. Garante acesso permanente ao material.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            RESPOSTAS ÀS DÚVIDAS MAIS FREQUENTES
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight leading-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-stone-600 text-base">
            Esclareça os aspetos principais antes de aceder ao guia
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
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base hover:text-emerald-700 transition-colors m-0 p-0 inline">
                    {faq.q}
                  </h3>
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
            Pronto para apoiar o conforto e a alimentação do seu cão com comida simples e fresca?
          </p>
          <button
            onClick={onGoToCheckout}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-white" />
            GARANTIR ACESSO IMEDIATO POR {PRICE}
          </button>
        </div>

      </div>
    </section>
  );
};
