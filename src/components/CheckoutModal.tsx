import React, { useState } from 'react';
import { X, Check, Copy, QrCode, ShieldCheck, Download, Sparkles, Lock, CreditCard, ArrowRight } from 'lucide-react';
import { PRICE } from '../constants';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [copied, setCopied] = useState(false);
  const [hasPaid, setHasPaid] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');

  if (!isOpen) return null;

  // Pix key for direct instant checkout
  const pixKey = '11965034611';

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setHasPaid(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div className="bg-white text-stone-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-stone-200 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-2 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!hasPaid ? (
          <div>
            <div className="text-center mb-6">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-0.5 rounded-full">
                CHECKOUT 100% SEGURO
              </span>
              <h3 className="text-2xl font-black text-stone-900 mt-2">
                Adeus Alergia Canina
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Acesso vitalício ao Método de Nutrição Caseira por apenas <strong className="text-emerald-700 font-extrabold">R$ {PRICE}</strong>
              </p>
            </div>

            {/* Payment Method Switcher */}
            <div className="grid grid-cols-2 gap-2 p-1.5 bg-stone-100 rounded-2xl mb-5">
              <button
                type="button"
                onClick={() => setPaymentMethod('pix')}
                className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  paymentMethod === 'pix'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <QrCode className="w-3.5 h-3.5" />
                Pix (Aprovação Imediata)
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <CreditCard className="w-3.5 h-3.5" />
                Cartão de Crédito
              </button>
            </div>

            {/* Buyer Contact Form */}
            <form onSubmit={handleSimulatePayment} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  Seu Nome Completo:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nome do tutor"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-emerald-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  Seu Melhor E-mail (Onde você receberá o material):
                </label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-emerald-500 font-medium"
                />
              </div>

              {/* PIX TAB */}
              {paymentMethod === 'pix' && (
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-center space-y-3">
                  <div className="w-32 h-32 mx-auto bg-white p-2 rounded-xl border border-stone-300 shadow-xs flex items-center justify-center">
                    <QrCode className="w-24 h-24 text-stone-800" />
                  </div>

                  <p className="text-[11px] text-stone-600">
                    Copie a chave Pix abaixo e pague no app do seu banco:
                  </p>

                  <div className="flex items-center justify-center gap-2 bg-white px-3 py-2 rounded-xl border border-stone-300 max-w-xs mx-auto">
                    <span className="font-mono font-bold text-xs text-stone-800">
                      (11) 96503-4611
                    </span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold px-2 py-1 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      {copied ? 'Copiado!' : 'Copiar'}
                    </button>
                  </div>

                  <p className="text-[10px] text-stone-400">
                    Beneficiário: KV Digital · Valor: <strong>R$ {PRICE}</strong>
                  </p>
                </div>
              )}

              {/* CARD TAB */}
              {paymentMethod === 'card' && (
                <div className="space-y-3 p-4 bg-stone-50 rounded-2xl border border-stone-200">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">
                      Número do Cartão:
                    </label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      maxLength={19}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 mb-1">
                        Validade (MM/AA):
                      </label>
                      <input
                        type="text"
                        placeholder="12/28"
                        maxLength={5}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 mb-1">
                        CVV:
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm sm:text-base py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <Check className="w-5 h-5" />
                <span>CONCLUIR COMPRA DE R$ {PRICE} · LIBERAR GUIA</span>
              </button>
            </form>

            <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 mt-4">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Garantia de 7 dias com devolução integral do valor se não amar.</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Sparkles className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-stone-900">
              Pagamento Confirmado! 🎉
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
              Parabéns por dar esse passo de saúde para o seu pet! O seu acesso já foi liberado. Faça o download agora mesmo dos e-books e utilize a calculadora:
            </p>

            <div className="space-y-2 pt-2">
              <a
                href="#pilares"
                onClick={onClose}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Baixar Guia Adeus Alergia Canina (PDF)
              </a>

              <button
                onClick={() => {
                  onClose();
                  const calcEl = document.getElementById('pilares');
                  if (calcEl) calcEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                Ver Instruções dos 4 Pilares
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-stone-400 hover:text-stone-700 block mx-auto pt-2 cursor-pointer"
            >
              Fechar Janela
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
