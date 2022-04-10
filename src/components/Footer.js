import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        Created by ranjeet
        <span> No Copyright &copy; {date} </span>
      </p>
    </div>
  );
}

export default Footer;
