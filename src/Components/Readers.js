import React from 'react'
import NewReader from './NewReader'
import ReaderDetails from './ReaderDetails'
import '../Stylesheets/Readers.css'

const  Readers = ({ readers, setReaders }) => {
    

    
    function handleAddReader(newReader) {
        setReaders([...readers, newReader])
    }
    
    // const readerList = readers.map(reader => console.log(reader.name))
    const readerList = readers.map(reader => <ReaderDetails key={reader.id} reader={reader}/>)
    // const readerList = readers.map(reader => <li key={reader.id}>{reader.name}</li>)

  return (
    <div className='readers'>
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
