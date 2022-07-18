import React from "react";
import classes from "./DateContainer.module.css";
import { NavLink } from "react-router-dom";
import aboutMeLogo  from "../static/aboutMe.png" 
const DateContainer = () => {
  const d = new Date();
  let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  let date = `${mo} ${da}, ${ye}`;
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekday[d.getDay()];
  const hours = d.getHours();
  let timeofDay;
  if (hours < 12) {
    timeofDay = "Good Morning ";
  } else if (hours >= 12 && hours < 17) {
    timeofDay = "Good Afternoon ";
  } else {
    timeofDay = "GoodNight ";
  }
  return (
    <div className={classes.date_container}>
      <span>{`${day} ${date}`}</span>
      <br />
      <span>{timeofDay}</span>
      <br />
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <div className={classes.aboutMe_wrapper}>
          <span>About Me</span>
          <img src={aboutMeLogo} alt="About Me"/>
          </div>
        </NavLink>
    </div>
  );
};
export default DateContainer;
