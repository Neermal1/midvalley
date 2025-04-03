import Banner from "@/components/globalcomponents/Banner";
import NoticeList from "@/components/pagecomponents/noticepage/NoticeList";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import Layout from "@/layout/Layout";
import Metatag from "@/utils/Metatag";

export default function Notice({ noticeData }: any) {
  return (
    <>
      <Metatag subheading="Notice" description="" />
      <Layout>
        <Banner
          headerName="Notice"
          imageLink="https://imageio.forbes.com/specials-images/imageserve/5e020def4e2917000783d582/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds"
        />
        <NoticeList noticeData={noticeData} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { data: noticeData } = await SSR_fetchData(`/notices`);
    return {
      props: {
        noticeData,
      },
    };
  } catch (e) {
    return {
      props: null,
    };
  }
}
