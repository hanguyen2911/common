import React, { useEffect, useMemo, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../screens/Homepage";
import { ROUTER } from "../../share/constant/common";
import About from "../screens/About";
import Header from "../header";

interface PageProps {
  children?: any;
  history?: any;
}

export const DefaultLayout: React.FC<PageProps> = () => {
  // const { pathname } = useLocation();
  return (
    <>
      <div className="body-container relative bg-[#FBFBFB]">
        <Header />
        <Routes>
          <Route path={`${ROUTER.HOME}`} element={<Home />} />
          <Route path={`${ROUTER.ABOUT}`} element={<About />} />
        </Routes>
      </div>
    </>
  );
};

export default DefaultLayout;
