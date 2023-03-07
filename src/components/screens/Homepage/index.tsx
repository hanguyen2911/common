import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { ROUTER } from "../../../share/constant/common";
import About from "../About";
import SideNav from "../SideNav";
const Home = () => {
  return (
    <>
      <div className="container relative">
        <div className="lg:flex justify-between hidden">
          <div
            className={`relative t-0 b-0 w-full h-full min-h-[1000px]
       lg:w-1/4  lg:block `}
          >
            <SideNav />
          </div>
          <div
            className={`w-full lg:w-3/4  lg:px-0 flex justify-center lg:!block`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
