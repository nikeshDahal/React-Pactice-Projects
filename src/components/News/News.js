import React from "react";

import classes from "./News.module.css";
import newsphoto  from '../static/newsPhoto.jpg'

const News = (props) => {
  const fulldate = new Date(props.publishedAt); 
  var date = fulldate.toString().split(" "); 
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;
  return (
    <div className={classes.news_card}>
      <div></div>
      <img
        alt='newsPhoto'
        src={props.image?props.image:newsphoto}
        className={classes.newsImage}
      ></img>
      <div className={classes.newsText}>
        <div>
          <span className={classes.title}>{props.title}</span>
          <br />
          <span className={classes.author}>
            <a href={props.url} target="__blank">
              <b>author</b>
            </a>{" "}
            <span className={classes.muted}>
              {" "}
              :{props.author ? props.author : "unknown"} /{" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          </span>
        </div>
        <div className={classes.lower_News_Text}>
          <p className={classes.description}>{props.description}</p>
          <span className={classes.readmore}>
            read more at{" "}
            <a href={props.url} target="__blank" className={classes.source}>
              <b>{props.url}</b>
              {/* {console.log("test", props.author)} */}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default News;
