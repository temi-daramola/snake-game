import { Route, Routes, useLocation } from "react-router";
import { useEffect } from "react";
import { hooks } from "@common/hooks/_index";
import { constants } from "@common/constant";
import AuthRedirectGuard from "@application/middleware/AuthRedirectGuard";
import { NavLayout } from "@application/layout/AppLayout";
import { DashboardLayout } from "@application/layout/Dashboard-Layout";
import { Snake } from "@modules/snake/page/Snake";
import { LayoutInitAccount } from "@application/middleware/LayoutInitAccount-v2";

function AppRoutes() {
  const location = useLocation();
  const { appRoutes } = constants;

  return (
    <Routes location={location} key={location.pathname}>
      <Route index path={appRoutes.home} element={<Snake />} />
    </Routes>
  );
}

export default AppRoutes;
