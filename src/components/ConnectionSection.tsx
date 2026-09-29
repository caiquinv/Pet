import React from 'react';
import { HeartCrack, AlertCircle, Sparkles, Moon, UtensilsCrossed, ShieldAlert } from 'lucide-react';

export const ConnectionSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-stone-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Anti-slop kicker */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest font-bold text-amber-600 mb-2">
            A dor que ninguém te conta sobre a ração industrial
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            &ldquo;Ele não sabe pedir socorro. E ele não escolhe o que come.&rdquo;
          </h2>
        </div>

        {/* Narrative Flow */}
        <div className="space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed">
          
          <div className="bg-amber-50/60 p-6 sm:p-8 rounded-2xl border border-amber-200/70 shadow-xs relative">
            <span className="absolute -top-3 left-6 bg-amber-500 text-white text-xs font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
              A Realidade Noturna
            </span>
            <p className="font-medium text-stone-800 italic text-lg sm:text-xl leading-relaxed mb-4">
              &ldquo;São 2 horas da manhã. O silêncio da casa é quebrado pelo som desesperado do seu cão se coçando sem parar na quina da cama, ou lambendo e mordendo a própria pata com tanta fúria que parece que ela está pegando fogo.&rdquo;
            </p>
            <p className="text-stone-700 text-sm sm:text-base">
              Você acorda, tenta afagar, manda parar, passa pomada... Mas dali a dez minutos, o barulho volta. Você não dorme. Seu cão sofre. E o pior: <strong>ele não tem como dizer onde dói.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
              <div className="flex items-center gap-3 mb-3 text-rose-600">
                <UtensilsCrossed className="w-5 h-5 shrink-0" />
                <h3 className="font-bold text-stone-900 text-base">O Pote Cheio da Mesma Ração Seca</h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Quem enche o pote todo santo dia somos nós. E colocamos sempre a mesma bolinha marrom ultraprocessada. Uma ração que passou por temperaturas superiores a 200°C, perdeu seus nutrientes vitais, tem menos de <strong>10% de umidade</strong> e é entupida de conservantes químicos e corantes.
              </p>
            </div>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
              <div className="flex items-center gap-3 mb-3 text-amber-600">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <h3 className="font-bold text-stone-900 text-base">O Intestino Pede Socorro na Pele</h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Poucos tutores sabem, mas <strong>mais de 75% da imunidade do cão vem do estômago e intestino</strong>. Quando o estômago vive inflamado e cronicamente desidratado, o organismo dele tenta expelir as toxinas através do maior órgão que ele tem: a pele e as orelhas.
              </p>
            </div>
          </div>

          {/* Emotional Call to Action */}
          <div className="bg-emerald-900 text-white p-6 sm:p-8 rounded-2xl shadow-md space-y-4">
            <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>A BOA NOTÍCIA: A SOLUÇÃO ESTÁ NA SUA COZINHA</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold leading-snug">
              Não precisa de remédios caros com efeitos colaterais para o resto da vida.
            </h3>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Ao trocar a ração ressecada por ingredientes frescos, biocompatíveis e nutritivos (carnes selecionadas, legumes digestivos e fibras certas), o estômago dele finalmente <strong>sossega e se hidrata</strong>. Em poucos dias, a coceira cessa, o pelo volta a brilhar e a casa inteira volta a ter noites de sono tranquilas.
            </p>
            <div className="pt-2 text-xs sm:text-sm text-emerald-200/90 font-medium">
              E o melhor: você gasta <strong>menos</strong> no mercado do que gastaria com um único saco de ração medicamentosa de pet shop.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
