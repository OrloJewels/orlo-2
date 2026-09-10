import RegisterForm from './RegisterForm.jsx';

export default function Hero() {
  return (
    <section className="promo">
      <div className="promo__banner" aria-hidden="true">
        <img src="/assets/images/banner.png" alt="" />
        <div className="promo__scrim" />
      </div>

      <div className="promo__content">
        {/* <div className="brand">
          <img className="brand__logo" src="/assets/images/logo.png" alt="Flyfot" />
        </div> */}

        <h1 className="headline">
          <span className="headline__pre">Pre Launch</span>
          <span className="headline__sale">Sale</span>
        </h1>

        <p className="subhead">
          Gear up. <strong>Before</strong> we launch.
        </p>
        <span className="subhead__rule" aria-hidden="true" />

        <div className="offer">
          <span className="offer__eyebrow">Subscribe for</span>
          <span className="offer__amount">20% Off</span>
          <span className="offer__terms">On your first 3 orders</span>
        </div>

        <RegisterForm />

        <ul className="perks">
          <li className="perks__item">
            <span className="perks__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="9" cy="9.5" r="1.6" fill="currentColor" />
                <circle cx="15" cy="14.5" r="1.6" fill="currentColor" />
                <path d="M8.5 15.5L15.5 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </span>
            <span className="perks__label">Exclusive offers</span>
          </li>
          <li className="perks__item">
            <span className="perks__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 8.5L12 4l8 4.5v7L12 20l-8-4.5v-7Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M4 8.5L12 13l8-4.5M12 13v7" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="perks__label">Early access to new arrivals</span>
          </li>
          <li className="perks__item">
            <span className="perks__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="5.5" y="10.5" width="13" height="9" rx="1.4" stroke="currentColor" strokeWidth="1.4" />
                <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </span>
            <span className="perks__label">No spam, just value</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
