import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const API_URL = import.meta.env.VITE_APPS_SCRIPT_URL;
const COUNTRY_CODES = ['+91', '+1', '+44', '+971', '+61'];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MOBILE_REGEX = /^\d{7,15}$/;

const INITIAL_FORM = {
  name: '',
  email: '',
  countryCode: '+91',
  mobile: '',
  privacyConsent: false,
  marketingConsent: false,
};

export default function RegisterForm() {
    const navigate = useNavigate();
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ state: '', message: '' });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const mobile = form.mobile.trim();

    if (!name || !email || !mobile) {
      setStatus({ state: 'error', message: 'Fill in every field before subscribing.' });
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      setStatus({ state: 'error', message: 'Enter a valid email address.' });
      return;
    }

    if (!MOBILE_REGEX.test(mobile)) {
      setStatus({ state: 'error', message: 'Enter a valid 7–15 digit mobile number.' });
      return;
    }

    if (!form.privacyConsent) {
      setStatus({ state: 'error', message: 'Please accept the Privacy Policy and Offer Terms to continue.' });
      return;
    }

    const payload = {
      name,
      number: `${form.countryCode} ${mobile}`,
      email,
      privacyConsent: true,
      marketingConsent: form.marketingConsent,
      consentVersion: '2026-09-26',
      consentedAt: new Date().toISOString(),
    };

    setSubmitting(true);
    setStatus({ state: '', message: '' });
try {
  await axios.post(API_URL, JSON.stringify(payload), {
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
  });
  navigate('/thank-you', { replace: true, state: { submitted: true } });
} catch (err) {
  console.error('Registration failed:', err);
  setStatus({
    state: 'error',
    message: "Couldn't reach the server. Check it's running and try again.",
  });
} finally {
  setSubmitting(false);
}
  };

  return (
    <div className="card">
      {/* <h2 className="card__title">Be the first to know</h2>
      <p className="card__subtitle">
        Join the Flyfot community and get exclusive early access, offers &amp; updates.
      </p> */}

      <form className="card__form" onSubmit={handleSubmit} noValidate>
        <div className="input">
          <svg className="input__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.4" />
            <path d="M5 19c1.2-3.4 4-5 7-5s5.8 1.6 7 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input">
          <svg className="input__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3.5" y="5.5" width="17" height="13" rx="1.6" stroke="currentColor" strokeWidth="1.4" />
            <path d="M4.5 6.5l7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            autoComplete="email"
            pattern="[^\s@]+@[^\s@]+\.[^\s@]{2,}"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input input--phone">
          <svg className="input__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M7 3.5c1 0 1.9.7 2.2 1.7l.6 1.9c.2.7 0 1.5-.5 2l-1 1c.9 2.2 2.6 3.9 4.8 4.8l1-1c.5-.5 1.3-.7 2-.5l1.9.6c1 .3 1.7 1.2 1.7 2.2v1.8c0 1.3-1.1 2.3-2.4 2.1C10.6 19 5 13.4 4.1 6.7 3.9 5.4 4.9 4.3 6.2 4.3H7Z"
              stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"
            />
          </svg>
          <select
            name="countryCode"
            className="input__code"
            value={form.countryCode}
            onChange={handleChange}
            aria-label="Country code"
          >
            {COUNTRY_CODES.map((code) => (
              <option key={code} value={code}>{code}</option>
            ))}
          </select>
          <span className="input__divider" aria-hidden="true" />
          <input
            name="mobile"
            type="tel"
            placeholder="Mobile Number"
            autoComplete="tel-national"
            inputMode="numeric"
            pattern="[0-9]{7,15}"
            minLength={7}
            maxLength={15}
            value={form.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <label className="consent">
          <input
            name="privacyConsent"
            type="checkbox"
            checked={form.privacyConsent}
            onChange={handleChange}
            required
          />
          <span>
            I agree to the <Link to="/privacy-policy">Privacy Policy</Link> and{' '}
            <Link to="/offer-terms">Pre-Launch Offer Terms</Link>, and consent to ORLO
            processing my personal information for the purposes described there.
          </span>
        </label>

        <label className="consent">
          <input
            name="marketingConsent"
            type="checkbox"
            checked={form.marketingConsent}
            onChange={handleChange}
          />
          <span>
            I would like to receive optional updates, offers and promotional messages
            from ORLO by WhatsApp, SMS and email.
          </span>
        </label>

        <button className="card__submit" type="submit" disabled={submitting}>
          {submitting ? 'Sending…' : 'Sign Up'}
        </button>

        <p className="card__status" data-state={status.state} role="status" aria-live="polite">
          {status.message}
        </p>
      </form>
    </div>
  );
}
