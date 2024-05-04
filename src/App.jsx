import { useState } from "react";
import { albumData } from "./albumData";
import Header from "./Header";
import Album from "./Album";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const numAlbums = albumData.length;
  const numPictures = albumData.reduce(
    (acc, album) => acc + album.pictures.length,
    0
  );

  return (
    <>
      <Header numAlbums={numAlbums} numPictures={numPictures} />
      {albumData.map((album) => {
        return <Album {...album} key={album.id} />;
      })}
    </>
  );
}

export default App;
