import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

function TestimonialCard({ testimonial }: any) {
  return (
    <div className="border bg-white border-gray-200 p-6 lg:p-10 rounded-xl flex items-center justify-center">
      <div className="text-center">
        <p className="text-base lg:text-lg italic text-gray-700">
          {testimonial.message}
        </p>
        <div className="mt-6 flex gap-8 items-center justify-center">
          <div>
            <p className="text-lg font-semibold text-gray-800">
              {testimonial.name}
            </p>
            <p className="text-base text-gray-600">
              {testimonial?.designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Testimonials = ({ testimonialsData }: any) => {
  return (
    <section className="component-px component-py bg-gray-50">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="text-lg base:text-base lg:text-2xl font-bold text-primary uppercase">
              TESTIMONIALS
            </h3>
            <div className="bg-primary w-24 h-1"></div>
          </div>
          <p className="text-lg lg:text-2xl font-medium max-w-lg">
            Discover what our students have to say about their experience with
            us
          </p>
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
          {testimonialsData?.map((testimonial: any) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
