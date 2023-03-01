import React from "react";
import { useState, useEffect, useRef } from "react";
const NextImage = () => {
  const [img, setImg] = useState([]);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [imageWidth, setImageWidth] = useState(null);
  const sliderRef = useRef(null);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("https://picsum.photos/v2/list");
        const data = await res.json();
        setImg(data.map((photo) => photo.download_url));
      } catch (err) {
        console.error(err);
      }
    };
    fetchImages();
  }, []);
  function handleMouseDown(event) {
    setStartX(event.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  }
  function handleMouseMove(event) {
    if (!startX) {
      return;
    }
    event.preventDefault();
    const x = event.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  }
  function handleMouseUp() {
    setStartX(null);
  }
  function nextButton() {
    // setCurrentImageIndex(currentImageIndex + 1);
    sliderRef.current.scrollLeft += imageWidth + 14;
    setShouldAnimate(true);
  }
  function prevButton() {
    // setCurrentImageIndex(currentImageIndex - 1);
    sliderRef.current.scrollLeft -= imageWidth + 14;
    setShouldAnimate(true);
  }
  // const canGoBack = currentImageIndex > 0;
  // const canGoForward = currentImageIndex < img.length - 3;
  // const visibleImages = img.slice(currentImageIndex, currentImageIndex + 3);
  // const maxScrollLeft = (img.length - 3) * (imageWidth + 14);
  const hidePrev = false;
  const hideNext = false;
  return (
    <div className="container">
      <button
        className={`arrow-button ${hidePrev ? "hidden" : ""}`}
        onClick={prevButton}
      >
        <img
          className="arrow-image"
          src="./arrow-left-circle-fill.svg"
          alt="Previous"
        />
      </button>
      <div
        ref={sliderRef}
        className={`image-container ${shouldAnimate ? "animate" : ""}`}
        onAnimationEnd={() => setShouldAnimate(false)}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {img.map((imageUrl, index) => (
          <img
            onLoad={(e) => {
              setImageWidth(e.target.clientWidth);
            }}
            key={imageUrl}
            src={imageUrl}
            alt="image"
            className={`image ${index === 1 ? "current" : ""}`}
          />
        ))}
      </div>
      <button
        className={`arrow-button ${hideNext ? "hidden" : ""}`}
        onClick={nextButton}
      >
        <img
          className="arrow-image"
          src="./arrow-right-circle-fill.svg"
          alt="Next"
        />
      </button>
    </div>
  );
};

export default NextImage;
