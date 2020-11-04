import React from 'react';
import logo from './logo.svg';
import {Main, MyReview, ReviewEdit, ReviewList, ReviewWrite} from './container'
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ='/' component={Main}/>
      </Switch>
    </Router>

  );
}

export default App;
