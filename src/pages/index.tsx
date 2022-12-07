import * as React from "react";
import type { PageProps } from "gatsby";
import Seo from "../components/seo";
import Header from "../components/header";
import IntroSection from "../sections/intro";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Seo title="Designed AI" />
      <main>
        <Header />
        <IntroSection />
      </main>
    </>
  );
};

export default IndexPage;
