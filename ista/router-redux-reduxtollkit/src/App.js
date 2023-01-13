import './App.css';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import About from './About';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <Router>

      <div className="App">
        <Nav />
        app
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
          <Route exact path="/product/:id">
            <ProductDetails />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
