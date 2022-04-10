import React from "react";

function SubHeader({ title }) {
  return (
    <div className="heading">
      <h2> {title} </h2>
      <hr className="divider" />
    </div>
  );
}

export default SubHeader;
