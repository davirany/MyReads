import React from "react";
import Camelize from "../utils/Camelize";

export default function BookShelf(props) {
  const camalized = Camelize(props.shelfTitle);
  return (
    camalized.length > 0 && (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">{props.children}</ol>
        </div>
      </div>
    )
  );
}
