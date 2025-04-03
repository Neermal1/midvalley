/* eslint-disable @next/next/no-img-element */
import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const { fetchedData } = useFetchData("/company-profile");
  return (
    <footer className=" text-white">
      <section className="component-px py-[33px] lg:pt-16 bg-[#00122F]">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:pr-8">
            <div className="flex flex-col">
              <div className="flex space-x-4 items-center pb-4">
                <div className="w-12 h-12 lg:w-24 lg:h-24 p-4 rounded-full flex items-center justify-center bg-white">
                  <img
                    src={fetchedData?.footer_logo_link}
                    alt="Company Logo"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <h1 className="text-xl font-bold">
                    {fetchedData?.company_name}
                  </h1>
                  <p className="text-sm"></p>
                </div>
              </div>
              <p
                className="pt-4 border-t text-sm"
                dangerouslySetInnerHTML={{
                  __html: fetchedData?.footer_text,
                }}
              />
            </div>
          </div>
          <div className="col-span-3">
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <h1 className="text-lg font-semibold mb-4">About College</h1>
                <ul className="space-y-2 text-sm lg:text-base list-none p-0">
                  <li>
                    <Link href="/about">About us</Link>
                  </li>

                  <li>
                    <Link href="/alumni">Alumni</Link>
                  </li>
                  <li>
                    <Link href="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/blogs">Blogs</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-lg font-semibold mb-4">Legal</h1>
                <ul className="space-y-2 text-sm lg:text-base list-none p-0">
                  <li>
                    <Link href="/terms-and-conditions">
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-lg font-semibold mb-4">Contact Us</h1>
                <ul className="space-y-2 text-sm lg:text-base p-0">
                  <li className="flex items-center  ">
                    <FaMapMarkerAlt className="mr-2" />
                    {fetchedData?.company_address}
                  </li>
                  <li className="flex items-center">
                    <FaEnvelope className="mr-2" />
                    {fetchedData?.company_email}
                  </li>
                  <li className="flex items-center">
                    <FaPhoneAlt className="mr-2" />
                    {fetchedData?.company_phone}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#00122F] component-px py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between ">
          <div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Mid Valley SS/College. All
              rights reserved.
            </p>
          </div>

          <div>
            <p className="text-sm">
              Designed and Developed by:{" "}
              <Link
                href="https://nextaussietech.com"
                target="_blank"
                className="hover:underline"
              >
                Next Aussie Tech
              </Link>
            </p>
          </div>

          <div className="flex space-x-2 mt-4 lg:mt-0">
            {fetchedData?.facebook && (
              <Link
                href={fetchedData?.facebook}
                target="_blank"
                className="text-white bg-green-800 p-2 rounded-full"
              >
                <FaFacebook className="text-base lg:text-lg" />
              </Link>
            )}
            {fetchedData?.twitter && (
              <Link
                href={fetchedData?.twitter}
                target="_blank"
                className="text-white bg-green-800 p-2 rounded-full"
              >
                <FaTwitter className="text-base lg:text-lg" />
              </Link>
            )}
            {fetchedData?.instagram && (
              <Link
                href={fetchedData?.instagram}
                target="_blank"
                className="text-white bg-green-800 p-2 rounded-full"
              >
                <FaInstagram className="text-base lg:text-lg" />
              </Link>
            )}
            {fetchedData?.youtube && (
              <Link
                href={fetchedData?.youtube}
                target="_blank"
                className="text-white bg-green-800 p-2 rounded-full"
              >
                <FaYoutube className="text-base lg:text-lg" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </footer>
  );
}
