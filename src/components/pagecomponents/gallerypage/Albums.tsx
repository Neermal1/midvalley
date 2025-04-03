/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function AlbumList({ galleryData }: any) {
  return (
    <section className="component-px component-py">
      <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-8 lg:gap-12 mb-4 md:mb-8">
        {galleryData?.map((album: any, index: any) => (
          <div key={index} className="relative ">
            <Link href={`/gallery/${album?.slug}`} className="relative">
              <div className="relative">
                <img
                  src={album?.image_link}
                  alt={album?.name}
                  className="w-full h-[40vh] object-cover"
                />
                <div className="p-2 mt-4">
                  <p className="text-base  text-[22px] font-semibold">
                    {album?.name}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
