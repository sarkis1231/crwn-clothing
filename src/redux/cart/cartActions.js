export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';


export const toggleCartHidden = () => dispatch => {
    dispatch({ type: TOGGLE_CART_HIDDEN })
}