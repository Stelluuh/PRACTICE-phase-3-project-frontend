import React, { useState } from 'react'

const NewReader = ({ onAddReader }) => {
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newName = {
            name: name
        }
        // console.log(`submited ${name}`)
        
        fetch('http://localhost:9292/readers', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newName)
        })
        .then(response => response.json())
        .then(newReader =>{
            onAddReader(newReader)
            setName('')
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            />
        <br/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default NewReader
