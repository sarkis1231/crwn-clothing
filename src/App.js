import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage';
import './App.css';


const Hats = () => {
  return (
    <div>
      <h1>SHOP HATS</h1>
    </div>
  )
}

const App = () => {


  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={Hats} />
      </Switch>

    </div>
  );
}

export default App;
