/* eslint-disable @next/next/no-img-element */

export default function About({ featuresData }: any) {
  return (
    <section className="component-px component-py">
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {featuresData?.map((feature: any, index: any) => (
            <div key={index} className="flex flex-col">
              <div className="flex justify-center">
                <img
                  src={feature?.image_link}
                  alt={feature?.title}
                  className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-secondary mb-2 p-2 "
                />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-center">
                {feature?.title}
              </h4>
              <p className="text-sm text-gray-600 text-center">
                {feature?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
