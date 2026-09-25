import { Link } from 'react-router-dom';
import SiteFooter from './SiteFooter.jsx';

const PRIVACY_EMAIL = import.meta.env.VITE_PRIVACY_EMAIL || 'privacy@orlo.in';

export default function Contact() {
  return (
    <main className="legal-page legal-page--contact">
      <article className="legal-card contact-card">
        <Link className="legal-card__back" to="/">
          <span aria-hidden="true">←</span> Back to registration
        </Link>
        <p className="legal-card__eyebrow">We’re here to help</p>
        <h1>Contact Us</h1>
        <p className="legal-card__intro">
          For registration, offer, privacy or consent-withdrawal requests, email us at:
        </p>
        <a className="contact-card__email" href={`mailto:${PRIVACY_EMAIL}`}>
          {PRIVACY_EMAIL}
        </a>
        <p className="contact-card__note">
          Please include the email address or mobile number used to register. We may
          ask for reasonable verification before acting on a data request.
        </p>
        <SiteFooter />
      </article>
    </main>
  );
}
