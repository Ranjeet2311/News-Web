import React from "react";
import SingleNews from "./SingleNews";

function SectionNews({ topNews }) {
  return (
    <div>
      <div className="section-news">
        {topNews &&
          topNews.map((news, i) => {
            return (
              <SingleNews
                key={i}
                title={news.title}
                description={news.description}
                urlToImage={news.urlToImage}
                url={news.url}
              />
            );
          })}
      </div>
    </div>
  );
}

export default SectionNews;
