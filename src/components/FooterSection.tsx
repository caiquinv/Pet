import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { PRICE } from '../constants';

export const FooterSection: React.FC = () => {
  const [modalType, setModalType] = useState<'termos' | 'privacidade' | null>(null);

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-24 sm:pb-16 text-xs border-t border-stone-800" id="rodape">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-stone-800">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <span className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center font-black text-sm">
                🐾
              </span>
              <span className="font-extrabold text-lg text-white font-heading tracking-tight">
                Método Pele Tranquila Canina
              </span>
            </div>
            
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Método de Nutrição Caseira e Alimentação Natural desenvolvido para apoiar a saúde da pele, o equilíbrio digestivo e o alívio da comichão em cães através de ingredientes frescos e equilibrados.
            </p>

            <div className="pt-2 text-[11px] text-stone-400">
              <p>Coordenação: Dra. Sofia Martins (Médica Veterinária)</p>
              <p>Edição Digital para Portugal</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <p className="font-bold text-white text-xs uppercase tracking-wider mb-2">
              Navegação
            </p>
            <ul className="space-y-1.5 text-stone-400">
              <li><a href="#pilares" className="hover:text-emerald-400 transition-colors">Os 4 Pilares da Nutrição</a></li>
              <li><a href="#expert" className="hover:text-emerald-400 transition-colors">Dra. Sofia Martins</a></li>
              <li><a href="#prova-social" className="hover:text-emerald-400 transition-colors">Experiências e Testemunhos</a></li>
              <li><a href="#oferta" className="hover:text-emerald-400 transition-colors">Aceder ao Guia por {PRICE}</a></li>
              <li><a href="#garantia" className="hover:text-emerald-400 transition-colors">Garantia de Satisfação</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Legal and Security */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-bold text-white text-xs uppercase tracking-wider mb-2">
              Segurança & Políticas
            </p>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <button
                onClick={() => setModalType('termos')}
                className="text-stone-400 hover:text-emerald-400 transition-colors underline cursor-pointer"
              >
                Termos de Utilização
              </button>
              <span className="text-stone-600">·</span>
              <button
                onClick={() => setModalType('privacidade')}
                className="text-stone-400 hover:text-emerald-400 transition-colors underline cursor-pointer"
              >
                Política de Privacidade
              </button>
            </div>

            <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700/60 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-[10px] text-stone-300 leading-snug">
                <p className="font-bold text-white">Ambiente Seguro e Criptografado</p>
                <p>Processamento seguro em conformidade com as normas europeias.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer Warning */}
        <div className="pt-8 pb-4 text-[11px] text-stone-500 leading-relaxed max-w-4xl mx-auto text-center space-y-2">
          <p>
            <strong>Nota Responsável de Saúde Animal:</strong> Os conteúdos apresentados no Método Pele Tranquila Canina têm finalidade puramente educativa e de apoio à alimentação equilibrada do cão. Não constituem consulta médica veterinária nem substituem o diagnóstico, acompanhamento ou prescrição de um médico veterinário, especialmente em casos de doenças crónicas, infeções bacterianas graves ou alterações renais pré-existentes.
          </p>
          <p>
            © {new Date().getFullYear()} Método Pele Tranquila Canina: Método de Nutrição Caseira · Todos os direitos reservados.
          </p>
        </div>

      </div>

      {/* Policy Modals */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-white text-stone-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 font-black text-lg p-2 cursor-pointer"
            >
              ✕
            </button>
            
            {modalType === 'termos' ? (
              <div className="space-y-3 text-xs leading-relaxed">
                <h3 className="text-lg font-black text-stone-900 mb-2">Termos de Utilização</h3>
                <p>Ao adquirir o Método Pele Tranquila Canina, é concedida uma licença individual, pessoal e intransferível de consulta do ficheiro digital e dos materiais complementares.</p>
                <p>O valor de {PRICE} corresponde a um pagamento único, garantindo acesso continuado ao material sem qualquer subscrição ou mensalidade adicional.</p>
              </div>
            ) : (
              <div className="space-y-3 text-xs leading-relaxed">
                <h3 className="text-lg font-black text-stone-900 mb-2">Política de Privacidade</h3>
                <p>Os dados fornecidos no ato da encomenda são tratados com rigor e confidencialidade, destinando-se exclusivamente ao envio do material digital adquirido.</p>
                <p>Não partilhamos nem cedemos dados a terceiros, em estrito respeito pelo Regulamento Geral sobre a Proteção de Dados (RGPD).</p>
              </div>
            )}

            <button
              onClick={() => setModalType(null)}
              className="mt-6 w-full py-2.5 bg-stone-900 text-white rounded-xl font-bold text-xs hover:bg-stone-800 cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

    </footer>
  );
};
