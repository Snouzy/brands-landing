/** @jsxImportSource theme-ui */

import React from "react";
import { Box, Image, ThemeUICSSObject } from "theme-ui";
import { Link } from "components/link";
import arrowAngle from "assets/arrow-angle.svg";

interface Props {
  text: string;
  heading: string;
  path: string;
  icon: JSX.Element;
}
const ServiceCard = ({ text, heading, path, icon }: Props) => {
  return (
    <Box sx={styles.serviceCard}>
      <Box sx={styles.image}>
        {icon}
        {/* <Image src={image} alt={heading} /> */}
      </Box>
      <Box sx={styles.content}>
        <h3 sx={{ marginBottom: 10 }}>{heading}</h3>
        <p sx={{ margin: 0 }}>{text}</p>
        {path.length > 0 && path !== "#" && (
          <Link sx={styles.link} path={path} label="path">
            En savoir plus <Image src={arrowAngle} alt="angle icon" />
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default ServiceCard;

const styles: Record<string, ThemeUICSSObject> = {
  serviceCard: {
    display: "flex",
    alignItems: "center",
    flexDirection: ["column", null, null, "row"],
    textAlign: ["center", null, null, "left"],
  },
  image: {
    flexShrink: 0,
  },
  content: {
    ml: ["0", null, null, "30px"],
    mt: ["20px", null, null, "0px"],
    h3: {
      color: "#0F2137",
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: 1,
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "#343D48",
      mb: "20px",
    },
  },
  link: {
    color: "#3183FF",
    fontSize: "16px",
    fontWeight: 500,
    display: "inline-block",
    img: {
      ml: "5px",
    },
  },
};
