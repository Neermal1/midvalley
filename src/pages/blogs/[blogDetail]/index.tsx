import Banner from "@/components/globalcomponents/Banner";
import DetailContent from "@/components/pagecomponents/newsblogdetailpage/DetailContent";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import Layout from "@/layout/Layout";
import Metatag from "@/utils/Metatag";

const BlogDetail = ({ blogInfo, blogSlug }: any) => {
  return (
    <div>
      <Metatag
        subheading={blogSlug
          ?.replace(/-/g, " ")
          .replace(/(^|\s)\S/g, function (t: any) {
            return t.toUpperCase();
          })}
        description={blogInfo?.detail?.meta_description}
        ogImage={blogInfo?.detail?.image_link}
        keywords={blogInfo?.detail.meta_keywords}
      />
      <Layout>
        <Banner
          headerName={blogSlug
            ?.replace(/-/g, " ")
            .replace(/(^|\s)\S/g, function (t: any) {
              return t.toUpperCase();
            })}
          imageLink="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <DetailContent newsblog={blogInfo} />
      </Layout>
    </div>
  );
};

export default BlogDetail;

export async function getServerSideProps({ params }: any) {
  const blogSlug = params?.blogDetail;
  try {
    const { data: blogInfo } = await SSR_fetchData(`/blog/${blogSlug}`);
    return {
      props: {
        blogInfo,
        blogSlug,
      },
    };
  } catch (e) {
    return {
      props: null,
    };
  }
}
