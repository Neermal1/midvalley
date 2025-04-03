import Banner from "@/components/globalcomponents/Banner";
import TeamsList from "@/components/pagecomponents/teamspage/TeamsList";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import Layout from "@/layout/Layout";
import Metatag from "@/utils/Metatag";

//images
import team from "../../../public/banners/teambanner.jpg";
import Image from "next/image";

export default function About({ teams }: any) {
  return (
    <>
      <Metatag subheading="Teams" />

      <Layout>
        <section className="relative">
          <Image
            src={team}
            alt="team"
            className="w-full md:h-80 lg:h-80 object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 flex items-center justify-center"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <h1 className="text-white text-center text-2xl lg:text-4xl font-bold">
              Our Team
            </h1>
          </div>
        </section>
        <TeamsList teamMember={teams} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { data: teams } = await SSR_fetchData("/teams");

    return {
      props: {
        teams,
      },
    };
  } catch (e) {
    return {
      props: null,
    };
  }
}
