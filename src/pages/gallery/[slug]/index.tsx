/* eslint-disable @next/next/no-img-element */
import Banner from "@/components/globalcomponents/Banner";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import Layout from "@/layout/Layout";
import Metatag from "@/utils/Metatag";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function AlbumDetail({ galleryDetail, slug }: any) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <Metatag
        subheading={slug
          ?.replace(/-/g, " ")
          .replace(/(^|\s)\S/g, function (t: any) {
            return t.toUpperCase();
          })}
        description=""
      />
      <Layout>
        <Banner
          headerName={slug
            ?.replace(/-/g, " ")
            .replace(/(^|\s)\S/g, function (t: any) {
              return t.toUpperCase();
            })}
          imageLink="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <section className="component-px py-8 lg:py-16 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-4 md:mt-8">
            {galleryDetail?.map((photo: any, index: number) => (
              <div
                key={index}
                className="relative overflow-hidden cursor-pointer"
                onClick={() => {
                  setCurrentIndex(index);
                  setOpen(true);
                }}
              >
                <img
                  src={photo?.image_link}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-96 object-cover"
                />
              </div>
            ))}
          </div>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={galleryDetail?.map((photo: any, index: number) => ({
              src: photo?.image_link,
              alt: `Gallery Image ${index + 1}`,
            }))}
            index={currentIndex} // Set the current index for the lightbox
          />
        </section>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  const { slug } = params;
  try {
    const { data: galleryDetail } = await SSR_fetchData(`/gallery/${slug}`);

    return {
      props: {
        galleryDetail,
        slug,
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
