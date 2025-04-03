import {
  PiFacebookLogoThin,
  PiInstagramLogoThin,
  PiTwitterLogoThin,
  PiYoutubeLogoThin,
} from "react-icons/pi";

import Link from "next/link";
import { MdEmail, MdLocationOn, MdPhone, MdTimer } from "react-icons/md";
import ContactForm from "./ContactForm";

export default function Content({ companyProfile }: any) {
  return (
    <section className="pt-8 lg:pt-16 bg-gray-100">
      <div className="component-px">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-center">
            <div className="lg:max-w-4xl text-gray-700">
              <p className="text-base lg:text-lg text-center">
                If you have any inquiries regarding courses, programs, or
                academic offerings, feel free to reach out to us. We are here to
                address all your questions and concerns.
              </p>
              <p className="text-base lg:text-lg text-center mt-4 lg:mt-8">
                Here&apos;s how you can get in touch with Mid Valley College:
              </p>
            </div>
          </div>
          <div className="mt-4 lg:mt-8 xl:mt-12 grid lg:grid-cols-3 gap-8 lg:gap-16">
            {/* contact form  */}
            <div className="col-span-2">
              <ContactForm />
            </div>

            {/* contact infos */}
            <div className="">
              <div className="flex flex-col space-y-4 bg-white shadow-lg p-4 rounded-lg border text-gray-700">
                {companyProfile?.company_address && (
                  <div className="flex items-center">
                    <MdLocationOn className="mr-2" />
                    <span>{companyProfile?.company_address}</span>
                  </div>
                )}
                {companyProfile?.company_email && (
                  <div className="flex items-center">
                    <MdEmail className="mr-2" />
                    <span>{companyProfile?.company_email}</span>
                  </div>
                )}

                {companyProfile?.company_phone && (
                  <div className="flex items-center">
                    <MdPhone className="mr-2" />
                    <span>{companyProfile?.company_phone}</span>
                  </div>
                )}

                <div className="flex items-center">
                  <MdTimer className="mr-2" />
                  <span>9:00AM to 5:30PM (Sunday to Friday)</span>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium my-4">Social medias:</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    {companyProfile?.facebook && (
                      <Link href={companyProfile?.facebook}>
                        <PiFacebookLogoThin size={24} />
                      </Link>
                    )}
                    {companyProfile?.instagram && (
                      <Link href={companyProfile?.instagram}>
                        <PiInstagramLogoThin size={24} />
                      </Link>
                    )}
                    {companyProfile?.twitter && (
                      <Link href={companyProfile?.twitter}>
                        <PiTwitterLogoThin size={24} />
                      </Link>
                    )}

                    {companyProfile?.youtube && (
                      <Link href={companyProfile?.youtube}>
                        <PiYoutubeLogoThin size={24} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 lg:mt-8 xl:mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.880053280336!2d85.33219357525316!3d27.69010187619248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ff1a36dac7%3A0x7d6c6d5b99a402ec!2sNext%20Aussie%20Tech%20-%20Kathmandu!5e0!3m2!1sen!2snp!4v1712727617834!5m2!1sen!2snp"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
