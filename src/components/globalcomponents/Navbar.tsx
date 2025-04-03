/* eslint-disable @next/next/no-img-element */
import React from "react";
import Ribbon from "./Ribbon";
import Link from "next/link";
import useFetchData from "@/hooks/useFetchData";

const aboutItems = [
  { text: "About College", link: "/about" },
  { text: "Message from Principal", link: "/message_from_principal" },
  { text: "Our Team", link: "/team" },
];

function NavItem({ text, link }: any) {
  return (
    <Link href={link}>
      <span className="font-semibold text-base">{text}</span>
    </Link>
  );
}

export default function Navbar() {
  const { fetchedData: academic_programs, loading } = useFetchData(
    `/nav/academic-programs`
  );
  const academicProgramsItems = academic_programs?.map((data: any) => {
    return {
      text: data?.title,
      link: `/academics/${data?.slug}`,
    };
  });

  const { fetchedData: companyProfile } = useFetchData("/company-profile");

  if (loading) {
    return <div>Loading</div>;
  } else if (academic_programs) {
    return (
      <>
        <Ribbon />
        <nav className="hidden lg:block bg-white shadow-md sticky top-0 z-50">
          <div className="w-full component-px">
            <div className="py-2 flex items-center justify-between">
              <Link href="/">
                <img
                  src={companyProfile?.logo_link}
                  alt="Logo"
                  className="h-8 lg:h-[4.5rem]"
                />
              </Link>

              {/* Nav items */}
              <div className="flex space-x-4 lg:space-x-8">
                <NavItem text="Home" link="/" />
                
                <NavItem text="Resources" link="/resources" />
                <NavItem text="Gallery" link="/gallery" />
                {/* New Nav Items */}
                <NavItem text="Downloads" link="/downloads" />
                <NavItem text="Notices" link="/notices" />
                <NavItem text="Contact us" link="/contact" />
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  } else {
    return <div>Sorry something went wrong!!</div>;
  }
}
