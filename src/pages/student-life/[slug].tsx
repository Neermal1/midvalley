import Banner from "@/components/globalcomponents/Banner";
import Detail from "@/components/pagecomponents/studentlifedetailpage/Detail";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import Layout from "@/layout/Layout";
import Metatag from "@/utils/Metatag";

export default function StudentLifeDetail({ studentlife }: any) {
  return (
    <>
      <Metatag subheading="Student Life" />
      <Layout>
        <Banner
          headerName="Student Life"
          imageLink="https://images.unsplash.com/photo-1542868796-20f2ddc9d41f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Detail studentlife={studentlife} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  try {
    const { data: studentlife } = await SSR_fetchData(
      `/student-life/${params?.slug}`
    );
    return {
      props: {
        studentlife,
      },
    };
  } catch (e) {
    return {
      props: null,
    };
  }
}
