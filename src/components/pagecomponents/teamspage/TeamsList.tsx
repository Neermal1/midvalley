/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function TeamsList({ teamMember }: any) {
  return (
    <section className="component-px component-py">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="text-center mb-4 lg:mb-8">
          <h2 className="text-base md:text-lg lg:text-2xl text-primary font-bold">
            Meet the Team
          </h2>
          <h1 className="my-2 text-2xl lg:text-4xl font-bold">
            Behind the Success: Our Dedicated Team
          </h1>
          <p className="mx-auto w-full text-gray-500 max-w-4xl font-medium text-sm md:text-base lg:text-lg">
            From visionary leadership to creative talent, and technical wizards,
            each team member plays a pivotal role in delivering the exceptional
            service and innovative solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4">
          {teamMember?.map((data: any, index: number) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md p-6">
              <img
                src={data?.image_link}
                alt={data?.name}
                className="mx-auto mb-6 object-cover rounded-full w-32 h-32"
              />
              <h5 className="font-medium text-lg text-center">{data?.name}</h5>
              <h5 className="mb-2 text-base font-semibold text-gray-600 text-center">
                {data?.designation}
              </h5>
              <div className="flex justify-center items-center text-black space-x-4">
                {data?.facebook && (
                  <Link href={data?.facebook} target="__blank">
                    <FaFacebook
                      size={20}
                      className="hover:text-secondary cursor-pointer"
                    />
                  </Link>
                )}
                {data?.twitter && (
                  <Link href={data?.twitter} target="__blank">
                    <FaTwitter
                      size={20}
                      className="hover:text-secondary cursor-pointer"
                    />
                  </Link>
                )}

                {data?.linked_in && (
                  <Link href={data?.twitter} target="__blank">
                    <FaLinkedin
                      size={20}
                      className="hover:text-secondary cursor-pointer"
                    />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
