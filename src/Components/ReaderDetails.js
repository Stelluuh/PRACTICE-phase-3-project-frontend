import React from 'react'
import { Link } from 'react-router-dom'

const ReaderDetails = ({ reader }) => {
    // console.log(`from reader details ${reader.books}`)

  return (
    <div>
      <Link to={`/readers/${reader.id}`} >
      {reader.name}
      </Link>
    </div>
  )
}

export default ReaderDetails
