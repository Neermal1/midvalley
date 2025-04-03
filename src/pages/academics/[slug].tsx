import Banner from "@/components/globalcomponents/Banner";
import AdmissionRequirements from "@/components/pagecomponents/academicsdetailpage/AdmissionRequirements";
import Curriculum from "@/components/pagecomponents/academicsdetailpage/Curriculum";
import Overview from "@/components/pagecomponents/academicsdetailpage/Overview";
import { academicsData } from "@/data/academicsData";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import Layout from "@/layout/Layout";
import Metatag from "@/utils/Metatag";

export default function AcademicProgramDetailPage({
  academicDetail,
  slug,
}: any) {
  return (
    <>
      <Metatag
        subheading={slug
          ?.replace(/-/g, " ")
          .replace(/(^|\s)\S/g, function (t: any) {
            return t.toUpperCase();
          })}
        description={academicDetail?.description}
        ogImage={academicDetail?.image_link}
        type="Website"
        keywords="academics best academics nepal kathmandu "
      />
      <Layout>
        <Banner
          headerName={academicDetail?.title}
          imageLink={academicDetail?.image_link}
        />
        <Overview content={academicDetail?.description} />
        <Curriculum
          first_year_course={academicDetail?.first_year_courses}
          second_year_course={academicDetail?.second_year_courses}
        />
        <AdmissionRequirements
          eligibility_criteria={academicDetail?.eligibility_criteria}
        />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  try {
    const { data: academicDetail } = await SSR_fetchData(
      `academic-programs/${params?.slug}`
    );

    return {
      props: {
        academicDetail,
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
