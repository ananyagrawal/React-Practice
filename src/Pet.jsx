import React from "react";

// const Pet = (petob) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, petob.name),
//       React.createElement("h2", {}, petob.animal),
//       React.createElement("h2", {}, petob.breed),
//     ]);
//   };

const Pet = (petob) => {
    return(
        <div>
            <h1>{petob.name}</h1>
            <h2>{petob.animal}</h2>
            <h2>{petob.breed}</h2>
        </div>
    )
}

export default Pet;