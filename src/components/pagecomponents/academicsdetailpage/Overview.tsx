// Overview.js
interface OverviewProps {
  content: string;
}
export default function Overview({ content }: OverviewProps) {
  return (
    <section className="component-px component-py">
      <div className="">
        <h2 className="text-lg lg:text-2xl font-bold mb-4">Overview</h2>
        <p
          className="text-description"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>
    </section>
  );
}
