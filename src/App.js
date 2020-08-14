import React, {Component} from 'react';
import './App.css';
import './navigation.css'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

class App extends Component {
  state = {
      items: [],
      orders: [],
  }

  componentDidMount() {
    const itemUrl = 'http://localhost:8080/shop/item';
    const orderUrl = 'http://localhost:8080/shop/order'
    const items = [];
    const orders = [];

    fetch(itemUrl).then((response) => {
      if(response.status === 200) {
        return response.json();
      }
      return Promise.reject('error');
    }).then(item => items.add(item))
      .catch(console.log('error'));

    fetch(orderUrl).then((response) => {
      if(response.status === 200) {
        return response.json();
      }
      return Promise.reject('error');
    }).then(order => orders.add(order))
      .catch(console.log('error'));

      this.setState({
        items,orders,
      })
  }

  render() {
    return (
      <div className="App">
        <nav className = "navigation">
          <BrowserRouter>
            <Link className='pages' to= '/'>商城</Link>
            <Link className='pages' to='/orders'>订单</Link>
            <Link className='pages' to='/addItems'>添加商品</Link>

            <Switch>
              <Route path='/orders' />
              <Route path='/addItems' />
              <Route exact path='/' />
            </Switch>
          </BrowserRouter>       
        </nav>
      </div>
    );
  };
}

export default App;
