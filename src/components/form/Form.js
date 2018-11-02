import React, {Component} from 'react';

export default class Form extends Component {

    constructor() {
        super();
        this.state = {
            imageUrl: '',
            productName: '',
            price: 0
        }
    }

    handleUrlChange = (e) => {
        this.setState({
            imageUrl: e.target.value
        })
    }
    
    handleNameChange = (e) => {
        this.setState({
            productName: e.target.value
        })
    }
    
    handlePriceChange = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    handleCancelClick = () => {
        this.setState({
            imageUrl: '',
            productName: '',
            price: 0
        })
    }
    
    render() {
        return (
            <div className='form'>
                <input value={this.state.imageUrl} placeholder='Image URL' onChange={this.handleUrlChange}/>
                <input value={this.state.productName} placeholder='Product Name' onChange={this.handleNameChange}/>
                <input value={this.state.price} placeholder='price' onChange={this.handlePriceChange}/>
                <button onClick={this.handleCancelClick}>Cancel</button>
                <button>Add To Inventory</button>
            </div>
        )
    }
}