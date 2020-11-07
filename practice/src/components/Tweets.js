import React from "react";
// Import Components
import Tweet from "./Tweet";

const Tweets = () => {
  const tweets = [
    { name: "Magnoranier", age: "20" },
    { name: "RanierMagno", age: "21" },
    { name: "MagsRanier", age: "22" },
  ];
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet name={tweet.name} age={tweet.age} />
      ))}
    </div>
  );
};

export default Tweets;
