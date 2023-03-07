import React, { useEffect, useMemo, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../screens/Homepage";
import { ROUTER, ROUTER_HOME } from "../../share/constant/common";
import About from "../screens/About";
import Header from "../header";
import styles from "../../assets/styles/module/layout.module.scss";
import InputField from "../Input";

interface PageProps {
  children?: any;
  history?: any;
}

export const DefaultLayout: React.FC<PageProps> = () => {
  // const { pathname } = useLocation();
  return (
    <>
      <div className="w-full relative">
        {" "}
        <div className={`${styles.body_container}  body-container relative`}>
          <Header />
          <Routes>
            <Route path={`${ROUTER.HOME}`} element={<Home />}>
              <Route path={`${ROUTER_HOME.COMMON}`} element={<Home />} />
            </Route>
            <Route path={`${ROUTER.ABOUT}`} element={<About />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
