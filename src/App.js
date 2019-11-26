import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header-component/Header'
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/fireBaseUtils';
import './App.css';



class App extends Component {

  state = {
    currentUser: null,
  }
  unsubscribeFormAuth = null;

  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        console.log(userRef);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });

        console.log(this.state);

      } else {
        this.setState({ currentUser: userAuth });
      }

    });
  }


  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }


  render() {
    const { currentUser } = this.state;

    return (
      <div >
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>

      </div>
    );

  }
}

export default App;
