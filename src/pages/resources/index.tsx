import Banner from "@/components/globalcomponents/Banner";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import Layout from "@/layout/Layout";
import Metatag from "@/utils/Metatag";

export default function Resources({ companyProfile }: any) {
  return (
    <>
      <Metatag
        keywords="resources best resources nepal kathmandu "
        subheading="Resources"
        description=""
        ogImage="https://imageio.forbes.com/specials-images/imageserve/5e020def4e2917000783d582/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds"
      />
      <Layout>
        <Banner
          headerName="Resources"
          imageLink="https://imageio.forbes.com/specials-images/imageserve/5e020def4e2917000783d582/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds"
        />
        <section className="component-px component-py text-description">
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-lg base:text-base lg:text-2xl font-bold text-primary uppercase">
              Resources
            </h3>
            <div className="bg-primary w-24 h-1"></div>
          </div>
          <p
            className="mb-4"
            dangerouslySetInnerHTML={{
              __html: companyProfile?.resources,
            }}
          />
        </section>
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
  } catch (e) {
    return {
      props: null,
    };
  }
}
