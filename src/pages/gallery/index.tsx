import Banner from "@/components/globalcomponents/Banner";
import AlbumList from "@/components/pagecomponents/gallerypage/Albums";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import Layout from "@/layout/Layout";
import Metatag from "@/utils/Metatag";

export default function GalleryPage({ galleryData }: any) {
  return (
    <>
      <Metatag
        subheading="Gallery"
        description=""
        ogImage="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Layout>
        <Banner
          headerName="Our Gallery"
          imageLink="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <AlbumList galleryData={galleryData} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { data: galleryData } = await SSR_fetchData("/galleries");

    return {
      props: {
        galleryData,
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
