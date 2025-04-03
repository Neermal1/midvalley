import React from "react";
import { BiRocket, BiHeart, BiGlobe } from "react-icons/bi";

export default function MissionVision({ data }: any) {
  return (
    <section className="bg-gray-50 component-px component-py">
      <div className="">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <MissionVisionCard
            icon={<BiRocket className="w-6 h-6" />}
            title="Our Mission"
            description={data?.mission}
          />
          <MissionVisionCard
            icon={<BiGlobe className="w-6 h-6" />}
            title="Our Vision"
            description={data?.vision}
          />
          <MissionVisionCard
            icon={<BiHeart className="w-6 h-6" />}
            title="Our Values"
            description={data?.values}
          />
        </div>
      </div>
    </section>
  );
}

const MissionVisionCard = ({ icon, title, description }: any) => {
  return (
    <div className="">
      <div>
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
          {icon}
        </div>
      </div>
      <div className="">
        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mt-5 ">
          {title}
        </h3>
        <p className="mt-2 text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
};
