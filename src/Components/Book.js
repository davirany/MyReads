import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
  };

  render() {
    const { onUpdateShelf, book } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            {book.imageLinks !== undefined ? (
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: "url( " + book.imageLinks.thumbnail + ")",
                }}
              ></div>
            ) : (
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  background: "#60ac5d",
                  cursor: "help",
                }}
              ></div>
            )}
            <div className="book-shelf-changer">
              <select
                onChange={(e) => onUpdateShelf(book, e.target.value)}
                value={book.shelf}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors !== undefined &&
              book.authors.map((authorName, x) =>
                book.authors.length - 1 !== x ? authorName + ", " : authorName
              )}
          </div>
        </div>
      </li>
    );
  }
}
