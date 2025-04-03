import Banner from "@/components/globalcomponents/Banner";
import Message from "@/components/pagecomponents/msgfromprincipalpage/Message";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import Layout from "@/layout/Layout";
import Metatag from "@/utils/Metatag";

export default function About({ companyProfile }: any) {
  return (
    <>
      <Metatag
        subheading="Message From Principal"
        description={companyProfile?.meta_description}
        ogImage={companyProfile?.image_link}
        type="Website"
      />
      <Layout>
        <Banner
          headerName="About us"
          imageLink="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Message
          data={{
            message: companyProfile?.principal_message,
            imageLink: companyProfile?.principal_image_link,
          }}
        />
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
  } catch (e) {
    return {
      props: null,
    };
  }
}
