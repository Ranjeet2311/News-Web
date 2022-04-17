import React from "react";
import SingleNews from "./SingleNews";

function SectionNews({ topNews, altdata }) {
  return (
    <div>
      <div className="section-news">
        {topNews
          ? topNews.map((news, i) => {
              return (
                <SingleNews
                  key={i}
                  title={news.title}
                  description={news.description}
                  urlToImage={news.urlToImage}
                  url={news.url}
                />
              );
            })
          : altdata.slice(0, 12).map((news, i) => {
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

        {/* {topNews &&
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
          })} */}
      </div>
    </div>
  );
}

export default SectionNews;
