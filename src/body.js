import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchMemes();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMemes();
    }
  };

  const fetchMemes = async () => {
    setShowShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    setMemes((memes) => [...memes, ...json.memes]);
    setShowShimmer(false);
  };

  return (
    <div className="flex flex-wrap">
      {memes.map((meme, i) => (
        <MemeCard key={i} data={meme} />
      ))}

      {showShimmer && <Shimmer />}
    </div>
  );
};

export default Body;
