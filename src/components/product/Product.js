import React from 'react';

export default function Product (props) {

    const {id, name, price, img} = props.inventoryList;

    return (
        
        <div className='product'>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <img src={img} alt=''/>
            <button onClick={() => props.getCurrentProduct(id)}>Edit</button>
            <button onClick={() => props.deleteProduct(id)}>Delete</button>
        </div>
    )
}