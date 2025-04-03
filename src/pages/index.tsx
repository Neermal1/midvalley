import About from "@/components/pagecomponents/homepage/About";
import AcadeimcPrograms from "@/components/pagecomponents/homepage/AcademicPrograms";
import Admissions from "@/components/pagecomponents/homepage/Admissions";
import CTA from "@/components/pagecomponents/homepage/CTA";
import HeroSlider from "@/components/pagecomponents/homepage/HeroSlider";
import LatestNewsAndBlogs from "@/components/pagecomponents/homepage/LatestNewsAndBlogs";
import NoticePopup from "@/components/pagecomponents/homepage/NoticePopup";
import StudentLife from "@/components/pagecomponents/homepage/StudentLife";
import Testimonials from "@/components/pagecomponents/homepage/Testimonials";
import Message from "@/components/pagecomponents/msgfromprincipalpage/Message";
import Layout from "@/layout/Layout";
import Metatag from "@/utils/Metatag";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";

export default function Home({
  sliders,
  academicPrograms,
  admission_steps,
  student_life,
  testimonial,
  newsblogsData,
  companyProfile,
  whyUs,
}: any) {
  return (
    <>
      <Metatag
        subheading={companyProfile?.meta_title}
        description={companyProfile?.meta_description}
        ogImage={companyProfile?.image_link}
        type="Website"
      />
      <Layout>
        <HeroSlider data={sliders} />
        <About featuresData={whyUs} />
        <AcadeimcPrograms data={academicPrograms} />
        <Message
          data={{
            message: companyProfile?.principal_message,
            imageLink: companyProfile?.principal_image_link,
          }}
        />
        <Admissions admission_steps={admission_steps} />
        <CTA />
        <StudentLife studentlifeData={student_life} />
        <Testimonials testimonialsData={testimonial} />
        <LatestNewsAndBlogs newsblogsData={newsblogsData} />
        <NoticePopup />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { data: companyProfile } = await SSR_fetchData("/company-profile");
    const { data: sliders } = await SSR_fetchData("/home/sliders");
    const { data: academicPrograms } = await SSR_fetchData(
      "/home/academic-programs"
    );
    const { data: admission_steps } = await SSR_fetchData(
      "/home/admission-steps"
    );
    const { data: student_life } = await SSR_fetchData("/home/student-life");

    const { data: testimonial } = await SSR_fetchData("/home/testimonials");
    const { data: newsblogsData } = await SSR_fetchData("/home/blogs");
    const { data: whyUs } = await SSR_fetchData("/home/why-us");

    return {
      props: {
        sliders,
        academicPrograms,
        admission_steps,
        student_life,
        testimonial,
        newsblogsData,
        companyProfile,
        whyUs,
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
