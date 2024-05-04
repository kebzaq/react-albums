import React from "react";
import Pictures from "./Pictures";

export default function Album({ albumName, description, pictures, id }) {
  return (
    <div className="main">
      <h2>{albumName}</h2>
      <h4>{description}</h4>
      <div className="pics">
        {pictures.map((picture) => {
          return <Pictures {...picture} />;
        })}
      </div>
      <hr />
    </div>
  );
}
