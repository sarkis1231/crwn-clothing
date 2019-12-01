import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header-component/Header'
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/fireBaseUtils';
import { setCurrentUser } from './redux/user/userActions'



class App extends Component {

  unsubscribeFormAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });



      } else {
        setCurrentUser(userAuth);
      }

    });
  }


  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }


  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' render={() =>
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
                <SignInSignUp />)
          }
          />
        </Switch>

      </div>
    );

  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
