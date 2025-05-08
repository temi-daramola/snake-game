import { Route, Routes, useLocation } from "react-router";
import { useEffect } from "react";
import Signup from "@modules/auth/_page/Signup";
import { Login } from "@modules/auth/_page/Login";
import Home from "@modules/home/_page/Home";
import { hooks } from "@common/hooks/_index";
import { constants } from "@common/constant";


function AppRoutes() {
  const location = useLocation();
  const {appRoutes} = constants

  return (
    <Routes location={location} key={location.pathname}>

      <Route index path={appRoutes.index} element={<Home />}/>
      <Route path={appRoutes.signup} element={<Signup />}/>
      <Route path={appRoutes.login} element={<Login />}/>

      {/* Not found route, if needed */}
      {/* <Route path="*" element={<Navigate to="/not-found" replace />} /> */}
    </Routes>
  );
}

export default AppRoutes;
