import Link from "next/link";

export default function LatestNewsAndBlogs({ newsblogsData }: any) {
  return (
    <section className="component-px component-py">
      <div>
        <div className="flex items-center space-x-2">
          <h3 className="text-lg md:text-xl base:text-base lg:text-2xl font-bold text-primary uppercase">
            LATEST NEWS AND BlOGS
          </h3>
          <div className="bg-primary w-24 h-1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mt-4 md:mt-8">
          {newsblogsData?.map((blog: any, index: number) => {
            return (
              <div key={index}>
                <div className="w-full h-auto overflow-hidden rounded-lg cursor-pointer transition duration-300 transform">
                  <Link href={`/blogs/${blog?.slug}`}>
                    <div className="md:h-60 overflow-hidden">
                      <img
                        src={blog?.image_link}
                        alt={blog?.title}
                        className="w-full h-48 lg:h-full object-cover rounded-lg"
                      />
                    </div>

                    <div className="p-2">
                      <h3 className="text-xl font-bold mb-2">{blog?.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {new Date(blog?.created_at).toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </p>
                      <p
                        className="text-gray-700 mb-4 text-sm md:text-base text-justify  line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: blog?.description }}
                      />
                      <small className="text-primary font-medium text-sm lg:text-base">
                        Read More
                      </small>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
