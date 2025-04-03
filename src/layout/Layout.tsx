import Footer from "@/components/globalcomponents/Footer";
import MobileNavbar from "@/components/globalcomponents/MobileNavbar";
import Navbar from "@/components/globalcomponents/Navbar";
import useFetchData from "@/hooks/useFetchData";
import { ReactNode } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Layout({ children }: { children: ReactNode }) {
  const { fetchedData: companyProfile } = useFetchData("/company-profile");
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <main>{children}</main>
      <FloatingWhatsApp
        phoneNumber={companyProfile?.company_phone}
        accountName="Mid Valley SS/College"
        avatar="/bgwhiteLogo.jpeg"
      />
      <Footer />
    </>
  );
}
