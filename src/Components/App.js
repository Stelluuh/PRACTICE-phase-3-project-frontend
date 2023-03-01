import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import NewBook from './NewBook';
import Bookshelf from './Bookshelf';
import Home from './Home';
import Readers from './Readers'


const App = () => {

const [readers, setReaders] = useState([])


  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/bookshelf/add">
          <NewBook />
        </Route>

        <Route path="/bookshelf">
          <Bookshelf />
        </Route>

        <Route path="/readers">
          <Readers />
        </Route>
        
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
