import React, {Component} from 'react';
import Product from '../product/Product';

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inventoryList: this.props.inventoryList
        }
    }

    render() {

        let list = this.state.inventoryList.map((product, index) => {
            return (
                <Product inventoryList={this.state.inventoryList[index]}/>
            )
        })
        return (
            <div>
                Dashboard
                {list}
            </div>
        )
    }
}