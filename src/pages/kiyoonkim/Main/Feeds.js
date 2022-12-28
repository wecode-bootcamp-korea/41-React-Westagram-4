/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import FeedsInd from "./FeedsInd";

function Feeds() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch("data/data.json")
      .then(res => res.json())
      .then(data => {
        setFeeds(data);
      });
  }, []);

  return (
    <div>
      {feeds.map(content => {
        return <FeedsInd feed={content} />;
      })}
    </div>
  );
}

export default Feeds;
