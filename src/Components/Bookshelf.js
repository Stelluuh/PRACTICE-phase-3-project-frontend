import React, { useState, useEffect } from 'react'
import BookCard from './BookCard'

const Shelf = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/books')
      .then(response => response.json())
      .then(data => setBooks(data))
  }, [])

  // console.log({books})

  const handleDeleteBook = (deletedBook) => {
    const updatedBooks = books.filter(book => book.id !== deletedBook.id)
    setBooks(updatedBooks)
    // console.log('deleted!')
  }
 
  const bookList = books.map((book) => {
    return (
      <BookCard 
        key={book.id}
        book={book} 
        onDeleteBook = {handleDeleteBook}
      />
    )
  })


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {bookList}
        </tbody>
      </table>
    
    </div>
  )
}

export default Shelf
