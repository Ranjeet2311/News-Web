import React, { useEffect, useState } from "react";
import axios from "axios";
import SubHeader from "../SubHeader";
import Button from "@mui/material/Button";
import SingleNews from "../SingleNews";

function Search() {
  const [searchData, setSearchData] = useState([]);
  const [input, setInput] = useState("");
  const [newsQuery, setNewsQuery] = useState("");

  const searchNewsData = async (query) => {
    const { data } = await axios.get(
      `https://content.guardianapis.com/search?q=${query}&api-key=${process.env.REACT_APP_API_KEY_TWO}`
    );

    // console.log(data.response.results);

    if (data.response.results) {
      setSearchData(data.response.results);
    }
  };

  function searchHandler(e) {
    // console.log(e.target.value);
    const value = e.target.value;
    setInput(value);
  }

  function clickHandler(e) {
    setNewsQuery(input);
    e.preventDefault();
  }

  useEffect(() => {
    searchNewsData(newsQuery);
  }, [newsQuery]);

  return (
    <div className="news-display">
      <SubHeader title="Search news" />
      <form className="form-wrap">
        <input
          type="text"
          placeholder="Type your search keyword"
          onChange={searchHandler}
          value={input}
        />
        <Button
          onClick={clickHandler}
          style={{ backgroundColor: "#bb1919" }}
          variant="contained"
          type="submit"
        >
          Search
        </Button>
      </form>
      <div className="news-display">
        <div className="search-news-display">
          {searchData ? (
            searchData.map((news, i) => {
              // return console.log(news.title);
              return (
                <SingleNews
                  key={i}
                  title={news.webTitle}
                  url={news.webUrl}
                  description={news.webTitle}
                />
              );
            })
          ) : (
            <SubHeader title="* No News Found *" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
