import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/shelf/add">
          <NewBook />
        </Route>

        <Route path="/shelf">
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
