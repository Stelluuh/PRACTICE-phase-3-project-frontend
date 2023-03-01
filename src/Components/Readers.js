import React from 'react'

const  Readers = ({ readers }) => {
    console.log(readers)

    const readerList = readers.map(reader => <li>{reader.name}</li>)
    

  return (
    <div>
      <h1>List of Readers</h1>
      {readerList}
    </div>
  )
}

export default Readers
