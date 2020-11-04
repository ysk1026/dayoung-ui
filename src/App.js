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
        <Route path ='/review-list' component={ReviewList}/>
        <Route path ='/my-review' component={MyReview}/>
        <Route path ='/write-review' component={ReviewWrite}/>
        <Route path ='/edit-review' component={ReviewEdit}/>
      </Switch>
    </Router>

  );
}

export default App;
