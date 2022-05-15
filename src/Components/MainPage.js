import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

export default class MainPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
  };
  render() {
    const { books, onUpdateShelf } = this.props;
    const read = books.filter((book) => book.shelf === "read");
    const currentlyReading = books.filter(
      (book) => book.shelf === "currentlyReading"
    );
    const wantToRead = books.filter((book) => book.shelf === "wantToRead");

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf shelfTitle="Read" onUpdateShelf={onUpdateShelf}>
                {read.map((book) => (
                  <Book
                    key={book.id}
                    book={book}
                    onUpdateShelf={onUpdateShelf}
                  />
                ))}
              </BookShelf>
              <BookShelf
                shelfTitle="Currently Reading"
                onUpdateShelf={onUpdateShelf}
              >
                {currentlyReading.map((book) => (
                  <Book
                    key={book.id}
                    book={book}
                    onUpdateShelf={onUpdateShelf}
                  />
                ))}
              </BookShelf>
              <BookShelf
                shelfTitle="Want to Read"
                onUpdateShelf={onUpdateShelf}
              >
                {wantToRead.map((book) => (
                  <Book
                    key={book.id}
                    book={book}
                    onUpdateShelf={onUpdateShelf}
                  />
                ))}
              </BookShelf>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a Book</Link>
          </div>
        </div>
      </div>
    );
  }
}
