import React from "react";
import { createRoot } from "react-dom/client";
import ImageCarousel from "./ImageCarousel";

const App = () => {
  return (
    <div>
      <h1>Project 1</h1>
      <ImageCarousel />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
