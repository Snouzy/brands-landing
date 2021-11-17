/** @jsxImportSource theme-ui */
import React from "react";
import { Button, Box } from "theme-ui";
import { Scrollbars } from "react-custom-scrollbars";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";

import { useDrawerContext } from "contexts/drawer/drawer.provider";

import Drawer from "components/drawer";
import Logo from "components/logo";

import menuItems from "./header.data";
import logoLight from "assets/logo-light.svg";

import { ActionNames } from "contexts/types";

const MobileDrawer = () => {
  const { state, dispatch } = useDrawerContext();

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: ActionNames.TOGGLE,
    });
  }, [dispatch]);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="22px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#02073E" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
      sx={styles.drawer_custom}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Logo image={logoLight} sx={{ height: 60 }} />
          <Box sx={styles.menu}>
            {menuItems.map(({ path, label }, i) => (
              <ScrollLink
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={10}
                duration={300}
                key={i}
              >
                {label}
              </ScrollLink>
            ))}
          </Box>

          <Box sx={styles.menuFooter}>
            <Button variant="primary" sx={styles.button}>
              Nous contacter
            </Button>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",

    "@media screen and (min-width: 960px)": {
      display: "none",
    },
  },

  drawer_custom: {
    ".drawer-content": {
      overflow: "hidden",
    },
  },

  drawer: {
    width: "100%",
    height: "100%",
    background: "#fff",
  },

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute" as const,
    top: "30px",
    right: "30px",
    zIndex: "1",
  },

  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column" as const,
    pt: "30px",
    pb: "40px",
    px: "30px",
  },

  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    marginTop: "30px",

    a: {
      fontSize: "16px",
      fontWeight: "400",
      color: "black",
      py: "5px",
      cursor: "pointer",
    },
  },

  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    mt: "auto",
  },

  button: {
    fontSize: "15px",
    fw: "700",
    height: "48px",
    borderRadius: "3px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0",
    backgroundColor: "primary",
    color: "#fff",
  },
};

export default MobileDrawer;
