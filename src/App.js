import React from 'react';
import { Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import './App.css';

import HomePage from "./pages/homepage/homepage.component"

const HatsPage = ()=> (
  <div>
   <h1>Hats</h1>
  </div>
)


function App(props) {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route  exact path='/shop/hats' component={HatsPage} />

    </div>
  );
}

export default App;
