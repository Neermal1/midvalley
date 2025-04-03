/* eslint-disable @next/next/no-img-element */
export default function Introduction({ data }: any) {
  return (
    <section className="component-px component-py">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="">
            <h2 className="text-2xl lg:text-4xl text-primary font-bold">
              Our Proud Alumni Community
            </h2>
            <p
              className="mt-4 text-gray-600 text-lg"
              dangerouslySetInnerHTML={{
                __html: data?.alumni,
              }}
            />
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src={data?.alumni_image_link}
              alt="Alumni Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
