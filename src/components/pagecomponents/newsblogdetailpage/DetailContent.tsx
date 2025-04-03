import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function DetailContent({ newsblog }: any) {
  return (
    <section className="component-px py-8 lg:py-16">
      <div className="grid lg:grid-cols-8 lg:gap-20 gap-10">
        {/* news detail */}
        <div className="lg:col-span-5">
          <h1 className="text-2xl lg:text-4xl font-semibold text-primary">
            {newsblog?.detail?.title}
          </h1>
          <p className="text-sm lg:text-base text-gray-500 mt-2">
            {new Date(newsblog?.detail?.created_at).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </p>

          <div className="my-4 lg:my-8 lg:h-96 overflow-hidden rounded-xl">
            <img
              src={newsblog?.detail?.image_link}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <p
            className="text-sm md:text-base lg:text-lg whitespace-pre-line text-justify"
            dangerouslySetInnerHTML={{
              __html: newsblog?.detail?.description,
            }}
          />
        </div>

        {/* other related news */}
        <div className="lg:col-span-3">
          <div className="sticky top-24">
            <h2 className="text-xl lg:text-2xl font-semibold text-primary mb-5">
              Other News & Blogs
            </h2>
            <ul className="flex flex-col gap-10 list-none p-0">
              {newsblog?.related?.map((blog: any) => (
                <li key={blog?.slug}>
                  <Link
                    href={`/blogs/${blog?.slug}`}
                    className="flex space-x-4 items-center"
                  >
                    <img
                      src={blog?.image_link}
                      alt={blog?.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-base font-semibold">{blog?.title}</h3>
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
