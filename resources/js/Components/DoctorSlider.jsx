// resources/js/Components/DoctorSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import images from "@/helper/Images";
import { Link } from "@inertiajs/react";

const doctors = [
  {
    name: "Dr. Dummy Name",
    specialization: "Lorem Ipsum",
    rating: 4.97,
    reviews: 178,
    image: images["man-smiling.doctor.webp"],
    description: "Lorem Ipsum is simply dummy text of the printing & typesetting industry."
  },
  {
    name: "Dr. John Smith",
    specialization: "Cardiologist",
    rating: 4.85,
    reviews: 122,
    image: images["female-doctor.webp"],
    description: "Lorem Ipsum is simply dummy text of the printing & typesetting industry."
  },
  {
    name: "Dr. Emily Johnson",
    specialization: "Dentist",
    rating: 4.92,
    reviews: 98,
    image: images["man-smiling.doctor.webp"],
    description: "Lorem Ipsum is simply dummy text of the printing & typesetting industry."
  },
  {
    name: "Dr. William Brown",
    specialization: "Pediatrician",
    rating: 4.76,
    reviews: 143,
    image: images["female-doctor.webp"],
    description: "Lorem Ipsum is simply dummy text of the printing & typesetting industry."
  },
  {
    name: "Dr. Olivia Davis",
    specialization: "Neurologist",
    rating: 4.88,
    reviews: 110,
    image: images["man-smiling.doctor.webp"],
    description: "Lorem Ipsum is simply dummy text of the printing & typesetting industry."
  },
  {
    name: "Dr. James Wilson",
    specialization: "Orthopedic",
    rating: 4.93,
    reviews: 75,
    image: images["female-doctor.webp"],
    description: "Lorem Ipsum is simply dummy text of the printing & typesetting industry."
  },
  {
    name: "Dr. Isabella Taylor",
    specialization: "Gynecologist",
    rating: 4.89,
    reviews: 65,
    image: images["female-doctor.webp"],
    description: "Lorem Ipsum is simply dummy text of the printing & typesetting industry."
  },
  {
    name: "Dr. Daniel Lee",
    specialization: "Dermatologist",
    rating: 4.91,
    reviews: 200,
    image: images["female-doctor.webp"],
    description: "Lorem Ipsum is simply dummy text of the printing & typesetting industry."
  }
];

const DoctorSlider = () => {
  return (
    <div className="slider-container">
      <h4 className="subtitle text-center">Meet Best Doctors</h4>
      <h2 className="title-2 text-center">Meet your Precision Pulse MD Team</h2>
      <p className="text-center text-gray-600 mb-50">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
        Lorem Ipsum has been the industry's standard dummy.
      </p>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }}
      >
        {doctors.map((doc, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img src={doc.image} alt={doc.name} className="card-img" />
              <div className="card-body">
                <h3 className="card-title mb-16">{doc.name}</h3>
                <p className="specialization mb-16">{doc.specialization}</p>
                <p className="description">{doc.description}</p>
                <Link href="/doctor-profile" className="btn pink-border-btn">
                  Book Now Appointment
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DoctorSlider;
