import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <>
      <div className='footer-links'>
        <div className="terms-link">
          <Link to="/terms">
            Terms of Use
          </Link>
        </div>
        <div className="privacy-link">
          <Link to="/privacy">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="copyright">
        Copyright Pulpy Seed, 2023
      </div>
      <div className='footer-disclaimer'>
        <p>None of the products on this website can be purchased, since this is a fictional brand.</p>
      </div>
    </>
  );
};