import React from 'react';
import { Link } from '@inertiajs/react';
import logo from '../assets/img/LOGO.webp';

const Header = () => {
  return (
    <header className="navbar navbar-expand-xl py-3 bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img src={logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#guestNavbar"
          aria-controls="guestNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="guestNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/appointment-booking">Appointment Booking</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/education">Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/faq">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link pink-btn" href="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link green-border-btn" href="/login">Login / Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
