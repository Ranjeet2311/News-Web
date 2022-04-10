import React from "react";
import TopNews from "./TopNews";
import Headline from "./Headline";
import SectionNews from "./SectionNews";

function MainSectionNews({ topHeadlines, topNews }) {
  return (
    <div className="main-content">
      <div className="mainNews">
        <TopNews />

        {topHeadlines &&
          topHeadlines.map((topHead, i) => {
            const description = topHead.description.substring(0, 46);
            return topHeadlines ? (
              <Headline key={i} description={description} />
            ) : (
              <Headline />
            );
          })}
      </div>
      <div className="otherNews">
        <SectionNews topNews={topNews} />
      </div>
    </div>
  );
}

export default MainSectionNews;
