import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import Header from './components/header/Header';
import axios from 'axios'

class App extends Component {

  constructor() {
    super();
    this.state = {
      inventoryList: [],
      currentProduct: {
        name: '',
        price: 0,
        img: ''
      }
    }
  }

  getInventory = () => {
    axios.get('/api/inventory').then(response => {
      this.setState({
        inventoryList: response.data
      })
    })
  }

  getCurrentProduct = (product) => {
    this.setState({
      currentProduct: product
    })
  }

  componentDidMount() {
    this.getInventory();
  }
  
  render() {
    return (
      <div className="App">
       <Header />
       <Dashboard 
       inventoryList={this.state.inventoryList}
       getProducts={this.getInventory}
       getCurrentProduct={this.getCurrentProduct}
       />
       <Form getProducts={this.getInventory}/>
      </div>
    );
  }
}

export default App;
