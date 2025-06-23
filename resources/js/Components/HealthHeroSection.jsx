import React from 'react';
import data from '@/data/healthdata.json';

import doctorImage from '@/assets/img/doctor.webp';
import healthWomanImage from '@/assets/img/health-woman.webp';
import { Link } from '@inertiajs/react';

const HealthHeroSection = () => {
  return (
    <div className="row m-0 health-inner">
      <div className="col-lg-7 py-4 px-5 d-flex align-items-center text-white">
        <div className='content-col'>
          <h2 className="title-2 mb-25">{data.heading}</h2>
          <p className="text-white">{data.description}</p>
          <Link href="/login" className="pink-btn mt-30 fw-semibold">
            {data.buttonText}
          </Link>
        </div>
      </div>

      <div className="col-lg-5 p-0 image-box align-items-end">
        <div className="images-col">
          <img src={doctorImage} alt="Doctor on phone" className="phone-image" />
          <img src={healthWomanImage} alt="Healthy Woman" className="woman-image" />
        </div>
      </div>
    </div>
  );
};

export default HealthHeroSection;
