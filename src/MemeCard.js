import React from "react";

const MemeCard = ({ data }) => {
  const { url, author, title } = data;
  return (
    <div className="w-[250px] m-3 p-2 border border-black rounded-lg">
      <img className="w-full h-56" src={url} alt={title} />
      <p>{title}</p>
      <p>{author}</p>
    </div>
  );
};

export default MemeCard;
