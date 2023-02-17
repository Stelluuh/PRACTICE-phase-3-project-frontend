import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'

const NewBook = () => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const [comment, setComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      Title: title,
      Author: author,
      Genre: genre,
      Comment: comment 
    }

    setTitle('')
    setAuthor('')
    setGenre('')
    setComment('')

    // history.push('/shelf')

    fetch('http://localhost:3001/shelf', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem)
    })
  }

  return (
    <div>
      <p>New Book Form</p>
      <form className="newItem" onSubmit={handleSubmit}>
                    <div className="top-container">
                        <label>Title:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        
                        <br/>
                        <label>Author</label>
                        <input
                            type="text"
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                        />
                        
                        <br/>
                        <label>Genre:</label>
                        <input
                            type="text"
                            value={genre}
                            onChange={e => setGenre(e.target.value)}

                        />
                    </div>
                    <div className="bottom-container">
                    <br/>
                    <label>Comment:</label>
                    <textarea
                        className="memory"
                        type="text"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                    <br/>
                    <button 
                        type="submit"
                        id="submit"
                    >
                        Submit
                    </button>
                    </div>

                </form>
    </div>
  )
}

export default NewBook
