import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './Components/MainPage'
import SearchPage from './Components/SearchPage'

export default class BooksApp extends React.Component {
  state = {
    books:[]
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => {
        this.setState(() => ({
            books
        }))
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((r) => {
      book.shelf = shelf
      this.setState((currentState) => ({
        books: currentState.books.filter((f) => {
          return f.id !== book.id
        }).concat([book])
      }))

    })
  }
  render() {
    return (
      <div>
        <div>
            <MainPage
              books={this.state.books}
              onUpdateShelf={this.updateShelf}
            />
            {/* <SearchPage
              books={this.state.books}
              onUpdateShelf={this.updateShelf}
            /> */}
        </div>
      </div>
    )
  }
}