/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const StudentLife = ({ studentlifeData }: any) => {
  return (
    <section className="component-px component-py ">
      <div className="">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h1 className="uppercase text-base text-lg lg:text-2xl font-bold text-primary mb-2 lg:mb-4">
              Student Life
            </h1>
            <p className="text-lg lg:text-2xl font-medium lg:max-w-4xl">
              Explore the vibrant student life at Mid Valley SS/College, where
              opportunities for growth, engagement, and fun abound!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-8 lg:mt-16">
          {studentlifeData?.map((item: any, index: any) => (
            <Link key={index} href={`/student-life/${item?.slug}`}>
              <div
                className={`m-4 w-64 h-96 bg-gray-800 relative rounded-xl overflow-hidden cursor-pointer ${
                  index % 2 === 0 ? "md:-mt-4" : ""
                }`}
              >
                <img
                  src={item?.image_link}
                  alt={item?.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center text-white transition-opacity duration-500 opacity-80 lg:opacity-0  lg:hover:opacity-80 ${
                    index % 2 === 0 ? "bg-green-800" : "bg-blue-800"
                  }`}
                >
                  <h2 className="text-lg font-bold text-center p-4">
                    {item?.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
