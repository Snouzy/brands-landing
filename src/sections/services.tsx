/** @jsxImportSource theme-ui */

import React from "react";
import { Box, Container, Grid } from "theme-ui";

import BlockTitle from "components/block-title";
import ServiceCard from "components/cards/service-card";
import { MdCreateNewFolder } from "react-icons/md";
import { IoIosEye } from "react-icons/io";
import { GiHumanTarget } from "react-icons/gi";
import { HiOutlineIdentification } from "react-icons/hi";
import { DiGoogleAnalytics } from "react-icons/di";
import { BsBarChartLineFill } from "react-icons/bs";

const Services = () => {
  const SERVICES_DATA = [
    {
      text: "des campagnes basées sur vos envies, vos disponibilités et votre budget.",
      heading: "Créer",
      path: "#",
      icon: (
        <MdCreateNewFolder
          size={80}
          sx={{
            padding: 10,
            background: "#F03641",
            borderRadius: "20%",
            fill: "white",
          }}
        />
      ),
    },
    {
      text: "monitorer et suivre en temps réel les chiffres générés par vos campagnes.",
      heading: "Consulter",
      path: "#",
      icon: (
        <IoIosEye
          size={80}
          sx={{
            padding: 10,
            background: "#7530CC",
            borderRadius: "20%",
            fill: "white",
          }}
        />
      ),
    },
    {
      text: "astucieusement des points de vente grâce à différents critères de ciblage.",
      heading: "Cibler",
      path: "#",
      icon: (
        <GiHumanTarget
          size={80}
          sx={{
            padding: 10,
            background: "#345DEE",
            borderRadius: "20%",
            fill: "white",
          }}
        />
      ),
    },
    {
      text: "vous, vos points de vente, vos consommateurs et comprenez ce marché disparate.",
      heading: "Analyser",
      path: "#",
      icon: (
        <DiGoogleAnalytics
          size={80}
          sx={{
            padding: 10,
            background: "#FF7E47",
            borderRadius: "20%",
            fill: "white",
          }}
        />
      ),
    },
    {
      text: "les opportunités qui correspondent à votre marque et votre stratégie.",
      heading: "Identifier",
      path: "#",
      icon: (
        <HiOutlineIdentification
          size={80}
          sx={{
            padding: 10,
            background: "#48A7FF",
            borderRadius: "20%",
            fill: "white",
            path: {
              strokeWidth: "1px",
            },
          }}
        />
      ),
    },
    {
      text: "votre croissance en tirant profit des analyses et datas inédites à votre disposition.",
      heading: "Optimiser",
      path: "#",
      icon: (
        <BsBarChartLineFill
          size={80}
          sx={{
            padding: 10,
            background: "#F5497C",
            borderRadius: "20%",
            fill: "white",
            strokeWidth: 0.7,
          }}
        />
      ),
    },
  ];
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle title="Attendez-vous à..." text="(et plus encore...)" />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ text, heading, path, icon }, index) => (
            <ServiceCard
              text={text}
              heading={heading}
              path={path}
              key={index}
              icon={icon}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
    pb: ["80px", null, null, null, "80px", "100px", "140px"],
  },
  grid: {
    gridGap: "30px",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr", null, "1fr 1fr 1fr"],
  },
};
