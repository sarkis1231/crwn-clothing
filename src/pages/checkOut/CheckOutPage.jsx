import React from 'react';
import { connect } from 'react-redux';
import CheckOutItem from '../../components/checkOut-item/CheckOutItem';

import './checkOutPage.scss';


const CheckOutPage = ({ cartItems, totalPrice }) => {


    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.length ? cartItems.map(cartItem => (
                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                )) : (<h1>No Items to show</h1>)
            }
            <div className='total'>
                <span>TOTAL: ${totalPrice}</span>
            </div>
        </div>
    )

}


const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems,
    totalPrice: cartItems.reduce((accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price
        , 0
    )
})

export default connect(mapStateToProps)(CheckOutPage);