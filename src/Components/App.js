import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import NewBook from './NewBook';
import Bookshelves from './Bookshelves';
import Home from './Home';
import Readers from './Readers';
import ReaderDetails from './ReaderDetails';
import Shelf from './Shelf'


const App = () => {
  const [readers, setReaders] = useState([])
  // const [books, setBooks] = useState([])
  const [bookshelves, setBookshelves] = useState([])

// 

  useEffect(() => {
      fetch('http://localhost:9292/readers')
      .then(response => response.json())
      .then(data => setReaders(data))
  }, [])


  useEffect(() => {
    fetch('http://localhost:9292/bookshelfs')
      .then(response => response.json())
      .then(data => setBookshelves(data))
  }, [])

  console.log({bookshelves})

  return (
    <Router>
      <div className="App">
      <NavBar />

      <Routes>
        <Route path="/bookshelf/add">
          <NewBook />
        </Route>
       
        <Route 
          exact path="/bookshelfs" element={
            <Bookshelves 
            key={bookshelves.id}
            bookshelves={bookshelves}
            setBookshelves={setBookshelves}
            />
          }
        />

        <Route path="/bookshelfs/:id"element={<Shelf />}/>
          
        <Route 
          exact path="/readers" element={
            <Readers
            key={readers.id}
              readers={readers}
              setReaders={setReaders}
            />
          }
        />

        <Route path="/readers/:id" element={<ReaderDetails />}/>
        <Route exact path="/readers/:id" element={<Home />}/>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
