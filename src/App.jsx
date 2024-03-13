import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PizzaOrderForm from "./components/Pizzaorder";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pizzaorder">
            <PizzaOrderForm />
            {/* buraya pizza sipariş formu gelecek. */}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
