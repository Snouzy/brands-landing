/** @jsxImportSource theme-ui */

import React from "react";
import { Box, Image, Text, Heading, ThemeUICSSObject } from "theme-ui";
import { Link } from "components/link";

import priceCheck from "assets/price-check.svg";
import priceCross from "assets/price-cross.svg";
import priceArrow from "assets/price-arrow.svg";

import type { Plan } from "sections/pricing";

const PriceCard = ({
  data: { title, icon: _, amount, options, recommended },
}: {
  data: Plan;
}) => {
  return (
    <Box
      className={`${
        recommended === null ? "priceCard " : "priceCard recommended"
      }`}
      sx={styles.priceCard}
    >
      <Box>
        <Box sx={styles.priceHeader}>
          <Box className="priceHeader">
            {recommended === null ? null : (
              <Box sx={styles.recommended}>{recommended}</Box>
            )}
            {/* <Image src={icon} alt={title} /> */}
            <Heading as="h3">{title}</Heading>
          </Box>
        </Box>

        <Box as="ul">
          {options.map((option, index) => (
            <Box
              as="li"
              className={`${option.status === true ? "" : "closed"}`}
              key={index}
            >
              {option.status === true ? (
                <Image src={priceCheck} alt="" />
              ) : (
                <Image src={priceCross} alt="" />
              )}
              {option.label}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={styles.buttonWrap}>
        <Box className="priceAmount">
          <Text as="p">Prix</Text>
          <Link path="#" label="amount" sx={styles.heading}>
            {amount}
          </Link>
        </Box>
        <Link path="#" label="price_button" className="priceButton">
          <Image src={priceArrow} alt="price button" />
        </Link>
      </Box>
    </Box>
  );
};

export default PriceCard;

const styles: Record<string, ThemeUICSSObject> = {
  priceCard: {
    px: 20,
    border: "1px solid #E0E2E4",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    ul: {
      p: 0,
      mt: ["30px", null, null, null, "50px"],
      listStyle: "none",
      li: {
        display: "flex",
        alignItems: "flex-start",
        color: "#343D48",
        fontSize: "16px",
        lineHeight: "26px",
        width: "100%",
        maxWidth: ["100%", null, null, null, "90%"],
        "+li": {
          mt: ["10px", null, null, null, "14px"],
        },
        "&.closed": {
          color: "rgba(52,61,72,.6)",
        },
        img: {
          flexShrink: 0,
          position: "relative" as const,
          top: "5px",
          mr: "15px",
        },
      },
    },
  },
  priceHeader: {
    pt: ["30px", null, null, null, "60px"],
    position: "relative" as const,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: ["column", null, "row"],
    ".priceAmount": {
      textAlign: "right",
    },
    ".priceHeader": {
      mb: ["20px", null, "0"],
      h3: {
        lineHeight: 1,
        color: "#0F2137",
        fontSize: "22px",
        fontWeight: 700,
        letterSpacing: "-0.55px",
      },
    },
  },
  recommended: {
    display: "inline-block",
    backgroundColor: "primary",
    borderRadius: "3px",
    lineHeight: 1,
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "-0.14px",
    padding: "5px 8px",
    position: "absolute" as const,
    top: ["-15px", null, null, null],
    left: "0px",
  },
  buttonWrap: {
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    py: "44px",
    mt: "60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8F8FA",
    mx: -20,
    px: ["20px", null, null, null, "40px"],
    img: {
      display: "block",
    },
    ".priceAmount": {
      p: {
        lineHeight: 1,
        fontSize: "16px",
        color: "#343D48",
        mb: "10px",
      },
    },
  },
  heading: {
    color: "primary",
    fontSize: "26px",
    fontWeight: 700,
    lineHeight: 1,
  },
};
