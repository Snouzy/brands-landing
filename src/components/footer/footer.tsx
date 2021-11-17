/** @jsxImportSource theme-ui */

import React from "react";
import { Box, Text, Container } from "theme-ui";

import { Link } from "components/link";
import Logo from "components/logo";

import logoLight from "assets/logo-light.svg";

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container sx={styles.container}>
        <Box sx={styles.linksWrap}>
          <Link label="home" path="/">
            Accueil
          </Link>
          <Link label="team" path="/">
            Qui sommes-nous
          </Link>
          <Link label="CGU" path="/">
            CGU
          </Link>
          <Link label="FAQ" path="/">
            FAQ
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: ["column", null, null, null, null, "row"],
          }}
        >
          <Logo image={logoLight} sx={{ height: 40, mr: 20, mt: 10 }} />
          <Text
            as="p"
            sx={{
              color: "#ffffff",
              opacity: "0.7",
              fontSize: "14px",
              mt: ["10px", null, null, null, null, "0"],
            }}
          >
            Copyright by {new Date().getFullYear()} Vazee, Inc
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    py: ["40px", null, "30px", "40px"],
    backgroundColor: "#020718",
    position: "relative" as const,
    "&::before": {
      // eslint-disable-next-line @typescript-eslint/quotes
      content: '""',
      position: "absolute" as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#ffffff",
      opacity: "0.05",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column" as const,
    // flexDirection: ["column"],
    // justifyContent: ["center", null, null, null, null, "space-between"],
    justifyContent: "center",
    // justifyContent: ["center"],
    alignItems: "center",
    position: "relative" as const,
    flexWrap: "wrap" as const,
  },
  linksWrap: {
    mt: ["15px", null, null, null, null, "0"],
    display: "flex",
    flexWrap: "wrap" as const,
    a: {
      fontSize: ["14px", null, null, null, "16px"],
      color: "#ffffff",
      transition: "all 500ms ease",
      "&:hover": { opacity: 0.7 },
    },
    "a+a": { ml: ["15px", null, null, null, "35px"] },
  },
};
