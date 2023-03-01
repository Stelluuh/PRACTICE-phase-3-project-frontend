import React, { useState, useEffect } from 'react'
import NewReader from './NewReader'

const  Readers = () => {
    const [readers, setReaders] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/readers')
        .then(response => response.json())
        .then(data => setReaders(data))
    }, [])

    
    function handleAddReader(newReader) {
        setReaders([...readers, newReader])
    }
    
    const readerList = readers.map(reader => <li key={reader.id}>{reader.name}</li>)

  return (
    <div>
      <h3>List of Readers</h3>
      {readerList}
      <br/>
      <hr/>
      <h3>Add new Reader</h3>
      <NewReader 
        onAddReader = {handleAddReader}
        />
    </div>
  )
}

export default Readers
