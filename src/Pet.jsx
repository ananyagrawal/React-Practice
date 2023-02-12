/* eslint-disable react/prop-types */
import React from "react";

// const Pet = (petob) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, petob.name),
//       React.createElement("h2", {}, petob.animal),
//       React.createElement("h2", {}, petob.breed),
//     ]);
//   };

// const Pet = (petob) => {
//     return(
//         <div>
//             <h1>{petob.name}</h1>
//             <h2>{petob.animal}</h2>
//             <h2>{petob.breed}</h2>
//         </div>
//     )
// }

const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
