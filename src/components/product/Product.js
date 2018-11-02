import React from 'react';
import {Link} from 'react-router-dom';

export default function Product (props) {

    const {id, name, price, img} = props.inventoryList;

    return (
        
        <div className='product'>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <img src={img} alt=''/>
            <Link to={`/edit/${id}`}><button onClick={() => props.editCurrentProduct(props.inventoryList)}>Edit</button></Link>
            <button onClick={() => props.deleteProduct(id)}>Delete</button>
        </div>
    )
}