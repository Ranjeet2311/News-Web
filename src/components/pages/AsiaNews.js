import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleNews from "../SingleNews";
import SubHeader from "../SubHeader";
import { data } from "../BaseData";

function AsiaNews() {
  const [asiaNews, setAsiaNews] = useState([]);

  const asiasData = async () => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=ch&in&apiKey=${process.env.REACT_APP_API_KEY_ONE}`
    );

    if (data.articles) {
      setAsiaNews(data.articles);
    }
    // console.log(data.sources.slice(0, 10));
  };

  useEffect(() => {
    asiasData();
  }, []);

  return (
    <div className="news-display">
      <SubHeader title="Asia News" />
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

export default AsiaNews;
