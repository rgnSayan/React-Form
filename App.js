import React from 'react';
import Home from './Component/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import FeedbackForm from './Component/FeedbackForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/feedback">
            <FeedbackForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
