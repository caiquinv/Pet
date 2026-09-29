import React from 'react';
import { Sparkles, UtensilsCrossed, ShieldAlert } from 'lucide-react';

export const ConnectionSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-stone-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest font-bold text-amber-600 mb-2">
            A realidade pouco falada sobre a ração seca industrializada
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            &ldquo;Ele não consegue dizer onde dói. E depende inteiramente de quem lhe enche a tigela.&rdquo;
          </h2>
        </div>

        {/* Narrative Flow */}
        <div className="space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed">
          
          <div className="bg-amber-50/60 p-6 sm:p-8 rounded-2xl border border-amber-200/70 shadow-xs relative">
            <span className="absolute -top-3 left-6 bg-amber-500 text-white text-xs font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
              A Realidade da Noite
            </span>
            <p className="font-medium text-stone-800 italic text-lg sm:text-xl leading-relaxed mb-4">
              &ldquo;Passa da meia-noite. O silêncio da casa é interrompido pelo som persistente do seu cão a coçar-se contra o chão, ou a lamber e morder as patas com um desassossego que parece não ter fim.&rdquo;
            </p>
            <p className="text-stone-700 text-sm sm:text-base">
              Levanta-se, tenta confortá-lo, pede para parar, aplica uma loção... Mas passado um quarto de hora, a comichão recomeça. Nem o tutor descansa, nem o animal tem sossego. E a parte mais difícil: <strong>ele não consegue explicar o que está a sentir.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
              <div className="flex items-center gap-3 mb-3 text-rose-600">
                <UtensilsCrossed className="w-5 h-5 shrink-0" />
                <h3 className="font-bold text-stone-900 text-base">A Mesma Ração Seca Todos os Dias</h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Diariamente colocamos na tigela o mesmo granulado castanho ultraprocessado. Uma ração sujeita a temperaturas elevadíssimas, com menos de <strong>10% de humidade natural</strong> e frequentemente com conservantes e corantes artificiais que podem sobrecarregar o organismo de cães mais sensíveis.
              </p>
            </div>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
              <div className="flex items-center gap-3 mb-3 text-amber-600">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <h3 className="font-bold text-stone-900 text-base">A Pele Reflete a Saúde Digestiva</h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Grande parte das defesas do organismo de um cão está diretamente ligada ao trato gastrointestinal. Quando o sistema digestivo permanece sensibilizado e cronicamente desidratado, as manifestações acabam muitas vezes por surgir no maior órgão do animal: <strong>a pele, as patas e os ouvidos</strong>.
              </p>
            </div>
          </div>

          {/* Constructive Call to Action */}
          <div className="bg-emerald-900 text-white p-6 sm:p-8 rounded-2xl shadow-md space-y-4">
            <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>UMA ABORDAGEM SIMPLES E CASEIRA</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold leading-snug">
              É possível apoiar a saúde do seu cão com comida simples do supermercado.
            </h3>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Ao introduzir gradualmente ingredientes frescos, hidratantes e adequados (carnes magras bem selecionadas, legumes de fácil digestão e fibras naturais), o organismo encontra nutrientes bioapropriados. Em pouco tempo, a comichão pode reduzir de forma notória, o pelo ganha vigor e a família volta a desfrutar de noites tranquilas.
            </p>
            <div className="pt-2 text-xs sm:text-sm text-emerald-200/90 font-medium">
              E com um benefício claro: preparar alimentação caseira pode ficar <strong>mais económico</strong> no talho e na mercearia do que manter rações especiais de valor muito elevado.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
