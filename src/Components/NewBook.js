import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../Stylesheets/NewBook.css'

const NewBook = () => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const [location, setLocation] = useState('')
  const [read, setRead] = useState(null)
  const [reader, setReader] = useState('')
  const history = useHistory()
// 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      title: title,
      author: author,
      genre: genre,
      location: location,
      read: read,
      reader: reader 
    }

    setTitle('')
    setAuthor('')
    setGenre('')
    setLocation('')
    setRead(null)
    setReader('')

    history.push('/bookshelf')

    fetch('http://localhose:9292/books', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
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
          <br/>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}

          />
          <br/>
          <label>Read:</label>
          <input
            type="text" 
            value={read}
            onChange={e => setRead(e.target.value)}

          />
          <br/>
          <label>Reader:</label>
          <input
            type="text"
            value={reader}
            onChange={e => setReader(e.target.value)}
          />
          </div>
          <div className="bottom-container">

          <button type="submit" id="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default NewBook
