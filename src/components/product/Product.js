import React from 'react';

export default function Product (props) {
    return (
        <div className='product'>
            <h1>{props.inventoryList.name}</h1>
            <h2>{props.inventoryList.price}</h2>
            <img src={props.inventoryList.image} alt=''/>
        </div>
    )
}