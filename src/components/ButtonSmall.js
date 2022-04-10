import React, { useState } from "react";
import Button from "@mui/material/Button";

function ButtonSmall({ text }) {
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
    <Button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        color: underline ? "#5fb6e7" : "#4c4c4c",
        borderBottom: underline ? "1px solid black" : null,
        fontSize: "10px",
      }}
      size="small"
      variant="text"
    >
      {text}
    </Button>
  );
}

export default ButtonSmall;
