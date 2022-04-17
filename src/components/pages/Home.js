import React, { useEffect, useState } from "react";
import axios from "axios";
import { data, sportData, techData } from "../BaseData";
import SectionNews from "../SectionNews";
import MainSectionNews from "../MainSectionNews";
import SubHeader from "../SubHeader";

function All() {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [topNews, setTopNews] = useState([]);

  const newsData = async () => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines/sources?category=general&language=en&apiKey=${process.env.REACT_APP_API_KEY_ONE}`
    );

    // console.log(data.sources.slice(0, 10));
    console.log(data);
    console.log(data.sources);

    if (data.sources) {
      setTopHeadlines(data.sources.slice(1, 13));
    }
  };

  const topNewsData = async () => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=general&pageSize=9&language=en&apiKey=${process.env.REACT_APP_API_KEY_ONE}`
    );

    // console.log(data.articles);

    if (data.articles) {
      setTopNews(data.articles);
    }
  };

  useEffect(() => {
    newsData();
    topNewsData();
  }, []);

  return (
    <div className="news-display">
      <MainSectionNews
        topNews={topNews}
        altdata={data}
        topHeadlines={topHeadlines}
      />
      <SubHeader title="Tech News" />
      <SectionNews topNews={techData} />
      <SubHeader title="Sport News" />
      <SectionNews topNews={sportData} />
    </div>
  );
}

export default All;
