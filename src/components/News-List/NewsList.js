import React from 'react';

import News from '../News/News';
import classes from './NewsList.module.css';

const NewsList = (props) => {
  return (
    <ul className={classes['news-list']}>
      {props.news.map((newsItem) => (
        <News
          key={newsItem.id}
          title={newsItem.title}
          publishedAt={newsItem.publishedAt}
          content={newsItem.content}
          description={newsItem.description}
          image = {newsItem.image}
          url = {newsItem.url}
          source = {newsItem.source.name}
          author = {newsItem.author}
          // moreDescriptions = {newsItem.newsUrl}
        />
      ))}
    </ul>
  );
};

export default NewsList;
