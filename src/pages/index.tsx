import React from "react";
import "rc-drawer/assets/index.css";
import "react-toastify/dist/ReactToastify.css";
import "typeface-dm-sans";
import { ThemeProvider } from "@theme-ui/theme-provider";
import { ToastContainer } from "react-toastify";

import { AppProvider } from "contexts/app/app.provider";

import SEO from "components/seo";
import Layout from "components/layout";

import Banner from "sections/banner";
import Featured from "sections/featured";
import Subscribe from "sections/subscribe";
import Services from "sections/services";

import theme from "theme";

import type { NextPage } from "next";
import { TOAST_AUTOCLOSE } from "constants/toast";

const Home: NextPage = () => (
  <AppProvider>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Vazee BRANDS" />
        <Banner />
        <Subscribe />
        <Services />
        <Featured />
      </Layout>
      <ToastContainer autoClose={TOAST_AUTOCLOSE} closeOnClick />
    </ThemeProvider>
  </AppProvider>
);

export default Home;
