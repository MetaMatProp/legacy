import * as React from "react";
import type { PageProps } from "gatsby";
import Seo from "../components/seo";
import Header from "../components/header";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Seo title="Designed AI" />
      <main>
        <Header />
      </main>
    </>
  );
};

export default IndexPage;
