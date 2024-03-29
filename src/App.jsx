import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PizzaOrderForm from "./components/Pizzaorder";
import Success from "./components/success/Success";
import ConsolidatedFormComponent from './FormRelatedFolder/ConsolidatedFormComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/home/Header/Header"
import Footer from "./components/home/FooterFolder/Footer"



function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <ConsolidatedFormComponent path="/pizzaorder" />
          <Route exact path="/pizzaorder">
            <PizzaOrderForm />
            {/* buraya pizza sipariş formu gelecek. */}

          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;
