import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Detail({ studentlife }: { studentlife: any }) {
  return (
    <section className="component-px py-8 lg:py-16">
      <div className="grid lg:grid-cols-8 gap-[150px]">
        {/* news detail */}
        <div className="lg:col-span-5">
          <h1 className="text-2xl lg:text-4xl font-medium">
            {studentlife?.detail?.title}
          </h1>

          <div className="my-4 lg:my-8 lg:h-96 overflow-hidden rounded-xl">
            <img
              src={studentlife?.detail?.image_link}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <p
            className="text-sm md:text-base lg:text-lg whitespace-pre-line text-justify"
            dangerouslySetInnerHTML={{
              __html: studentlife?.detail?.description,
            }}
          />
        </div>

        <div className="lg:col-span-3">
          <div className="sticky top-24 flex flex-col gap-10">
            <h2 className="text-xl lg:text-2xl font-semibold mb-4">
              Other Student Life
            </h2>
            <ul className="space-y-4 flex flex-col gap-6 list-none p-0">
              {studentlife?.others?.map((stdlife: any) => (
                <li key={stdlife?.slug}>
                  <Link
                    href={`/student-life/${stdlife?.slug}`}
                    className="flex space-x-4 items-center"
                  >
                    <img
                      src={stdlife?.image_link}
                      alt={stdlife?.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-base font-semibold">
                        {stdlife?.title}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
