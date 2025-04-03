import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import Layout from "@/layout/Layout";
import Metatag from "@/utils/Metatag";
import React from "react";

const TermsAndConditions = ({ companyProfile }: any) => {
  return (
    <>
      <Metatag subheading="Home" />
      <Layout>
        <section className="component-px component-py">
          <div className="mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2 mb-4">
              <h3 className="text-lg base:text-base lg:text-2xl font-bold text-primary uppercase">
                Terms & Conditions
              </h3>
              <div className="bg-primary w-24 h-1"></div>
            </div>
            <p
              className="mb-4"
              dangerouslySetInnerHTML={{
                __html: companyProfile?.terms_conditions,
              }}
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default TermsAndConditions;

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
