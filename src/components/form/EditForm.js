import React, {Component} from 'react';
import axios from 'axios';


export default class EditForm extends Component {
    
    constructor(props) {
        super()
        this.state = {
            id: 0,
            imageUrl: '',
            productName: '',
            price: 0
        }
    }

    componentDidMount() {
        // let {id} = this.props.match.params;
        // axios.get(`/api/inventory/${id}`).then(response => {
        //     let product = response.data;
        //     console.log(product)
        //     this.setState({
        //         id: product.id,
        //         imageUrl: product.img,
        //         productName: product.name,
        //         price: product.price
        //     })
        // })
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
    
    updateProduct = () => {
        let {id,imageUrl, productName, price} = this.state;
        axios.put(`/api/inventory/${id}`, {productName, price, imageUrl}).then(() => {
            this.props.getProducts();
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className='edit-form'>
            <input value={this.state.imageUrl} placeholder='Image URL' onChange={this.handleUrlChange}/>
            <input value={this.state.productName} placeholder='Product Name' onChange={this.handleNameChange}/>
            <input value={this.state.price} placeholder='price' onChange={this.handlePriceChange}/>
            <button onClick={this.handleCancelClick}>Cancel</button>        <button onClick={this.updateProduct}>Save Changes</button>
        </div>
        )
    }
}