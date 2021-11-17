import "rc-drawer/assets/index.css";
import "typeface-dm-sans";
import { ThemeProvider } from "@theme-ui/theme-provider";

import { StickyProvider } from "contexts/app/app.provider";

import SEO from "components/seo";
import Layout from "components/layout";

import theme from "theme";
import Banner from "sections/banner";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <StickyProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <SEO title="Vazee BRANDS" />
            <Banner />
          </Layout>
        </ThemeProvider>
      </StickyProvider>
    </>
  );
};

export default Home;
