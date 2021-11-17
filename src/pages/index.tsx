import "rc-drawer/assets/index.css";
import "typeface-dm-sans";
import { ThemeProvider } from "@theme-ui/theme-provider";

import { StickyProvider } from "contexts/app/app.provider";

import SEO from "components/seo";
import Layout from "components/layout";

import Banner from "sections/banner";
import Services from "sections/services";
import Featured from "sections/featured";
import Subscribe from "sections/subscribe";
import Pricing from "sections/pricing";

import theme from "theme";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <StickyProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <SEO title="Vazee BRANDS" />
            <Banner />
            <Services />
            <Subscribe />
            <Featured />
            <Pricing />
            <Subscribe />
          </Layout>
        </ThemeProvider>
      </StickyProvider>
    </>
  );
};

export default Home;
