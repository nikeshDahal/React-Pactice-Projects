import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

import NewsList from "./components/News-List/NewsList";
import "./App.css";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //...............................for fetching...........................//
  const buttonHandler = useCallback(async (event) => {
    setLoading(true);
    setError(null);
    // event.preventDefault();
    console.log("clicked");
    try {
      const responseDataFromApi = await axios.get(
        ""
      );
      const filteredNews = responseDataFromApi.data.articles.map((newsData) => {
        let d = new Date(newsData.publishedAt);
        let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
        let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
        let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
        let date = `${da}-${mo}-${ye}`;
        return {
          id: newsData.id,
          title: newsData.title,
          publishedAt: date,
          content: newsData.content,
          description: newsData.description,
          image: newsData.urlToImage,
        };
      });
      setNews(filteredNews);
      console.log(responseDataFromApi.data.articles);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      console.log(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    buttonHandler();
  }, [buttonHandler]);

  return (
    <React.Fragment>
      <section >
        <button onClick={buttonHandler}>Fetch News</button>
      </section>
      <section>
        {!loading && news.length > 0 && <NewsList news={news} />}
        {!loading && news.length === 0 && !error && <h3>found no news </h3>}
        {!loading && error && <h3>{error}</h3>}
        {loading && <h3>loading...</h3>}
      </section>
    </React.Fragment>
  );
}

export default App;
