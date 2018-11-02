import React, { Component } from 'react';
import axios from 'axios';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import AddForm from './components/form/AddForm';
import EditForm from './components/form/EditForm';
import Header from './components/header/Header';

class App extends Component {

  constructor() {
    super();
    this.state = {
      inventoryList: [],

    }
  }

  getInventory = () => {
    axios.get('/api/inventory').then(response => {
      this.setState({
        inventoryList: response.data
      })
    })
  }

  editCurrentProduct = (product) => {
    this.setState({
      currentProduct: product
    })
    console.log('edit');
    
  }

  componentDidMount() {
    this.getInventory();
  }
  
  render() {
    console.log(this.state.currentProduct)
    return (
      <div className="App">
       <Header />
       <Switch>
         <Route exact path='/' render={() => <Dashboard
            inventoryList={this.state.inventoryList}
            getProducts={this.getInventory}
            editCurrentProduct={this.editCurrentProduct}
            />}/>
          <Route path='/add' render={() => <AddForm 
            getProducts={this.getInventory}
            />}/>
          <Route path='/edit/:id' render={(props) => <EditForm
            {...props}
            getProducts={this.getInventory}
            currentProduct={this.state.currentProduct}
            />}/>
       </Switch>
      </div>
    );
  }
}

export default App;


