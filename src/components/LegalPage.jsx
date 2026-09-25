import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from './SiteFooter.jsx';

const PRIVACY_EMAIL = import.meta.env.VITE_PRIVACY_EMAIL || 'privacy@orlo.in';

const pages = {
  privacy: {
    eyebrow: 'Your data, clearly explained',
    title: 'Privacy Policy',
    intro:
      'This policy explains how ORLO collects and uses personal information submitted through its pre-launch registration form.',
    sections: [
      {
        title: 'Information we collect',
        body: [
          'We collect your full name, email address, mobile number and country calling code. We also record your consent choices and the date and time at which they were made.',
        ],
      },
      {
        title: 'Why we collect it',
        body: [
          'We use this information to register your interest in ORLO, administer the pre-launch silver coin offer, contact you about your registration, prevent duplicate or fraudulent entries, and respond to your questions or requests.',
          'We will send promotional messages by WhatsApp, SMS or email only when you separately opt in. Refusing marketing consent does not affect your registration.',
        ],
      },
      {
        title: 'How we share information',
        body: [
          'We may share only the information necessary with service providers that help us operate this website, host data, manage registrations, or deliver email, SMS and WhatsApp messages. We do not sell your personal information.',
          'We may also disclose information where required by law or to protect our legal rights and users from fraud or misuse.',
        ],
      },
      {
        title: 'Retention and security',
        body: [
          'We retain registration information only for as long as needed for the pre-launch campaign, fulfilment, legal compliance and related business records. When it is no longer required, we delete or anonymise it.',
          'We use reasonable administrative, technical and organisational safeguards designed to protect personal information. No internet transmission or storage system can be guaranteed to be completely secure.',
        ],
      },
      {
        title: 'Your choices and rights',
        body: [
          'You may withdraw consent, opt out of marketing, ask for access to or correction of your information, request erasure where applicable, or raise a grievance by contacting us. Withdrawing consent does not affect processing already carried out lawfully; it may prevent us from continuing services that require the information.',
        ],
      },
      {
        title: 'Contact and grievances',
        body: [
          `For a privacy request or complaint, email ${PRIVACY_EMAIL}. Please include enough information for us to identify your registration and respond to your request.`,
        ],
      },
      {
        title: 'Changes to this policy',
        body: [
          'We may update this policy when our practices or legal obligations change. We will publish the revised version here and update the effective date. If a material change requires fresh consent, we will request it.',
        ],
      },
    ],
  },
  terms: {
    eyebrow: 'ORLO pre-launch campaign',
    title: 'Pre-Launch Offer Terms',
    intro:
      'These terms govern registration for ORLO’s pre-launch silver coin offer. By registering, you agree to these terms.',
    sections: [
      {
        title: 'Eligibility',
        body: [
          'The offer is open to individuals aged 18 or older who provide valid contact details. Unless ORLO states otherwise, only one registration is permitted per person, email address and mobile number.',
        ],
      },
      {
        title: 'Offer and redemption',
        body: [
          'Registration records your interest but does not by itself guarantee a silver coin. Eligibility, quantity, redemption steps, collection or delivery method, and any purchase requirement will be communicated before fulfilment. The offer is subject to availability and verification.',
        ],
      },
      {
        title: 'Validity and changes',
        body: [
          'ORLO may set or extend the campaign period and may modify, suspend or withdraw the offer where reasonably necessary, including in cases of fraud, technical failure, limited stock or circumstances beyond its control. Material changes will be communicated through this page or the contact details supplied during registration.',
        ],
      },
      {
        title: 'Fair use',
        body: [
          'Automated, duplicate, incomplete, misleading or fraudulent registrations may be rejected. The offer cannot be exchanged for cash unless ORLO expressly states otherwise.',
        ],
      },
      {
        title: 'Website and intellectual property',
        body: [
          'ORLO’s name, logo, artwork, copy and website materials are protected by applicable intellectual-property laws. You may use the website for personal, lawful purposes only and must not disrupt, copy or misuse it.',
        ],
      },
      {
        title: 'Liability and law',
        body: [
          'Nothing in these terms excludes rights or remedies that cannot legally be excluded. To the extent permitted by law, ORLO is not responsible for indirect loss or for delay caused by events outside its reasonable control. These terms are governed by the laws of India, subject to applicable consumer rights and courts with lawful jurisdiction.',
        ],
      },
      {
        title: 'Questions',
        body: [`For questions about this offer, contact ${PRIVACY_EMAIL}.`],
      },
    ],
  },
};

export default function LegalPage({ type }) {
  const page = pages[type];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  return (
    <main className="legal-page">
      <article className="legal-card">
        <Link className="legal-card__back" to="/" aria-label="Back to registration">
          <span aria-hidden="true">←</span> Back to registration
        </Link>
        <p className="legal-card__eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p className="legal-card__effective">Effective 26 September 2026</p>
        <p className="legal-card__intro">{page.intro}</p>

        {page.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}

        <SiteFooter />
      </article>
    </main>
  );
}
