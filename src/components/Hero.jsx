import RegisterForm from './RegisterForm.jsx';
import SiteFooter from './SiteFooter.jsx';

export default function Hero() {
  return (
    <section className="promo promo--orlo">
      <div className="promo__banner" aria-hidden="true">
        <img src="/assets/images/new-orlo-banner.png" alt="" />
        <div className="promo__scrim" />
      </div>

      <div className="promo__content">
        <RegisterForm />
        <SiteFooter />
      </div>
    </section>
  );
}
