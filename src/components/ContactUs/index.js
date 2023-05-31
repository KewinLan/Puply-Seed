import { FaMapPin, FaPhone, FaAt } from 'react-icons/fa';
import './ContactUs.scss';

export default function ContactUs() {
  return (
    <>
      <div className='contact-title'>
        <h1>Contact Us</h1>
      </div>
      <div className='contact-address'>
        <FaMapPin /><p>Pulpy Seed Offices<br></br>234 Somewhere Street<br></br>Toronto, ON M5H 2N2<br></br>Canada</p>
      </div>
      <div className='contact-phone'>
        <FaPhone /><p>555-0100</p>
      </div>
      <div className='contact-email'>
        <FaAt /><p>pulpyseed@example.com</p>
      </div>
      <div className='contact-bg'></div>
    </>
  );
};