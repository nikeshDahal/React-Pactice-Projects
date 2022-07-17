import React,{useEffect, useState}from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import DateContainer from "../Date-Container/DateContainer";

const Header = ({onSetCategory}) => {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <div className={classes["Head-wrapper"]}>
      <div className={classes.Top_Headline_Wrapper}>
        <div className={classes.Top_Headline_bar}>
          <img
            src="images/logo-eb-pearls.png"
            className={classes.logo}
            alt="EB-pealrs"
          ></img>
          <span className={classes.news_paper_name}>EB POST</span>
          <DateContainer />
        </div>
      </div>
      <header className={classes.navbar}>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/Home"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
        {categories.map((text) => {
          return (
            <nav>
              <ul>
                <li>
                  <NavLink
                    to={`/${text}`}
                    className={({ isActive }) =>
                      isActive ? classes.active : ""
                    }
                    button
                    // onClick={()=>onSetCategory(text)}
                  >
                    {text}
                  </NavLink>
                </li>
              </ul>
            </nav>
          );
        })}
      </header>
    </div>
  );
};
export default Header;
