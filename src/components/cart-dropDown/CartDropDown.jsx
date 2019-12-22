import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cartActions'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/cartItem';

import './cartDropDown.scss';


const CartDropDown = ({ cartItems, history, toggleCartHidden }) => {

    const handleClick = () => {
        history.push('/checkout');
        toggleCartHidden();
    };

    console.log(history);
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                        :
                        (<span className='empty-message'>Your cart is empty</span>)
                }
            </div>
            <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
        </div>
    )
};


const mapStatetoProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default withRouter(connect(mapStatetoProps, { toggleCartHidden })(CartDropDown));