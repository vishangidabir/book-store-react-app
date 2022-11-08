import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Carts";
import Order from "./components/Order/Order";
import Login from "./components/Login/Login2";
import Regiser from "./components/UserRegistration/RegisterForm"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cart">
            < Cart/>
          </Route>
          <Route path="/home">
            < Home/>
          </Route>
          <Route path="/order">
            < Order/>
          </Route>
          <Route path="/login">
            < Login/>
          </Route>
          <Route path="/register">
            < Regiser/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
