import React, { useState } from "react";
import styles from "../../../assets/styles/module/sidenav.module.scss";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import WebIcon from "@mui/icons-material/Web";
import { NavLink } from "react-router-dom";
import { ROUTER_HOME } from "../../../share/constant/common";
const navData = [
  {
    id: 0,
    icon: <WebIcon />,
    text: "Common",
    link: ROUTER_HOME.COMMON,
  },
  {
    id: 1,
    icon: <DashboardCustomizeIcon />,
    text: "Orther knowledge",
    link: "/",
  },
];
const SideNav = () => {
  const [open, setopen] = useState(true);
  const toggleOpen = () => {
    setopen(!open);
  };
  return (
    <>
      <div className={`${open ? styles.side_nav : styles.side_nav_close}`}>
        <button className={styles.menu_btn} onClick={toggleOpen}>
          {open ? (
            <KeyboardDoubleArrowLeftIcon />
          ) : (
            <KeyboardDoubleArrowRightIcon />
          )}
        </button>
        {navData.map((item) => {
          return (
            <NavLink
              to={item.link}
              key={item.id}
              className={`${styles.side_item}`}
            >
              {item.icon}
              <span
                className={`${
                  open ? styles.link_text : styles.link_text_close
                }`}
              >
                {item.text}
              </span>
            </NavLink>
          );
        })}
         
      </div>
    </>
  );
};
export default SideNav;
