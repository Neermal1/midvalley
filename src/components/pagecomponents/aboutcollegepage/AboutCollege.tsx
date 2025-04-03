/* eslint-disable @next/next/no-img-element */
export default function AboutCollege({ introduction, image }: any) {
  return (
    <section className="component-px component-py">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="">
            <h2 className="text-2xl lg:text-4xl font-bold">
              Welcome to{" "}
              <span className="text-primary font-bold">
                Mid Valley SS/College
              </span>
            </h2>
            <p
              className="mt-4 text-gray-600 text-lg"
              dangerouslySetInnerHTML={{
                __html: introduction,
              }}
            />
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src={image}
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
