import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCard, addItem, removeItem } from '../../redux/cart/cartActions';

import './checkOutItem.scss';

const CheckOutItem = ({ cartItem, clearItemFromCard, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const handleRemoveItem = (e) => {
        e.preventDefault();
        clearItemFromCard(cartItem);
    }


    return (
        <div className='checkout-item '>
            <div className='image-container'>
                <img src={imageUrl} alt='broken' />
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={handleRemoveItem} ><p>&#10005;</p></div>
        </div>
    )
}




export default connect(null, { clearItemFromCard, addItem, removeItem })(CheckOutItem);