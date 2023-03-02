import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../assets/styles/module/header.module.scss";

const Header = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  return (
    // <header>
    //   <div>
    //     <NavLink to="/" className="font-bold text-xxl">
    //       Logo
    //     </NavLink>

    //   </div>
    // </header>
    <nav
      className={`hidden sm:flex flex-wrap items-center justify-center md:ml-2 md:py-1 md:pl-2 order-3 ${styles.header}`}
    >
      <div>
        <NavLink to="/" className="font-bold text-xxl">
          Logo
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="tasks">
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
