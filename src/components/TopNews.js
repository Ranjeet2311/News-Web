import React from "react";

function TopNews() {
  return (
    <div>
      <div className="top-news">
        <video
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "auto" }}
          src="https://media.istockphoto.com/videos/breaking-news-template-intro-for-tv-broadcast-news-show-program-with-video-id1313303632"
        ></video>
        {/* <img
          src="https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?b=1&k=20&m=1182477852&s=170667a&w=0&h=JELSsVdEVClnMhZRbZs2GJQ8DLqd5OKkru-VANqlf24="
          alt="top-news"
        /> */}
      </div>
    </div>
  );
}

export default TopNews;
