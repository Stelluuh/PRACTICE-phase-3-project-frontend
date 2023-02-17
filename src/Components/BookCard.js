import React from 'react'

const BookCard = ({id, title, author, genre, comment}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td> 
      <td>{genre}</td>
      <td>{comment}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  )
}

export default BookCard
