import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/globalcomponents/Buttons";

//images
import journey from "../../../../public/banners/start-your-journey.jpg";
import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
export default function CTA() {
  return (
    <section className="">
      <div className="relative">
        <div>
          <Image src={journey} alt="" className="w-full lg:h-96 object-cover" />
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center component-px component-py">
          <div>
            <h1 className="text-2xl lg:text-4xl xl:text-6xl font-bold text-white">
              Ready to start Journey?
            </h1>
            <div className="flex space-x-4 lg:space-x-8 items-center justify-center mt-2 lg:mt-4 xl:mt-8">
              <PrimaryButton buttonName="Apply Now" navigateTo="/apply-now" />
              <SecondaryButton
                buttonName="Schedule a visit"
                navigateTo="/contact"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
