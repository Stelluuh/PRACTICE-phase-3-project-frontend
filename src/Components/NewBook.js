import React, { useState } from 'react'

const NewBook = () => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const [comment, setComment] = useState('')

  return (
    <div>
      <p>New Book Form</p>
    </div>
  )
}

export default NewBook
