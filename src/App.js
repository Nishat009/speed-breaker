import React, { createContext, useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination'
import noMatch from './components/noMatch/noMatch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking'
import Ride from './components/Ride/Ride';


export const UserContext =createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header>
          <Switch>

            <Route path="/home">
              <Home></Home>
            </Route>
            
            <PrivateRoute path="/destination/:vehicleName/:id">
              <Destination></Destination>
            </PrivateRoute>
            <PrivateRoute path="/destination">
              <Ride></Ride>
            </PrivateRoute>
            <PrivateRoute path="/booking/:id">
             <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <noMatch></noMatch>
            </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;