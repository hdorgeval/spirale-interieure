import { FC, FormEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyAnalyticsEvent, useAnalytics } from '../hooks/useAnalytics';
import { Recaptcha } from './Recaptcha';

export interface InscriptionFormOwnProps {
  analyticsEvent?: MyAnalyticsEvent;
  className?: string;
  eventName: string;
  invalidFeedbackClassName?: string;
  formBackgroundClassName?: string;
}

export const InscriptionForm: FC<InscriptionFormOwnProps> = ({
  analyticsEvent,
  eventName,
  invalidFeedbackClassName,
  formBackgroundClassName,
}) => {
  const formName = `Inscription`;
  const notificationEmailSubject = `Inscription à un événement : ${eventName}`;

  const navigate = useNavigate();
  const { trackSimpleEvent } = useAnalytics();

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      const targetForm = event?.currentTarget;
      event.preventDefault();
      if (!targetForm?.checkValidity()) {
        event.stopPropagation();
        targetForm.classList.add('was-validated');
        return;
      }

      targetForm.classList.add('was-validated');
      const formData = new FormData(targetForm);
      const convertedFormEntries = Array.from(formData, ([key, value]) => [
        key,
        typeof value === 'string' ? value : value.name,
      ]);

      if (analyticsEvent) {
        trackSimpleEvent(analyticsEvent);
      }

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(convertedFormEntries).toString(),
      })
        .then(() => navigate('/contact/success'))
        .catch(() => navigate('/contact/error'))
        .finally(() => {});
    },
    [analyticsEvent, navigate, trackSimpleEvent],
  );

  const invalidFeedbackClassNames = `invalid-feedback ${invalidFeedbackClassName}`;
  return (
    <form
      className="row g-3 align-items-center needs-validation"
      name={formName}
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      netlify-honeypot="bot-field"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="col-12">
        <label className="visually-hidden" htmlFor="inscription-field-name">
          Nom
        </label>
        <input
          type="text"
          name="Nom"
          id="inscription-field-name"
          className={`form-control ${formBackgroundClassName}`}
          placeholder="Votre nom"
          autoComplete="name"
          maxLength={80}
          required
        />
        <div className={invalidFeedbackClassNames}>Vous devez saisir votre nom.</div>
      </div>
      <div className="col-12">
        <label className="visually-hidden" htmlFor="inscription-field-email">
          E-mail
        </label>
        <div className="input-group">
          <div className={`input-group-text ${formBackgroundClassName}`}>@</div>
          <input
            type="email"
            name="Email"
            className={`form-control ${formBackgroundClassName}`}
            id="inscription-field-email"
            placeholder="E-mail"
            autoComplete="email"
            maxLength={30}
            required
          />
          <div className={invalidFeedbackClassNames}>Vous devez saisir votre email.</div>
        </div>
      </div>

      <div className="col-12">
        <label className="visually-hidden" htmlFor="inscription-field-phone">
          Portable
        </label>
        <div className="input-group">
          <div className={`input-group-text ${formBackgroundClassName}`}>
            <i className="bi bi-telephone-inbound"></i>
          </div>
          <input
            type="tel"
            name="Portable"
            className={`form-control ${formBackgroundClassName}`}
            id="inscription-field-phone"
            placeholder="Numéro de portable"
            autoComplete="tel-national"
            maxLength={15}
            required
          />
          <div className={invalidFeedbackClassNames}>Vous devez saisir un numéro de téléphone.</div>
        </div>
      </div>
      <div className="input-group">
        <div className={`input-group-text ${formBackgroundClassName}`}>
          <i className="bi bi-calendar"></i>
        </div>
        <input
          type="text"
          name="Date de naissance"
          id="inscription-field-birthday"
          className={`form-control ${formBackgroundClassName}`}
          placeholder="Votre date de naissance"
          autoComplete="bday"
          maxLength={80}
          required
        />
        <div className={invalidFeedbackClassNames}>Vous devez saisir votre date de naissance.</div>
      </div>

      <div className="col-12">
        <Recaptcha theme="dark" invalidFeedbackClassName={invalidFeedbackClassName} />
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary w-100 fw-medium">
          M'inscrire
        </button>
      </div>
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="subject" value={notificationEmailSubject} />
      <p className="visually-hidden">
        <label>
          <input name="bot-field" />
        </label>
      </p>
    </form>
  );
};

InscriptionForm.displayName = 'InscriptionForm';
