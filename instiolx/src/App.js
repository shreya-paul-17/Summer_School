import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SellProduct from "./components/SellProduct";
import BuyProducts from "./components/BuyProducts";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <a href="/">Sell Product</a>
              </li>
              <li>
                <a href="/buy">Buy Products</a>
              </li>
              <li>
                <a href="/cart">Cart</a>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={SellProduct} />
            <Route path="/buy" component={BuyProducts} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
