import React from "react";
import TopNews from "./TopNews";
import Headline from "./Headline";
import SectionNews from "./SectionNews";

function MainSectionNews({ topHeadlines, topNews, altdata }) {
  return (
    <div className="main-content">
      <div className="mainNews">
        <TopNews />

        {topHeadlines
          ? topHeadlines.map((topHead, i) => {
              const description = topHead.description.substring(0, 46);
              return topHeadlines ? (
                <Headline key={i} description={description} />
              ) : (
                <Headline />
              );
            })
          : altdata.map((topHead, i) => {
              const description = topHead.description.substring(0, 46);
              return topHeadlines ? (
                <Headline key={i} description={description} />
              ) : (
                <Headline />
              );
            })}

        {/* {topHeadlines &&
          topHeadlines.map((topHead, i) => {
            const description = topHead.description.substring(0, 46);
            return topHeadlines ? (
              <Headline key={i} description={description} />
            ) : (
              <Headline />
            );
          })} */}
      </div>
      <div className="otherNews">
        <SectionNews altdata={altdata} topNews={topNews} />
      </div>
    </div>
  );
}

export default MainSectionNews;
