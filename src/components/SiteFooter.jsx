import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Legal and contact links">
      <Link to="/privacy-policy">Privacy Policy</Link>
      <span aria-hidden="true">|</span>
      <Link to="/offer-terms">Terms &amp; Conditions</Link>
      <span aria-hidden="true">|</span>
      <Link to="/contact">Contact Us</Link>
    </footer>
  );
}
