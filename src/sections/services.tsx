import React from "react";
import { Box, Container, Grid } from "theme-ui";

import BlockTitle from "components/block-title";
import ServiceCard from "components/cards/service-card";

import serviceImage1 from "assets/service-1.png";
import serviceImage2 from "assets/service-2.png";
import serviceImage3 from "assets/service-3.png";
import serviceImage4 from "assets/service-4.png";
import serviceImage5 from "assets/service-5.png";
import serviceImage6 from "assets/service-6.png";

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text: "des campagnes basées sur vos envies, vos disponibilités et votre budget.",
    heading: "Créer",
    path: "#",
  },
  {
    image: serviceImage2,
    text: "monitorer et suivre en temps réel les chiffres générés par vos campagnes.",
    heading: "Consulter",
    path: "#",
  },
  {
    image: serviceImage3,
    text: "astucieusement des points de vente grâce à différents critères de ciblage.",
    heading: "Cibler",
    path: "#",
  },
  {
    image: serviceImage4,
    text: "vous, vos points de vente, vos consommateurs et comprenez ce marché disparate.",
    heading: "Analyser",
    path: "#",
  },
  {
    image: serviceImage5,
    text: "les opportunités qui correspondent à votre marque et votre stratégie.",
    heading: "Identifier",
    path: "#",
  },
  {
    image: serviceImage6,
    text: "votre croissance en tirant profit des analyses et datas inédites à votre disposition.",
    heading: "Optimiser",
    path: "#",
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle title="Attendez-vous à..." text="(et plus encore...)" />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
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
