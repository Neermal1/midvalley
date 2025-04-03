import React from "react";

const Curriculum = ({ first_year_course, second_year_course }: any) => {
  return (
    <section className="component-px component-py">
      <div className="container mx-auto lg:px-0">
        <h2 className="text-lg lg:text-2xl font-bold text-center text-primary mb-4">
          Curriculum
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-green-50 rounded-lg shadow-lg p-8">
            <h3 className="text-lg lg:text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-4">
              First Year Courses
            </h3>
            <div>
              {first_year_course?.map((data: any, index: number) => {
                return (
                  <div key={index}>
                    <div>{data}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg shadow-lg p-8">
            <h3 className="text-lg lg:text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-4">
              Second Year Courses
            </h3>
            <div>
              {second_year_course?.map((data: any, index: number) => {
                return (
                  <div key={index}>
                    <div>{data}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
