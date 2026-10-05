import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Check, 
  ShieldCheck,
  Search
} from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'transicao' | 'semaforo' | 'receitas'>('transicao');
  const [filterSemaforo, setFilterSemaforo] = useState<'todos' | 'pode' | 'cuidado' | 'nunca'>('todos');
  const [searchFood, setSearchFood] = useState('');

  const semaforoData = [
    { name: 'Cenoura cozida ou ralada', status: 'pode', reason: 'Excelente fonte de betacaroteno e fibras suaves para a digestão' },
    { name: 'Curgete (aboborinha)', status: 'pode', reason: 'Baixo teor calórico, elevado teor de água e apoio ao trânsito intestinal' },
    { name: 'Ovo cozido', status: 'pode', reason: 'Proteína de alto valor biológico com aminoácidos essenciais' },
    { name: 'Carne picada de vaca ou de frango', status: 'pode', reason: 'Base proteica limpa, rica em ferro e de fácil assimilação' },
    { name: 'Abóbora-menina cozida', status: 'pode', reason: 'Ajuda a regular o trânsito intestinal e a firmar fezes moles' },
    { name: 'Sardinha fresca (em água)', status: 'pode', reason: 'Rica em ómega-3 com ação benéfica para a pele e o pelo' },
    
    { name: 'Fígado e miudezas', status: 'cuidado', reason: 'Alimento muito rico, mas deve limitar-se a 5-10% da dieta para não sobrecarregar com vitamina A' },
    { name: 'Frutos cítricos (laranja/tangerina)', status: 'cuidado', reason: 'Apenas em pequenas quantidades, sem casca nem caroços; evitar se o cão tiver sensibilidade gástrica' },
    { name: 'Batata comum', status: 'cuidado', reason: 'Deve ser sempre totalmente cozida; nunca servir crua por conter solanina' },
    { name: 'Laticínios e queijos frescos', status: 'cuidado', reason: 'Muitos cães adultos têm intolerância à lactose; utilizar com bastante moderação' },

    { name: 'Cebola e alho em excesso', status: 'nunca', reason: 'Contêm compostos que podem danificar os glóbulos vermelhos do animal' },
    { name: 'Chocolate e cacau', status: 'nunca', reason: 'A teobromina é tóxica para o sistema cardiovascular e nervoso dos cães' },
    { name: 'Uvas frescas e uvas-passas', status: 'nunca', reason: 'Podem desencadear problemas renais graves mesmo em quantidades reduzidas' },
    { name: 'Ossos de frango COZINHADOS', status: 'nunca', reason: 'O calor torna os ossos quebradiços e lascáveis, com risco de perfuração digestiva' },
    { name: 'Adoçante Xilitol', status: 'nunca', reason: 'Altamente perigoso; provoca quebra súbita de glicemia e risco hepático rápido' },
    { name: 'Restos de comida condimentada com gordura e sal', status: 'nunca', reason: 'Sobras de refeições temperadas sobrecarregam o pâncreas e irritam o estômago' },
  ];

  const filteredFoods = semaforoData.filter((item) => {
    const matchesFilter = filterSemaforo === 'todos' || item.status === filterSemaforo;
    const matchesSearch = item.name.toLowerCase().includes(searchFood.toLowerCase()) || 
                          item.reason.toLowerCase().includes(searchFood.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200" id="pilares">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-widest font-extrabold text-emerald-700 mb-2">
            Método de Nutrição Caseira
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight leading-tight mb-4">
            Os 4 Pilares para Apoiar a Pele e Aliviar a Comichão
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            Alimentação caseira <strong>não significa dar restos de refeições familiares</strong>. Trata-se de uma rotina equilibrada, biologicamente apropriada e pensada para o bem-estar do seu cão.
          </p>
        </div>

        {/* 4 Pillars Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:border-emerald-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-lg mb-4">
                01
              </div>
              <h3 className="font-extrabold text-stone-900 text-lg mb-1.5">Comida Fresca e Real</h3>
              <p className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-2">O que significa para si e para o seu cão:</p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Refeições com carnes magras e legumes frescos fáceis de comprar, com humidade natural e digestão muito mais suave do que granulados secos ultraprocessados.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-semibold text-emerald-700 flex items-center gap-1">
              <Check className="w-4 h-4" /> Digestão leve e hidratação
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:border-emerald-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-lg mb-4">
                02
              </div>
              <h3 className="font-extrabold text-stone-900 text-lg mb-1.5">Transição Gradual</h3>
              <p className="text-[11px] font-bold text-amber-800 uppercase tracking-wider mb-2">O que significa para si e para o seu cão:</p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Um protocolo simples em 4 fases para mudar a alimentação com calma, permitindo que a flora intestinal se adapte sem sustos, fezes moles ou indisposição.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-semibold text-amber-700 flex items-center gap-1">
              <Check className="w-4 h-4" /> Adaptação segura sem desarranjos
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:border-emerald-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-black text-lg mb-4">
                03
              </div>
              <h3 className="font-extrabold text-stone-900 text-lg mb-1.5">Lista Semáforo</h3>
              <p className="text-[11px] font-bold text-rose-800 uppercase tracking-wider mb-2">O que significa para si e para o seu cão:</p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Tranquilidade total na cozinha: consulta rápida no telemóvel para saber de imediato o que pode colocar na tigela, o que exige cautela e o que nunca oferecer.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-semibold text-rose-700 flex items-center gap-1">
              <Check className="w-4 h-4" /> Certeza rápida nas escolhas
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:border-emerald-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-lg mb-4">
                04
              </div>
              <h3 className="font-extrabold text-stone-900 text-lg mb-1.5">100 Receitas para Cães</h3>
              <p className="text-[11px] font-bold text-blue-800 uppercase tracking-wider mb-2">O que significa para si e para o seu cão:</p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                50 receitas cozinhadas e 50 opções cruas equilibradas. Tem sempre variedade à mão, sabe organizar doses para várias semanas e poupa nas idas às compras.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-semibold text-blue-700 flex items-center gap-1">
              <Check className="w-4 h-4" /> 50 cozinhadas + 50 cruas
            </div>
          </div>

        </div>

        {/* Deep Dive Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-lg">
          
          {/* Functional Tab Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-stone-100 rounded-2xl max-w-xl mx-auto mb-8">
            <button
              onClick={() => setActiveTab('transicao')}
              className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'transicao'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Passo a Passo da Transição
            </button>
            <button
              onClick={() => setActiveTab('semaforo')}
              className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'semaforo'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Lista Semáforo (Alimentos)
            </button>
            <button
              onClick={() => setActiveTab('receitas')}
              className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'receitas'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              100 Receitas Cozinhadas & Cruas
            </button>
          </div>

          {/* TAB 1: TRANSIÇÃO SEGURA */}
          {activeTab === 'transicao' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Protocolo Prático de Adaptação
                </span>
                <h3 className="text-2xl font-black text-stone-900 mt-2">
                  Como fazer a transição gradual para respeitar o aparelho digestivo
                </h3>
                <p className="text-sm text-stone-600 max-w-xl mx-auto mt-1">
                  O organismo do cão habituado a ração seca beneficia de alguns dias para ativar o equilíbrio enzimático. Acompanhe as 4 fases sugeridas:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                
                {/* Step 1 */}
                <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-200 relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-amber-800 bg-amber-200/80 px-2.5 py-0.5 rounded-md">
                      Dias 1 e 2
                    </span>
                    <span className="text-xs font-semibold text-stone-500">Início</span>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="w-full bg-stone-200 rounded-full h-3 overflow-hidden flex">
                      <div className="bg-stone-500 h-full" style={{ width: '75%' }}></div>
                      <div className="bg-emerald-500 h-full" style={{ width: '25%' }}></div>
                    </div>
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-stone-600">75% Ração</span>
                      <span className="text-emerald-700">25% Comida Caseira</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 leading-snug">
                    O cão começa a contactar com o aroma agradável dos alimentos frescos sem estranhar a novidade na tigela.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200 relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-emerald-800 bg-emerald-200/80 px-2.5 py-0.5 rounded-md">
                      Dias 3 e 4
                    </span>
                    <span className="text-xs font-semibold text-stone-500">Equilíbrio</span>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="w-full bg-stone-200 rounded-full h-3 overflow-hidden flex">
                      <div className="bg-stone-500 h-full" style={{ width: '50%' }}></div>
                      <div className="bg-emerald-500 h-full" style={{ width: '50%' }}></div>
                    </div>
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-stone-600">50% Ração</span>
                      <span className="text-emerald-700">50% Comida Caseira</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 leading-snug">
                    O trato intestinal ajusta-se naturalmente e o volume e o odor das fezes começam habitualmente a reduzir.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-emerald-50/90 p-5 rounded-2xl border border-emerald-300 relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-md">
                      Dias 5 e 6
                    </span>
                    <span className="text-xs font-semibold text-stone-500">Quase Concluído</span>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="w-full bg-stone-200 rounded-full h-3 overflow-hidden flex">
                      <div className="bg-stone-500 h-full" style={{ width: '25%' }}></div>
                      <div className="bg-emerald-500 h-full" style={{ width: '75%' }}></div>
                    </div>
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-stone-600">25% Ração</span>
                      <span className="text-emerald-700">75% Comida Caseira</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 leading-snug">
                    O animal come com apetite renovado e a sensação de comichão pode começar a diminuir de forma visível.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-emerald-600 text-white p-5 rounded-2xl border border-emerald-700 shadow-md relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-emerald-950 bg-amber-300 px-2.5 py-0.5 rounded-md">
                      Dia 7 em diante
                    </span>
                    <span className="text-xs font-semibold text-emerald-100">100% Caseiro</span>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="w-full bg-emerald-800 rounded-full h-3 overflow-hidden flex">
                      <div className="bg-amber-300 h-full w-full"></div>
                    </div>
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-emerald-100">0% Ração Seca</span>
                      <span className="text-amber-200">100% Alimentação Natural</span>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-50 leading-snug">
                    Rotina estabelecida com vitalidade, pelo mais brilhante, hálito agradável e noites descansadas para todos.
                  </p>
                </div>

              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  <strong>Nota orientativa:</strong> Cães mais velhos ou com estômago sensível podem prolongar cada fase durante 3 dias. O guia explica como adaptar ao ritmo de cada animal!
                </span>
              </div>
            </div>
          )}

          {/* TAB 2: SEMÁFORO ALIMENTAR */}
          {activeTab === 'semaforo' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-stone-900">
                    O que PODE, o que exige CUIDADO e o que NUNCA dar
                  </h3>
                  <p className="text-xs text-stone-500">
                    Consulte os alimentos antes de preparar a refeição
                  </p>
                </div>

                {/* Filter and Search */}
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-48">
                    <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Procurar alimento..."
                      value={searchFood}
                      onChange={(e) => setSearchFood(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-100 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg">
                    <button
                      onClick={() => setFilterSemaforo('todos')}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md ${
                        filterSemaforo === 'todos' ? 'bg-white shadow-xs text-stone-900' : 'text-stone-500'
                      }`}
                    >
                      Todos
                    </button>
                    <button
                      onClick={() => setFilterSemaforo('pode')}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md ${
                        filterSemaforo === 'pode' ? 'bg-emerald-600 text-white' : 'text-stone-500'
                      }`}
                    >
                      Pode
                    </button>
                    <button
                      onClick={() => setFilterSemaforo('cuidado')}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md ${
                        filterSemaforo === 'cuidado' ? 'bg-amber-500 text-white' : 'text-stone-500'
                      }`}
                    >
                      Cuidado
                    </button>
                    <button
                      onClick={() => setFilterSemaforo('nunca')}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md ${
                        filterSemaforo === 'nunca' ? 'bg-rose-600 text-white' : 'text-stone-500'
                      }`}
                    >
                      Nunca
                    </button>
                  </div>
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[380px] overflow-y-auto pr-1">
                {filteredFoods.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all ${
                      item.status === 'pode'
                        ? 'bg-emerald-50/60 border-emerald-200/80'
                        : item.status === 'cuidado'
                        ? 'bg-amber-50/60 border-amber-200/80'
                        : 'bg-rose-50/60 border-rose-200/80'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-bold text-stone-900 text-sm">{item.name}</span>
                        {item.status === 'pode' && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-800 bg-emerald-200/80 px-2 py-0.5 rounded-md">
                            <CheckCircle2 className="w-3 h-3 text-emerald-700" /> PODE
                          </span>
                        )}
                        {item.status === 'cuidado' && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded-md">
                            <AlertTriangle className="w-3 h-3 text-amber-700" /> CUIDADO
                          </span>
                        )}
                        {item.status === 'nunca' && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-rose-800 bg-rose-200/80 px-2 py-0.5 rounded-md">
                            <XCircle className="w-3 h-3 text-rose-700" /> NUNCA
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-600 leading-snug">{item.reason}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-xs text-stone-500">
                O guia em formato digital reúne mais de 80 ingredientes para consulta rápida no dia a dia.
              </p>
            </div>
          )}

          {/* TAB 3: RECEITAS */}
          {activeTab === 'receitas' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Variedade e Praticidade
                </span>
                <h3 className="text-2xl font-black text-stone-900 mt-2">
                  100 Receitas Estruturadas: 50 Cozinhadas + 50 Cruas
                </h3>
                <p className="text-sm text-stone-600 max-w-xl mx-auto mt-1">
                  Ementas acessíveis preparadas com ingredientes que encontra facilmente no supermercado ou no talho local.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-2xl border border-amber-200">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold mb-3 shadow-xs">
                    50
                  </div>
                  <h4 className="font-extrabold text-stone-900 text-lg mb-2">
                    50 Receitas Cozinhadas
                  </h4>
                  <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                    Opção ideal para iniciar. A cozedura suave realça os aromas, facilita a digestão de cães de paladar exigente e confere grande segurança microbiológica.
                  </p>
                  <ul className="text-xs text-stone-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Peru com Lentilhas e Curgete
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Carne de Vaca Picada com Puré de Abóbora
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Frango Desfiado com Cenoura e Ervilhas
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Caldo Rico de Ossos para Apoio Articular
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50/50 rounded-2xl border border-emerald-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-3 shadow-xs">
                    50
                  </div>
                  <h4 className="font-extrabold text-stone-900 text-lg mb-2">
                    50 Receitas Cruas Biologicamente Apropriadas
                  </h4>
                  <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                    Alimentação natural crua com orientações rigorosas de congelação profilática no congelador doméstico para segurança alimentar.
                  </p>
                  <ul className="text-xs text-stone-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Moelas e Fígado com Mistura de Folhas Verdes
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Pescoço e Dorso de Frango Cru (Higiene mecânica dos dentes)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Mistura de Peixe com Ovo Cozido e Espinafres
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Método de Congelação Profilática de 72 horas
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
