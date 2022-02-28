import React, { useEffect } from "react";
import './css/App.css';
import Header from './Header';
import Home from "./Home"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from "./Payment";
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from "./Orders";

//router-version precedente: 6.2.1

const promise = loadStripe('pk_test_51KX6xlJIMi2vKTiNQiUKiAQ9faxoIzohyHRhmbwYFakoDT7QFXwB6TYMZU4PNYhdcTUhG8xmUeOjXyPxNRK8l5LG00LV9rYnhK');

function App() {
  const [{ }, dispatch] = useStateValue();


  useEffect(() => {
    //will only run when the app component loads,,,
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);
      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
        <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
