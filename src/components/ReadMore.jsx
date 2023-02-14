import React, { useState } from "react";

const ReadMore = ({ children, len }) => {
  const [str, setStr] = useState(false);
  const nav = () => {
    console.log(1)
    setStr(!str);
  };

  return (
    <div>
      <p>{str ? `${children.substring(0, len)}...` : children}</p>
      <button onClick={nav}>read more</button>
    </div>
  );
};

export default ReadMore;
