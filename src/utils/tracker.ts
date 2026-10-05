/**
 * Tracker Utilitário Seguro para Meta / UTMify
 * Garante que apenas objetos primitivos simples sejam enviados,
 * sem eventos, alvos ou elementos do DOM, sempre dentro de try/catch.
 */

export const PRODUCT_DATA = {
  content_name: 'Método Pele Tranquila Canina',
  value: 14.9,
  currency: 'EUR'
};

/**
 * Dispara InitiateCheckout de forma estritamente segura e não bloqueante
 */
export const trackInitiateCheckout = () => {
  try {
    if (typeof window !== 'undefined') {
      const payload = {
        content_name: PRODUCT_DATA.content_name,
        value: PRODUCT_DATA.value,
        currency: PRODUCT_DATA.currency
      };

      if (typeof (window as any).fbq === 'function') {
        (window as any).fbq('track', 'InitiateCheckout', payload);
      }
    }
  } catch {
    // Silencioso - nunca bloqueia navegação
  }
};

/**
 * Dispara ViewContent de forma estritamente segura e não bloqueante
 */
export const trackViewContent = () => {
  try {
    if (typeof window !== 'undefined') {
      const payload = {
        content_name: PRODUCT_DATA.content_name,
        value: PRODUCT_DATA.value,
        currency: PRODUCT_DATA.currency
      };

      if (typeof (window as any).fbq === 'function') {
        (window as any).fbq('track', 'ViewContent', payload);
      }
    }
  } catch {
    // Silencioso - nunca bloqueia a página
  }
};

