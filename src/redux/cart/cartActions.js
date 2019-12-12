export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM = 'ADD_ITEM';
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const toggleCartHidden = () => dispatch => {
    dispatch({ type: TOGGLE_CART_HIDDEN })
}

export const addItem = item => dispatch => {


    dispatch({ type: ADD_ITEM, payload: item })
}

export const removeItem = item => dispatch => {

    dispatch({ type: REMOVE_ITEM, payload: item })
}

export const clearItemFromCard = item => dispatch => {

    dispatch({ type: CLEAR_ITEM_FROM_CART, payload: item })
}

