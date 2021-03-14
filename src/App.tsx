import React from 'react';
import './App.css';

import {
  Route,
  Switch,
  Redirect,
} from "react-router-dom"

import AddressPage from "./components/pages/address";
import Transactions from "./components/pages/transactions";
import LeftMenu from "./components/leftMenu";

function App() {
  return (
    <div className="App">
      <LeftMenu/>
      <div className="MainContent">
      <Switch>
        <Route path='/address' component={AddressPage} />
        <Route  path='/transaction/:id' component={Transactions} />
        <Route  exact path='/transaction' component={Transactions} />
        <Redirect from='/' to='/address'/>
      </Switch>
      </div>
    </div>
  );
}

export default App;
