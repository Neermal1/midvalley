/* eslint-disable @next/next/no-img-element */
import Banner from "@/components/globalcomponents/Banner";
import AboutCollege from "@/components/pagecomponents/aboutcollegepage/AboutCollege";
import MissionVision from "@/components/pagecomponents/aboutcollegepage/MissionVision";
import CTA from "@/components/pagecomponents/homepage/CTA";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import Layout from "@/layout/Layout";
import Metatag from "@/utils/Metatag";

//images
import aboutbanner from "../../../public/banners/aboutbanner.jpg";
import Image from "next/image";

export default function About({ companyProfile }: any) {
  return (
    <>
      <Metatag
        subheading="About"
        description={companyProfile?.meta_description}
        ogImage={companyProfile?.image_link}
        type="Website"
      />
      <Layout>
        <section className="relative">
          <Image
            src={aboutbanner}
            alt="about -us"
            className="w-full md:h-80 lg:h-80 object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 flex items-center justify-center"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <h1 className="text-white text-center text-2xl lg:text-4xl font-bold">
              About Us
            </h1>
          </div>
        </section>
        <AboutCollege
          introduction={companyProfile?.introduction}
          image={companyProfile?.image_link}
        />
        <MissionVision
          data={{
            mission: companyProfile?.mission,
            vision: companyProfile?.vision,
            values: companyProfile?.values,
          }}
        />
        <CTA />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { data: companyProfile } = await SSR_fetchData("/company-profile");

    return {
      props: {
        companyProfile,
      },
    };
  } catch (e: any) {
    return {
      props: {
        data: null,
      },
    };
  }
}
