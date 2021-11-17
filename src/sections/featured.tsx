/** @jsxImportSource theme-ui */

import React from "react";
import { Box, Container, Button, ThemeUICSSObject } from "theme-ui";
import { keyframes } from "@emotion/react";
import BlockTitle from "components/block-title";
import Image from "components/image";
import { AiFillDollarCircle, AiFillPieChart } from "react-icons/ai";
import { FaCog } from "react-icons/fa";
import tabImage1 from "assets/tab-image-1.png";
import tabImage2 from "assets/tab-image-2.png";
import tabImage3 from "assets/tab-image-3.png";
import dotPattern from "assets/dot-pattern.svg";

const Featured = () => {
  const [tab, setTab] = React.useState<string>("media");

  const handleTab = (tab: string) => {
    if (tab === "media") {
      setTab("media");
    }
    if (tab === "data") {
      setTab("data");
    }
    if (tab === "activation") {
      setTab("activation");
    }
  };

  return (
    <Box as="section" sx={styles.featured}>
      <Container sx={styles.container}>
        <BlockTitle
          title="Les différents objectifs"
          text="Définissez les votres en quelques clics  !"
        />
        <Box sx={styles.tabButtonTopWrapper}>
          <Box sx={styles.tabButtonWrapper}>
            <Button
              onClick={() => handleTab("media")}
              className={`${tab === "media" ? "active" : ""}`}
            >
              <AiFillDollarCircle />
              Media
            </Button>
            <Button
              onClick={() => handleTab("data")}
              className={`${tab === "data" ? "active" : ""}`}
            >
              <FaCog />
              Data
            </Button>
            <Button
              onClick={() => handleTab("activation")}
              className={`${tab === "activation" ? "active" : ""}`}
            >
              <AiFillPieChart />
              Activation
            </Button>
          </Box>
        </Box>
        <Box sx={styles.tabContent}>
          {tab === "media" && (
            <Image src={tabImage1} alt="tab image" className="tabImage" />
          )}

          {tab === "data" && (
            <Image src={tabImage2} alt="tab image" className="tabImage" />
          )}
          {tab === "activation" && (
            <Image src={tabImage3} alt="tab image" className="tabImage" />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Featured;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const styles: Record<string, ThemeUICSSObject> = {
  featured: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
    pb: ["200px", null, null, null, "200px", null, "240px"],
    backgroundColor: "#F9FAFC",
  },
  container: {
    position: "relative" as const,
    top: "150px",
    mt: "-150px",
  },
  tabButtonTopWrapper: {
    overflowY: ["hidden", null, null, null, null, "inherit"],
    overflowX: ["auto", null, null, null, null, "inherit"],
  },
  tabButtonWrapper: {
    width: ["700px", null, null, null, null, "100%"],
    mx: ["auto", null, null, null, null, "0"],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid rgba(1,7,13,.1)",
    mb: "35px",
    button: {
      display: "flex",
      alignItems: "center",
      pb: ["15px", null, null, null, "35px"],
      px: ["15px", null, null, null, "30px"],
      flexShrink: "0",
      border: 0,
      backgroundColor: "rgba(0,0,0,0)",
      color: "#0F2137",
      fontSize: ["14px", null, null, null, "18px"],
      fontWeight: 500,
      lineHeight: 1,
      position: "relative" as const,
      transition: "all 500ms ease",
      svg: {
        fontSize: ["18px", null, null, null, "30px"],
        color: "#ADBDD0",
        opacity: 0.7,
        mr: "15px",
        transition: "all 500ms ease",
      },
      "&:hover, &.active": {
        backgroundColor: "rgba(0,0,0,0)",
        color: "#0F2137",
        svg: {
          color: "#0F2137",
          opacity: 1,
        },
        "&::before": {
          transform: "scale(1,1)",
        },
      },
      "&::before": {
        content: "''",
        position: "absolute" as const,
        bottom: "-2px",
        backgroundColor: "#0F2137",
        left: 0,
        width: "100%",
        height: "3px",
        transform: "scale(0,1)",
        transition: "transform 500ms ease",
      },
    },
  },
  tabContent: {
    minHeight: ["190px", null, "300px", "385px", null, "600px"],
    position: "relative" as const,
    "&::before": {
      content: "''",
      width: "302px",
      height: "347px",
      backgroundImage: `url(${dotPattern})`,
      position: "absolute" as const,
      bottom: "-30px",
      right: "-40px",
      display: ["none", null, null, null, null, "block"],
    },
    ".tabImage": {
      position: "relative" as const,
      animation: `${fadeIn} 0.8s linear`,
    },
  },
};
