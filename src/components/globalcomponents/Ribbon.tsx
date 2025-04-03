import useFetchData from "@/hooks/useFetchData";
import { ICompanyProfile } from "@/interface/intrerface";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Ribbon() {
  const {
    fetchedData: companyProfile,
    loading,
  }: {
    fetchedData: ICompanyProfile;
    loading: boolean;
  } = useFetchData(`/company-profile`);

  if (loading) {
    return <div>Sorry the datas are loading</div>;
  }
  return (
    <section className="component-px bg-secondary py-2">
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center space-x-2">
          {companyProfile?.facebook && (
            <Link href={`${companyProfile?.facebook}`} target="__blank">
              <FaFacebook className="md:text-lg" />
            </Link>
          )}
          {companyProfile?.instagram && (
            <Link href={`${companyProfile?.instagram}`} target="__blank">
              <FaInstagram className="md:text-lg" />
            </Link>
          )}
          {companyProfile?.twitter && (
            <Link href={`${companyProfile?.twitter}`} target="__blank">
              <FaTwitter className="md:text-lg" />
            </Link>
          )}
          {companyProfile?.youtube && (
            <Link href={`${companyProfile?.youtube}`} target="__blank">
              {" "}
              <FaYoutube className="md:text-lg" />
            </Link>
          )}
        </div>

        <div className="flex items-center  gap-4 space-x-1">
          <Link href="/notice">
            <span className="text-base lg:text-md">Notice</span>
          </Link>
          <Link href="/apply-now">
            <span className="text-base lg:text-md">Apply Now</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
