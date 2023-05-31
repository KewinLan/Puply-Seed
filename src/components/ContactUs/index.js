import { FaMapPin, FaPhone, FaAt } from 'react-icons/fa';
import './ContactUs.scss';

export default function ContactUs() {
  return (
    <>
      <div className='contact-title'>
        <h1>Contact Us</h1>
      </div>
      <div className='contact-address'>
        <div className='contact-icons'>
          <FaMapPin />
        </div>
        <p>Pulpy Seed Offices<br></br>234 Somewhere Street<br></br>Toronto, ON M5H 2N2<br></br>Canada</p>
      </div>
      <div className='contact-phone'>
        <div className='contact-icons'>
          <FaPhone />
        </div>
        <p>555-0100</p>
      </div>
      <div className='contact-email'>
        <div className='contact-icons'>
          <FaAt />
        </div>
        <p>pulpyseed@example.com</p>
      </div>
      <div className='contact-bg'></div>
    </>
  );
};