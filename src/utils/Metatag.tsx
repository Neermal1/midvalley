//interface
import { IMetatags } from "@/interface/intrerface";
import Head from "next/head";

const Metatag = ({
  heading,
  subheading,
  description,
  ogImage,
  type,
  keywords,
}: IMetatags) => {
  const defaultSubheading = "Welcome to Mid Valley SS/College - Providing quality education and fostering growth in students.";
  const defaultDescription = "Welcome to Mid Valley SS/College - Providing quality education and fostering growth in students.";
  const defaultKeywords = "education, college, learning, growth, development, Mid Valley SS/College";
  return (
    <Head>
      <meta charSet="UTF-8"></meta>
      <title>{`${
        heading ? heading : "Mid Valley SS/College"
      } - ${subheading}`}</title>
      <meta property="og:image" content={ogImage} />
      <meta name="title" content={subheading ? subheading : defaultSubheading} />
      <meta name="description" content={description ? description : defaultDescription} />
      <meta name="keywords" content={keywords ? keywords : defaultKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1e1e1e"></meta>
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:locale" content="en" />
      <meta property="og:type" content={type ? type : "website"} />
      <meta name="og:title" content={subheading ? subheading : defaultSubheading} />
      <meta
        property="og:description"
        content={description ? description : defaultDescription}
      />
    </Head>
  );
};

export default Metatag;
