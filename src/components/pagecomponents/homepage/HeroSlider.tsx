import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/globalcomponents/Buttons";
import { Carousel } from "antd";

const HeroSlider = ({ data: sliderData }: any) => {
  const title = sliderData?.section?.title;
  const description = sliderData?.section?.description;

  return (
    <div className="">
      <Carousel autoplay={true}>
        {sliderData?.sliders?.map((data: any, index: any) => {
          return (
            <div key={index} className="relative">
              <div
                className="lg:h-screen bg-center   bg-cover bg-no-repeat h-[30vh] w-full md:h-[38vh]"
                style={{
                  backgroundImage: `url(${data?.image_link})`,
                }}
              >
                {data?.show_title == "on" && (
                  <div className="absolute lg:h-screen h-[30vh] w-full md:h-[38vh] bg-black opacity-40 top-0 bottom-0"></div>
                )}
                {data?.show_title == "on" && (
                  <div className="component-px lg:text-start text-center  h-[100%]  text-white z-10 relative flex flex-col gap-4 lg:items-start  justify-center ">
                    <h1 className="text-[20px] lg:text-5xl font-bold  mb-4  lg:w-[50%] leading-1">
                      {title}
                    </h1>

                    <div className="flex items-center justify-center space-x-4">
                      <PrimaryButton
                        buttonName="About us"
                        navigateTo="/about"
                      />
                      <SecondaryButton
                        buttonName="Contact us"
                        navigateTo="/contact"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HeroSlider;
