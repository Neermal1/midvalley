import Banner from "@/components/globalcomponents/Banner";
import LatestNewsAndBlogs from "@/components/pagecomponents/homepage/LatestNewsAndBlogs";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import Layout from "@/layout/Layout";
import Metatag from "@/utils/Metatag";

const BlogPage = ({ companyProfile, newsblogsData }: any) => {
  return (
    <div>
      <Metatag
        subheading="Home"
        description={companyProfile?.meta_description}
        ogImage={companyProfile?.image_link}
        type="Website"
        keywords="best excellent nice blogs"
      />
      <Layout>
        <Banner
          headerName="Blogs"
          imageLink="https://www.sheffieldcommunitychurch.com/Images/content/2343/1024015.jpg"
        />
        <LatestNewsAndBlogs newsblogsData={newsblogsData} />
      </Layout>
    </div>
  );
};

export default BlogPage;

export async function getServerSideProps() {
  try {
    const { data: companyProfile } = await SSR_fetchData("/company-profile");
    const { data: newsblogsData } = await SSR_fetchData("/blogs");

    return {
      props: {
        companyProfile,
        newsblogsData,
      },
    };
  } catch (e) {
    return {
      props: null,
    };
  }
}
