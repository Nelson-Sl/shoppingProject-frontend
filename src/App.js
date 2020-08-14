import React from 'react';
import './App.css';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className = "navigation">
        <BrowserRouter>
          <Link to= '/'>商城</Link>
          <Link to='/orders'>订单</Link>
          <Link to='/addItems'>添加商品</Link>

          <Switch>
            <Route path='/orders' />
            <Route path='/addItems' />
            <Route exact path='/' />
          </Switch>
        </BrowserRouter>       
      </nav>
    </div>
  );
}

export default App;
