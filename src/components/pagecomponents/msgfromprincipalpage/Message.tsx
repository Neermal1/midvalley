/* eslint-disable @next/next/no-img-element */

const Message = ({ data }: any) => {
  const message =
    "Dear students, faculty, and staff,\n\nI am thrilled to welcome you all to another exciting academic year at our esteemed institution. As we embark on this journey together, I want to express my deepest gratitude to each and every one of you for your dedication, hard work, and commitment to excellence.\n\nThis year promises to be filled with opportunities for growth, learning, and achievement. Our faculty and staff are dedicated to providing you with the support and resources you need to succeed in your academic and personal endeavors.\n\nI encourage you to embrace challenges, pursue your passions, and make the most of every opportunity that comes your way. Remember, success is not just about reaching your goals; it's also about the journey and the lessons you learn along the way.\n\nAs we navigate the year ahead, let us continue to uphold our values of integrity, respect, and inclusivity. Let us strive to create a supportive and inclusive community where everyone feels valued and respected.\n\nI am confident that together, we will make this academic year one of our best yet. I look forward to celebrating your achievements and milestones throughout the year.\n\nWishing you all a successful and rewarding academic year!\n\nBest regards,\n[Principal's Name]";

  return (
    <section className="component-px component-py flex flex-col space-y-4 md:space-y-0 md:flex-row  md:space-x-8 mb-8">
      <div className="md:w-1/2">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-primary">
          Message from Principal
        </h1>
        <div
          className="text-sm md:text-base lg:text-lg text-gray-700 leading-7 text-justify"
          dangerouslySetInnerHTML={{
            __html: data?.message,
          }}
        />
      </div>

      <div className="md:w-1/2 relative flex  justify-center lg:p-8">
        <div className="relative">
          <div className="bg-primary opacity-10 rounded-lg absolute top-6 left-6 lg:top-12 lg:left-12 w-full h-full -z-10 t"></div>
          <img
            className="w-full h-full object-cover rounded-lg z-10"
            src={data?.imageLink}
            alt="CEO"
          />
        </div>
      </div>
    </section>
  );
};

export default Message;
