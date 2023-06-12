import axios from "axios";
import React, { useState, useEffect } from "react";
import Feed from "./Feed";
import styles from "../style";

const RSSFeed = () => {
  const [articles, setArticles] = useState([]);

  console.log(articles);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  console.log(articles);
  return (
    <section id="rssfeed">
      <h1
        className={`${styles.heading}`}
      >
        RSS Feed
        <span className="ss:text-[24px] text-[18px]">
          {" "}
          (Tagesschau & Focus)
        </span>
      </h1>
      {articles.map((item) => (
        <Feed
          key={item.link}
          title={item.title}
          link={item.link}
          date={item.pubDate}
          snippet={item.snippet}
          image={item.image}
        />
      ))}
    </section>
  );
};

export default RSSFeed;
