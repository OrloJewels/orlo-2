import { useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_APPS_SCRIPT_URL;
const COUNTRY_CODES = ['+91', '+1', '+44', '+971', '+61'];

const INITIAL_FORM = { name: '', email: '', countryCode: '+91', mobile: '' };

export default function RegisterForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ state: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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

    const payload = {
      name,
      number: `${form.countryCode} ${mobile}`,
      email,
    };

    setSubmitting(true);
    setStatus({ state: '', message: '' });
try {
await axios.post(API_URL, JSON.stringify(payload), {
  headers: { 'Content-Type': 'text/plain;charset=utf-8' },
});
  setStatus({ state: 'ok', message: "You're on the list." });
  setForm(INITIAL_FORM);
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
            value={form.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <button className="card__submit" type="submit" disabled={submitting}>
          {submitting ? 'Sending…' : 'Subscribe Now'}
        </button>

        <p className="card__status" data-state={status.state} role="status" aria-live="polite">
          {status.message}
        </p>
      </form>
    </div>
  );
}
