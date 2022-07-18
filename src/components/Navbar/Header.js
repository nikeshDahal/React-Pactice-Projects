import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import DateContainer from "../Date-Container/DateContainer";
import logo from "../static/logo-eb-pearls.png";
import homeImg from "../static/Home.png";

const Header = () => {
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
   
      <div className={classes.Top_Headline_Wrapper}>
        <div className={classes.Top_Headline_bar}>
          <img src={logo} className={classes.logo} alt="EB-pealrs"></img>
          <span className={classes.news_paper_name}>EB POST</span>
          <DateContainer />
        </div>
      <header className={classes.navbar}>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/Home"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                <img src={homeImg} alt={"Home"}></img>
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
                    to={`/category/${text}`}
                    className={({ isActive }) =>
                      isActive ? classes.active : ""
                    }
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
