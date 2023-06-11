import axios from "axios";
import React, { useState, useEffect } from "react";
import Feed from "./Feed";

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
    <section id='rssfeed'>
      {articles.map((item, index) => 
        <Feed 
          key={index}
          title={item.title}
          link={item.link}
          pubDate={item.pubDate}
          snippet={item.snippet}
          image={item.image}
        />
      )}
    </section>
  );
}

export default RSSFeed;