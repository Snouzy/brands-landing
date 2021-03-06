/** @jsxImportSource theme-ui */

import { useState } from "react";
import { keyframes } from "@emotion/react";
import { Box, Container, Grid, Button, ThemeUICSSObject } from "theme-ui";

import BlockTitle from "components/block-title";
import PriceCard from "components/cards/price-card";

import priceIcon1 from "assets/price-user-1-1.svg";
import priceIcon2 from "assets/price-user-1-2.svg";
import Subscribe from "./subscribe";

export interface Plan {
  recommended: string | null;
  title: string;
  icon: string;
  amount: string;
  options: {
    status: boolean;
    label: string;
  }[];
}
const BASE_PLAN = [
  {
    recommended: null,
    title: "Gratuit",
    icon: priceIcon1,
    amount: "-€/an",
    options: [
      {
        status: true,
        label: "Nombre de commande et statut totaux",
      },
      {
        status: true,
        label: "Répartition géographique des menus",
      },
      {
        status: true,
        label: "Suivi du nombre d'affichages des campagnes médias",
      },
      {
        status: true,
        label: "Suivi du nombre de consommateurs des campagnes médias",
      },
      {
        status: true,
        label: "Suivi du nombre d'affaches totaux des campagnes d'activation",
      },
      {
        status: true,
        label: "Suivi du nombre de participants des campagnes d'activation",
      },
      {
        status: true,
        label: "Suivi du nombre de participations des campagnes d'activation",
      },
    ],
  },

  {
    recommended: null,
    title: "Abonnement 1",
    icon: priceIcon2,
    amount: "--.---€/an",
    options: [
      {
        status: true,
        label: "Plan gratuit",
      },
      {
        status: true,
        label: "Nombre de scans par établissement",
      },
      {
        status: true,
        label: "Listing des points de ventes",
      },
      {
        status: true,
        label: "Listing des points de vente participants",
      },
      {
        status: true,
        label: "Distribution numérique",
      },
      {
        status: true,
        label: "Segmentation géographique",
      },
      {
        status: true,
        label: "Typologie d'établissement",
      },
    ],
  },
  {
    recommended: null,
    title: "Abonnement 2",
    icon: priceIcon2,
    amount: "--.---€/an",
    options: [
      {
        status: true,
        label: "Abonnement 1",
      },
      {
        status: true,
        label:
          "Alertes et notifications du mouvements de la distribution numérique",
      },
      {
        status: true,
        label: "Alertes et notifications du mouvements des prix",
      },
      {
        status: true,
        label: "Listing est résultat par point de vente",
      },
      {
        status: true,
        label: "Analyse des additions et factures",
      },
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState<{
    active: string;
    pricingPlan: Plan[] | JSX.Element;
  }>({
    active: "base",
    pricingPlan: BASE_PLAN,
  });

  const handlePlan = (wanted: string) => {
    if (wanted === "base") {
      setPlan({
        ...plan,
        active: "base",
        pricingPlan: BASE_PLAN,
      });
    }
    if (wanted === "small") {
      setPlan({
        ...plan,
        active: "small",
        pricingPlan: (
          <Subscribe
            header="Nous avons prévu le coup !"
            text="Laissez-nous vous contacter pour en savoir plus."
          />
        ),
      });
    }
  };
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>
      <Container>
        <BlockTitle
          title="Des abonnements adaptés à tous"
          text="Découvrez nos abonnements"
        />
        <Box sx={styles.btnWrap}>
          <Button
            onClick={() => handlePlan("base")}
            className={`${plan.active === "base" ? "active" : ""}`}
          >
            Plan de base
          </Button>
          <Button
            onClick={() => handlePlan("small")}
            className={`${plan.active === "small" ? "active" : ""}`}
          >
            Je suis une petite équipe
          </Button>
        </Box>

        {Array.isArray(plan.pricingPlan) ? (
          <Grid sx={styles.grid}>
            {plan.pricingPlan.map((price, index) => (
              <PriceCard
                data={price}
                key={`${plan.active}-card--key${index}`}
              />
            ))}
          </Grid>
        ) : (
          <>{plan.pricingPlan}</>
        )}
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles: Record<string, ThemeUICSSObject> = {
  pricing: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
    pb: ["80px", null, null, null, "80px", "100px", "140px"],
  },
  btnWrap: {
    width: ["100%", "100%", "500px", null, null, null],
    mt: ["-20px", null, null, "0px"],
    mb: ["40px", null, null, "60px"],
    backgroundColor: "#F7F8FB",
    borderRadius: "5px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    p: "7px",
    mx: "auto",
    button: {
      backgroundColor: "rgba(0,0,0,0)",
      borderRadius: "5px",
      color: "#0F2137",
      letterSpacing: "-0.24px",
      fontSize: "16px",
      fontWeight: 500,
      position: "relative",
      outline: "none",
      fontFamily: "DM Sans",
      transition: "all 500ms ease",
      "&.active": {
        boxShadow: "0px 3px 3.8px rgba(118, 140, 161, 0.1)",
        backgroundColor: "#ffffff",
      },
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0)",
      },
    },
  },
  grid: {
    width: "100%",
    maxWidth: "1500px",
    mx: ["auto"],
    gridGap: "30px",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr 1fr"],
    ".priceCard": {
      ".priceHeader": {
        animation: `${fadeIn} 0.8s linear`,
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s linear`,
      },
      ".priceAmount": {
        animation: `${fadeIn} 0.9s linear`,
      },
      ".priceButton": {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
