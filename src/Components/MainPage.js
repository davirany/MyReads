import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import { Link } from 'react-router-dom'

export default class MainPage extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }
    render() {
        const { books, onUpdateShelf } = this.props
        const currentlyReading = books.filter((book) => (
            book.shelf === "currentlyReading"
        ))
        const wantToRead = books.filter((book) => (
            book.shelf === "wantToRead"
        ))
        const read = books.filter((book) => (
            book.shelf === "read"
        ))

        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                        { wantToRead.length > 0 &&
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                    { read.map((book) => (
                                        <Book
                                            key = {book.id}
                                            book = {book}
                                            onUpdateShelf = {onUpdateShelf}
                                        />
                                    ))} 
                                    </ol>
                                </div>
                            </div>
                        }
                            { currentlyReading.length > 0 &&
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                    { currentlyReading.map((book) => (
                                        <Book
                                            key = {book.id}
                                            book={book}
                                            onUpdateShelf={onUpdateShelf}
                                        />
                                        ))}
                                    </ol>
                                </div>
                            </div>
                            }
                            { wantToRead.length > 0 &&
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want to Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                    { wantToRead.map((book) => (
                                        <Book
                                            key = {book.id}
                                            book={book}
                                            onUpdateShelf={onUpdateShelf}
                                        />
                                        ))} 
                                    </ol>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to = "/search">
                            Add a Book
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}