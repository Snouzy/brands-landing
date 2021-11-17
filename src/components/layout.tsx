/** @jsxImportSource theme-ui */

import React from "react";
import Sticky from "react-stickynode";
import { useStickyContext } from "contexts/app/app.provider";
import { Waypoint } from "react-waypoint";

import Header from "./header/header";
import Footer from "./footer/footer";

import { ActionNames } from "contexts/types";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isSticky = useStickyContext().state.isSticky;
  const dispatch = useStickyContext().dispatch;
  const setSticky = () => dispatch({ type: ActionNames.SET_STICKY });

  const removeSticky = () => dispatch({ type: ActionNames.REMOVE_STICKY });

  const onWaypointPositionChange = ({
    currentPosition,
  }: {
    currentPosition: string;
  }) => {
    if (currentPosition === "above") {
      setSticky();
    }
    if (currentPosition === "below") {
      removeSticky();
    }
  };

  return (
    <React.Fragment>
      <Sticky enabled={isSticky} innerZ={991}>
        <Header className={`${isSticky ? "sticky" : "unSticky"}`} />
      </Sticky>
      <Waypoint
        onEnter={removeSticky}
        onLeave={setSticky}
        onPositionChange={onWaypointPositionChange}
      />
      <main
        sx={{
          variant: "layout.main",
        }}
      >
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
