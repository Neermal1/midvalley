import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import Layout from "@/layout/Layout";
import Metatag from "@/utils/Metatag";
import React from "react";

export default function PrivacyPolicy({ companyProfile }: any) {
  return (
    <Layout>
      <Metatag subheading="Privacy Policy"></Metatag>
      <section className="component-px component-py">
        <div className="mx-auto bg-gray-100 rounded-lg shadow-lg p-4 lg:p-8">
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-lg base:text-base lg:text-2xl font-bold text-primary uppercase">
              Privacy Policy
            </h3>
            <div className="bg-primary w-24 h-1"></div>
          </div>
          <p
            className="text-lg mb-8 text-gray-700"
            dangerouslySetInnerHTML={{
              __html: companyProfile?.privacy_policy,
            }}
          />
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const { data: companyProfile } = await SSR_fetchData("/company-profile");

    return {
      props: {
        companyProfile,
      },
    };
  } catch (e: any) {
    console.log(e);
    return {
      props: {
        data: null,
      },
    };
  }
}
