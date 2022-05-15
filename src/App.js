import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import MainPage from "./Components/MainPage";
import SearchPage from "./Components/SearchPage";
import { Route } from "react-router-dom";

export default class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((r) => {
      book.shelf = shelf;
      this.setState((currentState) => ({
        books: currentState.books
          .filter((f) => {
            return f.id !== book.id;
          })
          .concat([book]),
      }));
    });
  };
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <MainPage
              books={this.state.books}
              onUpdateShelf={this.updateShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchPage
              books={this.state.books}
              onUpdateShelf={this.updateShelf}
            />
          )}
        />
      </div>
    );
  }
}
