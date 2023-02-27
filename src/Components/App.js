import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import NewBook from './NewBook';
import Shelf from './Shelf';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/bookshelf/add">
          <NewBook />
        </Route>

        <Route path="/bookshelf">
          <Shelf />
        </Route>
        
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
