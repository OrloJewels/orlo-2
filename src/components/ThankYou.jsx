import { Navigate, useLocation } from 'react-router-dom';

export default function ThankYou() {
  const { state } = useLocation();

  // Direct visits to /thank-you go back to the form
  if (!state?.submitted) return <Navigate to="/" replace />;

  return (
    <section className="promo promo--orlo thank-you">
      <div className="promo__banner" aria-hidden="true">
        <img src="/assets/images/new-orlo-banner.png" alt="" />
        <div className="promo__scrim" />
      </div>

      <main className="thank-you__content">
        <div className="card card--thanks">
          <svg className="thanks__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
            <path d="M8 12.5l2.7 2.7L16 9.5" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h1 className="thanks__title">You're in.</h1>
          <p className="thanks__message">We'll get back to you shortly.</p>
        </div>
      </main>
    </section>
  );
}
