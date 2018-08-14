import React, { Component } from "react";
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";




class BookList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredBooks: this.props.books,
    };

    this.filterBooks = this.filterBooks.bind(this);
  }

  filterBooks(query) {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book => {
      return book.title.toLowerCase().includes(query);
    });
    this.setState({ filteredBooks: filteredBooks });
  }

  filtereBooksByColor(bookColor) {

      return this.state.filteredBooks.filter (book => book.color === bookColor);
  }

  render(){
    let Books = this.state.filteredBooks.map(book => (
      book.title));
    const myBooks= this.props.books;
    const bookColor = this.props.match.params.bookColor;

    if(!bookColor){
      Books = this.state.filteredBooks;

    }else {
      Books = this.filtereBooksByColor(bookColor);
    }
    return (
      <div className = "books">
        <h3> BOOKS </h3>
      <SearchBar changeHandler={this.filterBooks}/>
      <BookTable books = {myBooks} filter = {this.state.filteredBooks}/>

    </div>

    );
  }

}

export default BookList;
