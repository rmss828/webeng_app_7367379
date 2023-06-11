import React from 'react';

const Feed = ({ title, link, date, snippet, image }) => {
  let formattedDate = {day: 'numeric', month: 'long', year: 'numeric'}
  let articleDate = new Date(date).toLocaleDateString('de-DE', formattedDate)
  return (
    <section>
      <div>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h3>{title}</h3>
        </a>
        <p>{articleDate}</p>
        <p>{snippet}</p>
      </div>

      <div>
        <img src={image} alt={title} />
      </div>
    </section>
  );
}

export default Feed;