import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component {

    constructor() {
        super();
        this.state = {
            imageUrl: '',
            productName: '',
            price: 0,
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

    addProduct = () => {
        let {imageUrl, productName, price} = this.state
        axios.post('/api/inventory', {productName, price, imageUrl}).then(() => {
            this.props.getProducts();
            this.handleCancelClick();
        })
    }
    
    render() {

        return (
            <div className='add-form'>
                <input value={this.state.imageUrl} placeholder='Image URL' onChange={this.handleUrlChange}/>
                <input value={this.state.productName} placeholder='Product Name' onChange={this.handleNameChange}/>
                <input value={this.state.price} placeholder='price' onChange={this.handlePriceChange}/>
                <button onClick={this.handleCancelClick}>Cancel</button>        <button onClick={this.addProduct}>Add To Inventory</button>
            </div>
        )
    }
}