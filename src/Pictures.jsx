import React from "react";

export default function Pictures({ thumbnailUrl, url, title, id }) {
  return (
    <div>
      <div>
        <a href={url} target="_blank">
          <img src={thumbnailUrl} alt="images text" />
        </a>
        <p>{title}</p>
      </div>
    </div>
  );
}
