import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mixed",
//     }),
//   ]);
// };

// const App = () =>{
//   return(
//     <div>
//       <h1>Adopt Me!</h1>
//       <Pet name="Luna" animal="Dog" breed="Havanese"/>
//       <Pet name="Pepper" animal="Bird" breed="Cokatiel"/>
//       <Pet name="Doink" animal="Cat" breed="Mixed"/>
//     </div>
//   )
// }

const App = () => {
  return (
    <BrowserRouter>
      <h1>Adopt Me!</h1>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement(App));
root.render(<App />);
