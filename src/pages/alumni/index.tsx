/* eslint-disable @next/next/no-img-element */
import Banner from "@/components/globalcomponents/Banner";
import Introduction from "@/components/pagecomponents/alumnipage/Introduction";
import Testimonials from "@/components/pagecomponents/homepage/Testimonials";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import Layout from "@/layout/Layout";
import Metatag from "@/utils/Metatag";

export default function Alumni({ companyProfile, testimonial }: any) {
  return (
    <>
      <Metatag subheading="Alumni" />
      <Layout>
        <Banner
          headerName="Alumni"
          imageLink="https://media.istockphoto.com/id/1496195459/photo/young-graduates-throwing-their-mortarboard-in-the-air-while-celebrating-on-graduation.jpg?s=612x612&w=0&k=20&c=-GwKMY9ovlH_Y2SjnWqqUSUhEq1pDcWk2IF0ti5_odc="
        />
        <Introduction data={companyProfile} />
        <Testimonials testimonialsData={testimonial} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { data: companyProfile } = await SSR_fetchData("/company-profile");
    const { data: testimonial } = await SSR_fetchData("/home/testimonials");

    return {
      props: {
        companyProfile,
        testimonial,
      },
    };
  } catch (e: any) {
    console.log(e);
    return {
      props: {
        data: null,
      },
    };
  }
}
