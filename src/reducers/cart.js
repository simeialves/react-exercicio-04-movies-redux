import { CLEAR_CART, SET_PRODUCT } from "../actions/cart";

const initialState = {
    products: [],
};

export function cart(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                products: state.products.concat(action.payload),
            };
		case CLEAR_CART:
			return {
				...state,
				products: []
			}

        default:
            return state;
    }
}
