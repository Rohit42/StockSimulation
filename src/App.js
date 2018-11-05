import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import StockDetails from './components/stocks/StockDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Trade from './components/stocks/Trade'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/trade' component={Trade} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
