import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Zap } from 'lucide-react';
import { PRICE, CHECKOUT_URL } from '../constants';

interface FaqSectionProps {
  onGoToCheckout: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onGoToCheckout }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Como recebo o método e como funciona o acesso?',
      a: 'O acesso é imediato e 100% digital. Assim que o pagamento de 14,90 € for confirmado, recebe de imediato no seu e-mail a ligação direta para descarregar o Método Pele Tranquila Canina com todas as 100 receitas e a lista semáforo dos alimentos.',
    },
    {
      q: 'É um produto físico? Posso ler no telemóvel?',
      a: 'É um guia totalmente digital em formato PDF. Não precisa de esperar por encomendas pelo correio nem pagar portes de envio. Fica guardado diretamente no seu telemóvel, tablet ou computador para consultar na cozinha ou às compras com toda a comodidade.',
    },
    {
      q: 'Quanto tempo tenho acesso ao método?',
      a: 'O acesso é vitalício e permanente. O ficheiro fica guardado nos seus dispositivos para consultar sempre que quiser. Trata-se de um pagamento único de 14,90 €, sem qualquer subscrição ou mensalidade posterior.',
    },
    {
      q: 'O método substitui uma consulta veterinária?',
      a: 'Não. O Método Pele Tranquila Canina tem caráter estritamente educativo, informativo e preventivo de apoio ao bem-estar diário. Não substitui o diagnóstico, acompanhamento nem os tratamentos prescritos pelo médico veterinário do seu animal.',
    },
    {
      q: 'As receitas são adequadas para qualquer cão?',
      a: 'As formulações foram desenvolvidas para cães de diferentes portes e idades, utilizando ingredientes frescos de elevada digestibilidade. O guia inclui tabelas de dosagem prática de acordo com o peso do cão e alternativas para animais com sensibilidades específicas (como intolerância a frango).',
    },
    {
      q: 'Posso oferecer as receitas ao meu cão todos os dias?',
      a: 'Sim. As receitas foram pensadas para poderem fazer parte da alimentação quotidiana ou para serem alternadas de forma equilibrada. O guia ensina inclusive a preparar refeições para 15 a 20 dias de uma só vez e congelar em porções práticas, poupando tempo na cozinha.',
    },
    {
      q: 'O meu cão sempre comeu ração. A transição pode causar desarranjos?',
      a: 'Para prevenir qualquer perturbação digestiva, o método apresenta um Protocolo de Transição Gradual em 4 Fases (Dias 1-2: 75% ração / 25% caseiro; Dias 3-4: 50%/50%; Dias 5-6: 25%/75%; Dia 7+: 100% caseiro), permitindo uma adaptação intestinal harmoniosa.',
    },
    {
      q: 'A alimentação caseira não fica mais cara do que a ração industrializada?',
      a: 'Pelo contrário! O método baseia-se em ingredientes simples de supermercado e talho (carnes picadas, ovos, abóbora, cenoura, peixe económico). Em Portugal, a alimentação fresca de um cão de porte pequeno a médio costuma rondar entre 30 € e 45 € mensais, gerando uma poupança substancial face a rações veterinárias especiais.',
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
          <a
            href={CHECKOUT_URL}
            onClick={() => onGoToCheckout()}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm sm:text-base px-7 py-3.5 rounded-2xl shadow-lg shadow-emerald-700/20 transition-transform hover:scale-105 active:scale-95 cursor-pointer no-underline"
          >
            <Zap className="w-4 h-4 fill-white" />
            QUERO O MÉTODO PELE TRANQUILA – {PRICE}
          </a>
        </div>

      </div>
    </section>
  );
};
