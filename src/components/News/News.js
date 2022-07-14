import React from 'react';

import classes from './News.module.css';

const Movie = (props) => {
  return (
    <li className={classes.news}>
      <h2>{props.title}</h2>
      <h3>{props.publishedAt}</h3>
      <p>{props.description}</p>
      <button>see more</button>
      {/* <img src={`${props.image}`}></img> */}
    </li>
  );
};

export default Movie;
