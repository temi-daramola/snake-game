import { NavBar } from "@common/components/nav-bar/NavBar";
import { constants } from "@common/constant";
import React from "react";
import { Outlet } from "react-router";

export const NavLayout = () => {
  return (
    <React.Fragment>
      {/* <NavBar navLinks={constants.navLinks} /> */}
      <Outlet />;
    </React.Fragment>
  );
};
