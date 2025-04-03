import Banner from "@/components/globalcomponents/Banner";
import Content from "@/components/pagecomponents/contactpage/Content";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import Layout from "@/layout/Layout";
import Metatag from "@/utils/Metatag";

export default function ContactPage({ companyProfile }: any) {
  return (
    <>
      <Metatag
        keywords="contact contact us best contact nepal kathmandu "
        subheading="Contact"
        ogImage="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Layout>
        <Banner
          headerName="Contact us"
          imageLink="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Content companyProfile={companyProfile} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { data: companyProfile } = await SSR_fetchData(`/company-profile`);

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
