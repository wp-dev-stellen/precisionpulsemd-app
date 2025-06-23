import React from 'react';
import { Link } from '@inertiajs/react';
import logo from '../assets/img/LOGO.webp';
import images from '../helper/Images.jsx';

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="footer space-80" style={{ background: '#EAF5FF' }}>
        <div className="container">
          <div className="row justify-content-between">
            {/* About Us */}
            <div className="col-lg-3">
              <div className="footer-section about-us">
                <img className="footer-logo mb-25" src={logo} alt="Logo" style={{ width: 201 }} />
                <h2 className='footer-title'>About Us</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2">
              <div className="footer-section quick-links">
                <h2 className='footer-title'>Quick Links</h2>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/appointment-booking">Appointment Booking</Link></li>
                  <li><Link href="/education">Education</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-lg-2">
              <div className="footer-section useful-links">
                <h2 className='footer-title'>Useful Links</h2>
                <ul>
                  <li><Link href="/login">Login / Register</Link></li>
                  <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/faq">FAQ</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Us */}
            <div className="col-lg-3">
              <div className="footer-section contact-us">
                <h2 className='footer-title'>Contact Us</h2>
                <ul className="list-unstyled">
                  <li className="address">
                    Dummy Address 47 W 13th St, New York, NY 10011, USA
                  </li>
                  <li className="email">
                    <a href="mailto:dummyid@gmail.com">dummyid@gmail.com</a>
                  </li>
                  <li className="number">
                    <a href="tel:+14151234567">+1-415-123-4567</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <div className="footer-bottom-wrapper py-2" style={{ background: '#CBE5FD' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="mb-0 fs-6">© 2025 <b>Precision Pulse MD.</b> All Rights Reserved</p>
            </div>
            <div className="col-lg-6">
              <ul className="social-icons list-unstyled d-flex justify-content-end m-0">
                <li className="me-2">
                  <Link href="#" target="_blank">
                    <img src={images['facebook.webp']} alt="facebook" />
                  </Link>
                </li>
                <li className="me-2">
                  <Link href="#" target="_blank">
                    <img src={images['instagram.webp']} alt="instagram" />
                  </Link>
                </li>
                <li className="me-2">
                  <Link href="#" target="_blank">
                    <img src={images['twitter.webp']} alt="twitter" />
                  </Link>
                </li>
                <li className="me-2">
                  <Link href="#" target="_blank">
                    <img src={images['Linked In.webp']} alt="Linked In" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
