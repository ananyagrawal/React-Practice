import React from "react";
import { useState } from "react";
const NextImage = () => {
  const [img, setImg] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  async function fetchImage() {
    const res = await fetch("https://picsum.photos/v2/list");
    const data = await res.json();
    setImg(data.map((photo) => photo.download_url));
  }
  fetchImage();
  return (
    <div className="container">
      <button></button>
      <div className="image-container">
        {img.map((image) => (
          <img key={image} className="image" src={image}></img>
        ))}
      </div>
      <button></button>
    </div>
  );
};

export default NextImage;
