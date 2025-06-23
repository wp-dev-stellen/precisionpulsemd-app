import React from 'react';
import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import images from '@/helper/Images';
import Accordion from '@/Components/Accordion';
import HealthHeroSection from '@/Components/HealthHeroSection';
import DoctorSlider from '@/Components/DoctorSlider';
import { Link } from '@inertiajs/react';

export default function Home() {
  return (
    <GuestLayout>
      <Head title="Home" />

      <section
        className="banner-section"
        style={{ backgroundImage: `url(${images['BG.webp']})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="banner-content">
                <h1 className="banner-title">
                  <span>Virtual Cardiology & Weight Care—</span>On Your Time
                </h1>
                <p>Experience expert care from board-certified clinicians—all from the comfort of home.</p>
                <a className="pink-btn" href="#">Book Appointment</a>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </section>

      {/* About + Offer Section */}
      <section className="about-us-section space-80">
        <div className="container">
          <div className="row about-us-inner">
            <div className="col-lg-6">
              <div className="about-img">
                <img className='w-100' src={images['about-precision.webp']} alt="About Precision Pulse MD" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h2 className="subtitle">About Precision Pulse MD</h2>
                <h2 className="title-2">Personalized Care Backed by Medical Integrity</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <ul className="icon-list mb-50">
                  <li>
                    <img src={images['Virtual.webp']} alt="Virtual consultations" />
                    Virtual cardiology consultations
                  </li>
                  <li>
                    <img src={images['Preventive.webp']} alt="Preventive strategies" />
                    Preventive heart risk strategies
                  </li>
                  <li>
                    <img src={images['Medical.webp']} alt="Medical weight loss" />
                    Medical weight loss programs
                  </li>
                  <li>
                    <img src={images['Transparent.webp']} alt="Transparent pricing" />
                    Transparent pricing – no insurance needed
                  </li>
                </ul>
                <a className="pink-btn" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="offer-section pb-80">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-4">
              <div className="offer-col">
                <img className='w-100' src={images['cardiology.webp']} alt="Cardiology Consultation" />
                <div className="col-content">
                  <h3 className="title">Cardiology Consultations</h3>
                  <a href="#" className="pink-border-btn">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="offer-col">
                <img className='w-100' src={images['medically-guided.webp']} alt="Cardiology Consultation" />
                <div className="col-content">
                  <h3 className="title">Medically-Guided Weight Loss</h3>
                  <a href="#" className="pink-border-btn">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="offer-col">
                <img className='w-100' src={images['risk reduction.webp']} alt="Cardiology Consultation" />
                <div className="col-content">
                  <h3 className="title">Risk Reduction Strategies</h3>
                  <a href="#" className="pink-border-btn">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="pink-btn">Book Now</a>
          </div>
        </div>
      </section>

      <section className="why-choose-section space-80">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="choose-img">
                <img className='w-100' src={images['why-choose-section.webp']} alt="why-choose-section" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-content">
                <h2 className="subtitle">Why Choose Us</h2>
                <h2 className="title-2">The Precision Pulse MD Difference</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <ul className="icon-list mb-50">
                  <li>
                    <img src={images['virtual-appointment-icon.webp']} alt="virtual-appointment" />
                    100% Virtual Appointments
                  </li>
                  <li>
                    <img src={images['free-providers-icon.webp']} alt="free-providers" />
                    Compassionate, judgment-free providers
                  </li>
                  <li>
                    <img src={images['certificate-icon.webp']} alt="certificate" />
                    Board-certified medical experts
                  </li>
                  <li>
                    <img src={images['pricing-icon.webp']} alt="pricing" />
                    Straightforward cash pricing—no surprise bills
                  </li>
                  <li>
                    <img src={images['support-icon.webp']} alt="support" />
                    Ongoing support and health education
                  </li>
                </ul>
                <div className=" mt-4">
                  <Link href="/contact" className="pink-btn">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="doctor-slider-section space-80">
        <div className="container">
          <DoctorSlider />
        </div>
      </section>

      <section className='edu-preview-sec space-80' style={{ backgroundImage: `url(${images['education-and-resources.webp']})` }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'></div>
            <div className='col-lg-6'>
              <div className="preview-content">
                <h3 className="subtitle">Education & Resources Preview</h3>
                <h3 className="title-2">Stay Informed. Stay Empowered.</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p>
                  Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.
                </p>
                <a href="#" className="pink-btn mt-50">Book Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-sec space-80" style={{ background: '#fff' }} >
        <div className="container">
          <h3 className="subtitle text-center">Faq</h3>
          <h3 className="title-2 text-center mb-50">Frequently Asked Questions</h3>
          <Accordion parentId="Home-accordion" dataKey="default" />
          <div className='text-center'>
            <Link href="/faq" className="pink-btn mt-50">See More</Link>
          </div>
        </div>
      </section>

      <section className='health-hero-section abc'>
        <div className='container'>
          <HealthHeroSection />
        </div>
      </section>
    </GuestLayout>
  );
}
