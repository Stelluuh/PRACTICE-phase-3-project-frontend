import React from 'react'
import '../Stylesheets/BookCard.css'


const BookCard = ({book, onDeleteBook}) => {
  
  const {title, author, bookshelf, genre} = book
  console.log(bookshelf)

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
      <button className="btn1" type="button" >Edit</button>
      <button className="btn2" type="button" onClick={handleDeleteButton}>Delete</button>
      </td>
    </tr>
  )
}

export default BookCard
