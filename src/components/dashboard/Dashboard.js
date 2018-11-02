import React, {Component} from 'react';
import Product from '../product/Product';
import axios from 'axios';

export default class Dashboard extends Component {

        deleteProduct = (productID)  => {
            axios.delete(`/api/inventory/${productID}`).then(() => {
                this.props.getProducts();
            })
        }

        render() {
            let list = this.props.inventoryList.map((product) => {
                return (
                    <Product 
                    inventoryList={product} 
                    key={product.id}
                    deleteProduct={this.deleteProduct}
                    editCurrentProduct={this.props.editCurrentProduct}/>
                )
            })
            return (
                <div>
                    {list}
                </div>
            )
        }
}