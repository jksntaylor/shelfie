import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import Header from './components/header/Header';

class App extends Component {

  constructor() {
    super();
    this.state = {
      inventoryList: [{
        name: 'shoes',
        price: 55,
        image: 'https://images.finishline.com/is/image/FinishLine/410453A_014?$Main_gray$'
      },{
        name: 'sweater',
        price: 32,
        image: 'https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwc3dd0e40/images/hi-res/50580_GLDG.jpg?sw=750&sh=750&sm=fit&sfrm=png'
      },{
        name: 'jeans',
        price: 68,
        image: 'https://www.dhresource.com/0x0s/f2-albu-g6-M01-D8-47-rBVaSFplr3WAINAKAADNAV6eoFw511.jpg/new-designer-mens-jeans-skinny-with-slim.jpg'
      }]
    }
  }

  render() {
    console.log(this.state.inventoryList);
    return (
      <div className="App">
       <Header />
       <Dashboard 
       inventoryList={this.state.inventoryList}
       />
       <Form />
      </div>
    );
  }
}

export default App;
