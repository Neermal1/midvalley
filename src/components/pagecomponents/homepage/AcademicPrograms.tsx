import { PrimaryOutlinedButton } from "@/components/globalcomponents/Buttons";
import Link from "next/link";

export default function AcademicPrograms({ data }: any) {
  return (
    <section className="component-px component-py bg-gray-50 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="text-lg md:text-xl base:text-base lg:text-2xl font-bold text-primary uppercase">
              ACADEMIC PROGRAMS
            </h3>
            <div className="bg-primary w-24 h-1"></div>
          </div>
        </div>
      </div>

      <div className="mt-4 lg:mt-8 grid lg:grid-cols-3 gap-4 lg:gap-20">
        {data?.map((program: any, index: number) => {
          return (
            <div key={index}>
              {/* Link now directly wraps the content */}
              <Link href={`/academics/${program?.slug}`}>
                <div className="w-full h-full bg-white border-b-[#80bc4f] border-b-[4px] shadow-md rounded-lg hover:scale-105 hover:bg-green-50 transition duration-800">
                  <img
                    src={program?.image_link}
                    alt={program?.title}
                    className="w-full h-52 rounded-lg mb-4 object-cover"
                  />
                  <div className="flex flex-col gap-4 items-center justify-center p-6">
                    <h3 className="text-xl font-semibold mb-2">{program?.title}</h3>
                    <div className="flex">
                      <PrimaryOutlinedButton
                        buttonName="View details"
                        navigateTo={`/academics/${program?.slug}`}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
