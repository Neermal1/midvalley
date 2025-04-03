import NoticeCard from "./NoticeCard";

/* eslint-disable @next/next/no-img-element */
const noticeData = [
  {
    name: "Notice 1",
    image: "/logo.png",
    date: "24 January, 2024",
  },
  {
    name: "Notice 2",
    image: "/logo.png",
    date: "8 April, 2024",
  },
  {
    name: "Notice 2",
    image: "/logo.png",
    date: "8 April, 2024",
  },
  // Add more notices as needed
];

export default function NoticeList({ noticeData }: any) {
  return (
    <section className="component-px component-py">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {noticeData?.map((notice: any, index: number) => (
          <NoticeCard key={index} notice={notice} />
        ))}
      </div>
    </section>
  );
}
