import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import MainArea from './Components/MainArea/MainArea';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ReviewArea from './Components/ReviewArea/ReviewArea';
import NotFound from './Components/NotFound/NotFound';



function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header></Header>
            <MainArea></MainArea>
          </Route>
          <Route path='/review'>
            <ReviewArea></ReviewArea>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
