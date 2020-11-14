import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import HomePage from "./pages/homepage/homepage.component";
import { auth,createUserProfileDocument } from './firebase/firebase.util';

import './App.css';



class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser : null
    }
  }


  unsubscribeAuth = null;

  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
          this.setState({
            currentUser: {
              id : snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state))
        })
      } else {
        this.setState({
          currentUser: userAuth
        }, () => console.log(this.state))
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeAuth();
  }


  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUp} />
      </Switch>
      </div>
    );
  }
}

export default App;
