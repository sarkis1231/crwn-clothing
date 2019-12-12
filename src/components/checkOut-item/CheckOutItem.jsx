import React from 'react';
// import { connect } from 'react-redux';
import './checkOutItem.scss';

const CheckOutItem = ({ name, imageUrl, price, quantity }) => {




    return (
        <div className='checkout-item '>
            <div className='image-container'>
                <img src={imageUrl} alt='broken' />
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button' ><p>&#10005;</p></div>
        </div >
    )
}



export default CheckOutItem;