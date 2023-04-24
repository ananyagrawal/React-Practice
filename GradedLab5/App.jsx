import React from "react";
import { createRoot } from "react-dom/client";
import Student from "./Student.jsx";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Student />
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
