import { SecondaryButton } from "@/components/globalcomponents/Buttons";

//images
import admission_one from "../../../../public/admission/Admission-1.jpg";
import admission_two from "../../../../public/admission/Admission-2.jpg";
import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
export default function Admissions({ admission_steps }: any) {
  return (
    <section className="relative component-px component-py overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Image part */}
        <div
          data-aos="fade-right"
          className="relative order-2 lg:order-1 w-full flex flex-col"
        >
          <div className="relative z-10">
            <Image
              src={admission_one}
              alt=""
              className="w-60 lg:w-96 rounded-xl"
            />
          </div>
          <div className="-mt-16 ml-16 z-20">
            <Image src={admission_two} alt="" className="w-auto rounded-xl" />
          </div>
        </div>

        {/* Description part */}
        <div data-aos="fade-left" className="w-full order-1 lg:order-2">
          <div>
            <div className="lg:-ml-16 xl:-ml-32">
              <div className="flex items-center space-x-2">
                <h3 className="text-lg base:text-base lg:text-2xl font-bold text-primary uppercase">
                  ADMISSIONS
                </h3>
                <div className="bg-primary w-24 h-1"></div>
              </div>
              <p className="mt-2 lg:mt-4 text-lg md:text-xl lg:text-2xl font-medium lg:max-w-xl">
                Explore the admissions process and discover how you can become
                part of our college community.
              </p>
            </div>
            <div className="mt-4 lg:mt-8 xl:mt-16">
              <div className="border-t border-gray-300 pt-6">
                <h4 className="text-lg lg:text-xl font-semibold mb-4">
                  Admission Steps:
                </h4>
                <ol className="list-decimal pl-6">
                  {admission_steps?.map((data: any, index: any) => {
                    return (
                      <div key={index}>
                        <li className="mb-2">
                          <strong>{data?.title}:</strong> {data?.description}
                        </li>
                      </div>
                    );
                  })}
                </ol>
                <div className="flex mt-4 pl-4">
                  <SecondaryButton
                    buttonName="Apply now"
                    navigateTo="/apply-now"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
