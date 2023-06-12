/*
  represents a single feed item
  renders the title, link, date, snippet and image of the feed item
*/

import React from "react";
import styles from "../style";

const Feed = ({ title, link, date, snippet, image }) => {
  let formattedDate = { day: "numeric", month: "long", year: "numeric" };
  let articleDate = new Date(date).toLocaleDateString("de-DE", formattedDate);
  return (
    <section id="rssfeed" className={`flex md:flex-row flex-col sm:py-8 py-4`}>
      <div className={`${styles.paragraph}`}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ffdb99] hover:text-secondary cursor-pointer text-[20px]"
        >
          <h3>{title}</h3>
        </a>
        <p className="text-white">
          {articleDate} <br />
          {snippet}
        </p>
      </div>

      <div
        className={`w-full md:max-w-[35%] h-auto py-[20px] md:py-[0px] px-[20px] mx-auto`}
      >
        <img src={image} alt={title} />
      </div>
    </section>
  );
};

export default Feed;
