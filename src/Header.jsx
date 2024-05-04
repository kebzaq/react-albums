import React from "react";

export default function Header({ numAlbums, numPictures }) {
  return (
    <header>
      <h1>Welcome to my album!</h1>
      <h2>
        There are {numAlbums} albums and {numPictures} pictures
      </h2>
    </header>
  );
}
