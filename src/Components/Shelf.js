import React, { useState, useEffect } from 'react'

const Shelf = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])


  return (
    <div>
      <li>List of books</li>
    </div>
  )
}

export default Shelf
