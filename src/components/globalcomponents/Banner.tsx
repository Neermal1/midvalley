/* eslint-disable @next/next/no-img-element */
import React from "react";

interface BannerProps {
  imageLink: any;
  headerName: string;
}

const Banner = ({ imageLink, headerName }: BannerProps) => {
  return (
    <section className="relative">
      <img
        src={imageLink}
        alt={headerName}
        className="w-full md:h-80 lg:h-80 object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 flex items-center justify-center"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className="text-white text-center text-2xl lg:text-4xl font-bold">
          {headerName}
        </h1>
      </div>
    </section>
  );
};

export default Banner;
