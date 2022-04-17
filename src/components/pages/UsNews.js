import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleNews from "../SingleNews";
import SubHeader from "../SubHeader";
import { data } from "../BaseData";

function UsNews() {
  const [usNews, setUsNews] = useState([]);

  const usData = async () => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY_ONE}`
    );

    // console.log(data.sources.slice(0, 10));

    if (data.articles) {
      setUsNews(data.articles);
    }
  };

  useEffect(() => {
    // usData();
  }, []);

  return (
    <div className="news-display">
      <SubHeader title="USA News" />
      <div className="news">
        {data &&
          data.map((news, i) => {
            // return console.log(news.title);
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

export default UsNews;
