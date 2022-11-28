import * as React from "react";
import { PageProps } from "gatsby";
import Seo from "../components/seo";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <Seo title="Designed AI" />
      <main>
        <h1>Page not found</h1>
      </main>
    </>
  );
};

export default NotFoundPage;
