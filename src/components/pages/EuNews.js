import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleNews from "../SingleNews";
import SubHeader from "../SubHeader";
import { data } from "../BaseData";

function EuNews() {
  const [euNews, setEuNews] = useState([]);

  const eUData = async () => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=de&gr&apiKey=${process.env.REACT_APP_API_KEY_ONE}`
    );

    // console.log(data.sources.slice(0, 10));

    if (data.articles) {
      setEuNews(data.articles);
    }
  };

  useEffect(() => {
    // eUData();
  }, []);

  return (
    <div className="news-display">
      <SubHeader title="Europe News" />
      <div className="news">
        {data &&
          data.map((news, i) => {
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

export default EuNews;
