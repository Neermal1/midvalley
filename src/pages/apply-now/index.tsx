import ApplyForm from "@/components/pagecomponents/applyForm/ApplyForm";
import Layout from "@/layout/Layout";
import Metatag from "@/utils/Metatag";

//images
import apply from "../../../public/banners/apply.jpg";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <Metatag subheading="Apply Now" description="" />
      <Layout>
        <div className="component-px component-py flex flex-col gap-20">
          <div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <h1 className="uppercase text-base lg:text-[25px] font-bold text-primary mb-2 lg:mb-4">
                  Apply Now
                </h1>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-8">
            <div className="lg:col-span-4">
              <div className="sticky top-[140px]">
                <Image
                  src={apply}
                  alt=""
                  className="rounded-[8px] h-[60vh] w-[100%] object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-end">
              <ApplyForm />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default index;
