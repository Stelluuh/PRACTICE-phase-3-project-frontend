import React, { useState, useEffect } from 'react'
import BookCard from './BookCard'

const Shelf = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(data => setBooks(data))
  }, [])

  console.log({books})
 
  const bookList = books.map((b) => {
    return (
      <BookCard key={b.id} {...b}/>
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
            <th>Comment</th>
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
