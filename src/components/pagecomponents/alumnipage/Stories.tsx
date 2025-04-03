/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// Changed import path for Pagination and Navigation

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Added navigation CSS import

import { Navigation } from "swiper/modules"; // Changed import path for Pagination and Navigation

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    position: "Student",
    testimonial:
      "Midvalley College has provided me with an excellent learning environment and supportive staff. I've had a wonderful experience here.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Alumni",
    testimonial:
      "Attending Midvalley College was one of the best decisions I've ever made. The knowledge and skills I gained have been invaluable in my career.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: "Parent",
    testimonial:
      "As a parent, I'm highly impressed by the quality of education and extracurricular activities offered at Midvalley College. My child has thrived here.",
  },
  {
    id: 1,
    name: "John Doe",
    position: "Student",
    testimonial:
      "Midvalley College has provided me with an excellent learning environment and supportive staff. I've had a wonderful experience here.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Alumni",
    testimonial:
      "Attending Midvalley College was one of the best decisions I've ever made. The knowledge and skills I gained have been invaluable in my career.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: "Parent",
    testimonial:
      "As a parent, I'm highly impressed by the quality of education and extracurricular activities offered at Midvalley College. My child has thrived here.",
  },
];

function TestimonialCard({ testimonial }: any) {
  return (
    <div className="border bg-white border-gray-200 p-6 lg:p-10 rounded-xl flex items-center justify-center">
      <div className="text-center">
        <p className="text-base lg:text-lg italic text-gray-700">
          {testimonial.testimonial}
        </p>
        <div className="mt-6">
          <p className="text-lg font-semibold text-gray-800">
            {testimonial.name}
          </p>
          <p className="text-base text-gray-600">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
}

export default function SuccessStories() {
  return (
    <section className="component-px component-py bg-gray-50">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="uppercase text-base lg:text-xl font-bold text-primary mb-2 lg:mb-4">
            Alumni Success Stories
          </h1>
        </div>
      </div>
      <div className="mt-4 lg:mt-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
