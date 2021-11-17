/** @jsxImportSource theme-ui */

import React, { Fragment } from "react";
import { Box, ThemeUICSSObject } from "theme-ui";
import RcDrawer from "rc-drawer";
import { IPlacement } from "rc-drawer/lib/IDrawerPropTypes";

interface DrawerProps {
  className?: string;
  children: React.ReactNode;
  closeButton: JSX.Element;
  drawerHandler: JSX.Element;
  toggleHandler: () => void;
  open: boolean;
  drawerStyle: ThemeUICSSObject;
  closeBtnStyle: ThemeUICSSObject;
  width?: string;
  placement?: IPlacement;
}
const Drawer = ({
  className,
  children,
  closeButton,
  drawerHandler,
  toggleHandler,
  open,
  width = "320px",
  placement = "left",
  drawerStyle,
  closeBtnStyle,
  ...props
}: DrawerProps) => {
  return (
    <Fragment>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`drawer ${className ? className : ""}`.trim()}
        width={width}
        placement={placement}
        handler={false}
        level={null}
        duration="0.4s"
        {...props}
      >
        {closeButton && (
          <Box as="div" onClick={toggleHandler}>
            {closeButton}
          </Box>
        )}
        <Box sx={drawerStyle}>{children}</Box>
      </RcDrawer>
      <Box
        className="drawer__handler"
        style={{ display: "inline-block" }}
        onClick={toggleHandler}
      >
        {drawerHandler}
      </Box>
    </Fragment>
  );
};

Drawer.defaultProps = {
  width: "320px",
  placement: "left",
};

export default Drawer;
