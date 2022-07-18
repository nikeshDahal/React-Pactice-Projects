import React, { useState, useCallback, useEffect  } from "react";
import NewsList from "../News-List/NewsList";
import axios from "axios";
import classes from "./NewsBucket.module.css";
import { useParams } from "react-router-dom";

const NewsBucket = (props) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams(null);
  console.log('categoryid',params.categoryId);

  const buttonHandler = useCallback(async (event) => {
    setLoading(true);
    setError(null);
    console.log("clicked");
    try {
      const responseDataFromApi = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${params.categoryId ? params.categoryId:'general'}&apiKey=${process.env.REACT_APP_NEWS_API}`
      );
      const filteredNews = responseDataFromApi.data.articles.map((newsData) => {
        return {
          id: newsData.title,
          title: newsData.title,
          publishedAt: newsData.publishedAt,
          content: newsData.content,
          description: newsData.description,
          image: newsData.urlToImage,
          url : newsData.url,
          source : newsData.source.name,
          author :newsData.author
        };
      });
      setNews(filteredNews);
      // console.log(responseDataFromApi.data.articles);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      // console.log(error);
      setLoading(false);
    }
  }, [params.categoryId]);

  useEffect(() => {
    buttonHandler();
  }, [buttonHandler]);

  return (
    <React.Fragment>
      <div className={classes.button_fetch_container}>
        <button onClick={buttonHandler}>Fetch News</button>
      </div>
      <div className={classes.news}>
        {!loading && news.length > 0 && <NewsList news={news} />}
        {!loading && news.length === 0 && !error && <h3>found no news </h3>}
        {!loading && error && <h3>{error}</h3>}
        {loading && <h3>loading...</h3>}
      </div>
    </React.Fragment>
  );
};

export default NewsBucket;
