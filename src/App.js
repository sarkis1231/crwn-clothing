import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header-component/Header'
import './App.css';



const App = () => {


  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>

    </div>
  );
}

export default App;
