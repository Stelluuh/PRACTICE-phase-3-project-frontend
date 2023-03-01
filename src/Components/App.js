import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import NewBook from './NewBook';
import Bookshelf from './Bookshelf';
import Home from './Home';
import Readers from './Readers'


const App = () => {
  const [readers, setReaders] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/readers')
    .then(response => response.json())
    .then(data => setReaders(data))
  }, [])
  
  // console.log(readers)
  
  
  

  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/bookshelf/add">
          <NewBook />
        </Route>

        <Route path="/bookshelf">
          <Bookshelf 
            readers={readers}
          />
        </Route>

        <Route path="/readers">
          <Readers 
            readers={readers}
          />
        </Route>
        
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
