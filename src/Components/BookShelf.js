import React from "react";

export default function BookShelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{props.children}</ol>
      </div>
    </div>
  );
}
