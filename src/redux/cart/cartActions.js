export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM = 'ADD_ITEM';


export const toggleCartHidden = () => dispatch => {
    dispatch({ type: TOGGLE_CART_HIDDEN })
}

export const addItem = item => dispatch => {


    dispatch({ type: ADD_ITEM, payload: item })
}

