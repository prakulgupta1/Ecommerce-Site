import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <SearchBar />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;