import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Apple, 
  Flame, 
  RotateCw, 
  BookOpen, 
  Check, 
  Layers,
  ChevronRight,
  ShieldCheck,
  Search
} from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'transicao' | 'semaforo' | 'receitas'>('transicao');
  const [filterSemaforo, setFilterSemaforo] = useState<'todos' | 'pode' | 'cuidado' | 'nunca'>('todos');
  const [searchFood, setSearchFood] = useState('');

  const semaforoData = [
    { name: 'Cenoura cozida ou ralada', status: 'pode', reason: 'Excelente fonte de betacaroteno e fibras digestivas' },
    { name: 'Abobrinha verde', status: 'pode', reason: 'Baixa caloria, alta hidratação e saciedade gástrica' },
    { name: 'Ovo de galinha cozido', status: 'pode', reason: 'Proteína de altíssimo valor biológico e colina' },
    { name: 'Carne moída bovina ou de frango', status: 'pode', reason: 'Base proteica rica em ferro e aminoácidos essenciais' },
    { name: 'Abóbora cabotiá cozida', status: 'pode', reason: 'Regula o intestino e endurece fezes amolecidas' },
    { name: 'Sardinha fresca (em água)', status: 'pode', reason: 'Rica em Ômega 3 anti-inflamatório para a pele' },
    
    { name: 'Fígado bovino / Vísceras', status: 'cuidado', reason: 'Superalimento, mas deve ser dosado em até 5-10% da dieta para não desregular vitamina A' },
    { name: 'Frutas cítricas (Laranja/Tangerina)', status: 'cuidado', reason: 'Apenas pouca quantidade sem casca e sem sementes, evitar se tiver gastrite' },
    { name: 'Batata-inglesa', status: 'cuidado', reason: 'Deve sempre ser 100% cozida, nunca crua por conter solanina' },
    { name: 'Laticínios e queijos brancos', status: 'cuidado', reason: 'Muitos cães adultos têm intolerância à lactose; usar com moderação' },

    { name: 'Cebola e Alho em excesso', status: 'nunca', reason: 'Contém tiossulfato, substância que destrói as hemácias (provoca anemia grave)' },
    { name: 'Chocolate e Cacau', status: 'nunca', reason: 'A teobromina é altamente tóxica para o coração e sistema nervoso do cão' },
    { name: 'Uvas frescas e Uvas-passas', status: 'nunca', reason: 'Causa falência renal aguda fulminante mesmo em pequenas porções' },
    { name: 'Ossos de frango COZIDOS', status: 'nunca', reason: 'O cozimento enrijece os ossos, causando estilhaços que perfuram o esôfago e intestino' },
    { name: 'Adoçante Xilitol', status: 'nunca', reason: 'Provoca hipoglicemia severa e necrose hepática em minutos' },
    { name: 'Restos de comida temperada com sal/gordura', status: 'nunca', reason: 'Sobras de mesa com óleo, condimentos e frituras inflamam o pâncreas' },
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
            Método Nutrição Caseira Anti-Alergia
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight leading-tight mb-4">
            Os 4 Pilares para Desinflamar a Pele e Eliminar as Alergias
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            Comida caseira para cães <strong>não é dar restos temperados de mesa</strong>. É uma rotina bioapropriada, hipoalergênica e curativa, pensada para zerar as coceiras do seu filho peludo.
          </p>
        </div>

        {/* 4 Pillars Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:border-emerald-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-lg mb-4">
                01
              </div>
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">Comida de Verdade</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Ingredientes frescos, preparados com baixo impacto e sem conservantes. O trato digestivo absorve até 90% dos nutrientes.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-semibold text-emerald-700 flex items-center gap-1">
              <Check className="w-4 h-4" /> Alta digestibilidade
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:border-emerald-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-lg mb-4">
                02
              </div>
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">Transição Sem Diarreia</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Protocolo gradual em 4 fases (Dias 1 ao 7+). O intestino adapta a flora bacteriana sem vômitos ou desconforto.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-semibold text-amber-700 flex items-center gap-1">
              <Check className="w-4 h-4" /> Adaptação leve
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:border-emerald-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-black text-lg mb-4">
                03
              </div>
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">Lista Semáforo</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Guia visual prático para a sua geladeira: saiba instantaneamente o que pode, o que exige cuidado e o que é veneno.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-semibold text-rose-700 flex items-center gap-1">
              <Check className="w-4 h-4" /> Segurança absoluta
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:border-emerald-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-lg mb-4">
                04
              </div>
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">100 Receitas Balanceadas</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                50 receitas cozidas + 50 cruas nutritivas, calculadas para o bem-estar e saúde gastrointestinal do cão.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-semibold text-blue-700 flex items-center gap-1">
              <Check className="w-4 h-4" /> Economia no mercado
            </div>
          </div>

        </div>

        {/* Deep Dive Interactive Showcase */}
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
              Lista Semáforo (Pode/Não Pode)
            </button>
            <button
              onClick={() => setActiveTab('receitas')}
              className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'receitas'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              100 Receitas Cozidas & Cruas
            </button>
          </div>

          {/* TAB 1: TRANSIÇÃO SEGURA */}
          {activeTab === 'transicao' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Fiel ao Guia Físico Mostrado no Vídeo
                </span>
                <h3 className="text-2xl font-black text-stone-900 mt-2">
                  Como fazer a transição segura para evitar qualquer mal-estar
                </h3>
                <p className="text-sm text-stone-600 max-w-xl mx-auto mt-1">
                  O sistema digestivo do cão acostumado à ração precisa de alguns dias para acordar as enzimas naturais. Siga este cronograma comprovado:
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
                      <span className="text-emerald-700">25% Comida Natural</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 leading-snug">
                    O cão começa a sentir o aroma delicioso da carne e dos legumes misturados sem estranhar.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200 relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-emerald-800 bg-emerald-200/80 px-2.5 py-0.5 rounded-md">
                      Dias 3 e 4
                    </span>
                    <span className="text-xs font-semibold text-stone-500">Meio a Meio</span>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="w-full bg-stone-200 rounded-full h-3 overflow-hidden flex">
                      <div className="bg-stone-500 h-full" style={{ width: '50%' }}></div>
                      <div className="bg-emerald-500 h-full" style={{ width: '50%' }}></div>
                    </div>
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-stone-600">50% Ração</span>
                      <span className="text-emerald-700">50% Comida Natural</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 leading-snug">
                    A microbiota intestinal se multiplica, as fezes começam a diminuir de volume e o cheiro fica mais leve.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-emerald-50/90 p-5 rounded-2xl border border-emerald-300 relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-md">
                      Dias 5 e 6
                    </span>
                    <span className="text-xs font-semibold text-stone-500">Quase Lá</span>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="w-full bg-stone-200 rounded-full h-3 overflow-hidden flex">
                      <div className="bg-stone-500 h-full" style={{ width: '25%' }}></div>
                      <div className="bg-emerald-500 h-full" style={{ width: '75%' }}></div>
                    </div>
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-stone-600">25% Ração</span>
                      <span className="text-emerald-700">75% Comida Natural</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 leading-snug">
                    Ele já espera ansioso pelo prato! A pele começa a clarear e as coceiras noturnas diminuem drasticamente.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-emerald-600 text-white p-5 rounded-2xl border border-emerald-700 shadow-md relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-emerald-950 bg-amber-300 px-2.5 py-0.5 rounded-md">
                      Dia 7 em diante
                    </span>
                    <span className="text-xs font-semibold text-emerald-100">100% Livre</span>
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
                    Seu cão atinge o ápice de vitalidade, pelo acetinado, hálito agradável e noites inteiras dormindo como um anjo.
                  </p>
                </div>

              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  <strong>Dica da Dra. Fernanda:</strong> Cães mais sensíveis ou idosos podem estender cada fase para 3 dias. O Guia detalha ajustes individuais para cada caso!
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
                    Consulte os alimentos antes de preparar o pratinho
                  </p>
                </div>

                {/* Filter and Search */}
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-48">
                    <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Buscar alimento..."
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
                O Guia impresso/PDF inclui mais de 80 alimentos listados para consulta instantânea na geladeira.
              </p>
            </div>
          )}

          {/* TAB 3: RECEITAS */}
          {activeTab === 'receitas' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Variedade Completa & Econômica
                </span>
                <h3 className="text-2xl font-black text-stone-900 mt-2">
                  100 Receitas Testadas: 50 Cozidas + 50 Cruas
                </h3>
                <p className="text-sm text-stone-600 max-w-xl mx-auto mt-1">
                  Cardápios acessíveis com ingredientes que você compra na feira ou no açougue perto de casa, sem gastar fortunas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-2xl border border-amber-200">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold mb-3 shadow-xs">
                    50
                  </div>
                  <h4 className="font-extrabold text-stone-900 text-lg mb-2">
                    50 Receitas Cozidas para Cães
                  </h4>
                  <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                    Perfeito para quem está começando. A cocção branda potencializa o aroma, facilita a digestão de cães com gastrite ou paladar exigente e mata qualquer bactéria indesejada.
                  </p>
                  <ul className="text-xs text-stone-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Peru com Lentilha e Abobrinha
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Patinho Moído com Purê de Abóbora Cabotiá
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Frango Desfiado com Cenoura e Ervilha Fresca
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Caldo de Ossos Gelatinoso para Fortalecer Articulações
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50/50 rounded-2xl border border-emerald-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-3 shadow-xs">
                    50
                  </div>
                  <h4 className="font-extrabold text-stone-900 text-lg mb-2">
                    50 Receitas Cruas (Com Osso & Sem Osso)
                  </h4>
                  <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                    A dieta biologicamente apropriada (BARF) que preserva 100% das enzimas e vitaminas ativas. Inclui regras de congelamento profilático para segurança sanitária total.
                  </p>
                  <ul className="text-xs text-stone-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Moela e Fígado com Mix de Folhas Verdes
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Pescoço e Dorso de Frango Cru (Limpeza natural dos dentes)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Mix de Peixe com Ovo Caipira e Espinafre
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Técnica de Congelamento Profilático de 72 horas
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
