import React, { useState } from "react";
import ButtonSmall from "./ButtonSmall";

function SingleNews({ title, url, urlToImage, description }) {
  const [underline, setUnderline] = useState(false);

  function onMouseEnter() {
    setUnderline(true);
  }

  function onMouseLeave() {
    setUnderline((prVal) => {
      return !prVal;
    });
  }

  return (
    <div
      className="single-news-wrap"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={
          urlToImage
            ? urlToImage
            : "https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I="
        }
        alt="img"
      />
      <h1
        style={{
          color: underline ? "#5fb6e7" : null,
          textDecoration: underline ? "underline" : null,
        }}
      >
        {title ? title.substring(0, 56) : "It's just a dummy title"}
      </h1>

      <p className="Descriptions">
        {description
          ? description.substring(0, 80)
          : "One of the passengers missing aboard a ferry that caught fire near Greece on Friday is found alive, authorities say"}
      </p>

      <a
        href={url ? url : null}
        target="_blank"
        rel="noreferrer"
        style={{
          color: underline ? "#5fb6e7" : null,
          textDecoration: underline ? "underline" : null,
        }}
      >
        <ButtonSmall text="Read More" />
      </a>
    </div>
  );
}

export default SingleNews;
