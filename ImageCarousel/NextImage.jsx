import React from "react";
import { useState } from "react";
const NextImage = () => {
  const [img, setImg] = useState("");
  async function fetchImage() {
    const res = await fetch("https://picsum.photos/v2/list");
    const data = await res.json();
    setImg(data[1].download_url);
  }
  fetchImage();
  return (
    <div className="imgContainer">
      <img className="imgContainer" src={img}></img>
    </div>
  );
};

export default NextImage;
