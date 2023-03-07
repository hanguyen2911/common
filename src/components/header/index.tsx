import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../assets/styles/module/header.module.scss";

const Header = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  return (
    <nav className={` ${styles.header}`}>
      <ul>
        {/* <li>
          <NavLink to="/" className={`${styles.nav_link}font-bold text-xxl`}>
            Logo
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/"
            className={`${styles.nav_link}`}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${styles.nav_link}`}
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            // className={({ isActive }) =>
            //   isActive ? activeClassName : undefined
            // }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="tasks" className={`${styles.nav_link}`}>
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                Tasks
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
