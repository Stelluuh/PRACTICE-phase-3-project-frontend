import React from 'react'

const BookCard = ({id, title, author, genre, location, read, reader}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td> 
      <td>{genre}</td>
      <td>{location}</td>
      <td>{read}</td>
      <td>{reader}</td>
      <td>
        <button type="button" class="btn btn-primary btn-sm">Edit</button>
        <button type="button" class="btn btn-secondary btn-sm">Delete</button>
      </td>
    </tr>
  )
}

export default BookCard
