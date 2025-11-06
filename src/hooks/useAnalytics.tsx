import { useCallback } from 'react';

export type MyAnalyticsEvent =
  | 'appel-telephone'
  | 'envoie-mail'
  | 'has-completed-guided-tour'
  | 'inscription-stage-alchimie-tarot'
  | 'open-charte-ethique'
  | 'open-external-link'
  | 'open-google-maps'
  | 'open-my-facebook'
  | 'open-my-instagram'
  | 'open-my-linkedin'
  | 'open-my-whatsapp'
  | 'open-my-youtube'
  | 'open-waze'
  | 'contact-form'
  | 'rdv-constellation'
  | 'rdv-entretien-prealable'
  | 'rdv-ou-contact'
  | 'tel-constellation'
  | 'tel-massage'
  | 'tel-rdn'
  | 'tel-trame'
  | 'tel-sophrologie'
  | 'rdv-form-constellation'
  | 'rdv-form-consultation-tarot'
  | 'rdv-form-massage'
  | 'rdv-form-sophrologie'
  | 'rdv-form-trame'
  | 'rdv-form-rdn'
  | 'rdv-tarot';

export type CommandType = 'js' | 'config' | 'event';
declare global {
  interface Window {
    gtag: (command: CommandType, event: MyAnalyticsEvent, params?: Record<string, string>) => void;
  }
}

export const useAnalytics = () => {
  const trackSimpleEvent = useCallback((myEvent: MyAnalyticsEvent) => {
    try {
      window.gtag('event', myEvent);
    } catch (error) {
      // no op
    }
  }, []);

  const trackOpenExternalLinkEvent = useCallback((url: string) => {
    try {
      window.gtag('event', 'open-external-link', { url });
    } catch (error) {
      // no op
    }
  }, []);
  return { trackSimpleEvent, trackOpenExternalLinkEvent };
};
