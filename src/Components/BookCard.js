import React from 'react'

const BookCard = ({book, onDeleteBook}) => {
  
  const {title, author, bookshelf, genre} = book

  const handleDeleteButton = () => {
    fetch(`http://localhost:9292/books/${book.id}`, {
      method: "DELETE",
    })
    onDeleteBook(book)
  }
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td> 
      <td>{genre}</td>
      {/* <td>{bookshelf.location}</td> */}
      
      <td>
      <button type="button" className="btn btn-primary btn-sm">Edit</button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={handleDeleteButton}>Delete</button>
      </td>
    </tr>
  )
}

export default BookCard
