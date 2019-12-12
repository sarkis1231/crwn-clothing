import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cartActions';

import './cartIcon.scss';



const CartIcon = ({ toggleCartHidden, itemCount }) => {

    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count' >{itemCount}</span>
        </div>
    )

}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce(
        (accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity, 0)
})

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);