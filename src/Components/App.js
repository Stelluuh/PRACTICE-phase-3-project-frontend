import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import NewBook from './NewBook';
import Bookshelf from './Bookshelf';
import Home from './Home';
import Readers from './Readers';
import ReaderDetails from './ReaderDetails';


const App = () => {
  const [readers, setReaders] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/readers')
        .then(response => response.json())
        .then(data => setReaders(data))
    }, [])

  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/bookshelf/add">
          <NewBook />
        </Route>

        <Route path="/bookshelf">
          <Bookshelf 
            
          />
        </Route>

        <Route exact path="/readers">
          <Readers 
            key={readers.id}
            readers={readers}
            setReaders={setReaders}
          />
        </Route>

        <Route path="/readers/:id">
          <ReaderDetails />
        </Route>
        
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
