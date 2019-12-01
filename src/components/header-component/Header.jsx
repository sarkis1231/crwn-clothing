import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/fireBaseUtils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropDown from '../cart-dropDown/CartDropDown';

import './header.scss';



const Header = ({ currentUser, hidden }) => {





    return (

        <div className='header'>
            <Link className='log-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
        </Link>
                <Link className='option' to='/shop'>
                    CONTACT
        </Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className='option' to='/signin'>
                            SIGNIN
            </Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null :
                    <CartDropDown />
            }
        </div>
    )
}


const MapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden

})

export default connect(MapStateToProps, {})(Header); 