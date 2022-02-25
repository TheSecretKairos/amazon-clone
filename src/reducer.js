import { StepContent } from "@material-ui/core";

export const initialState = {
    basket: [],
    user: null
    //use: null,
};

//selector

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.warn(`Impossibile rimuovere il prodotto (id: $(action.id)) perchè non è nel carrello`)
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
};
export default reducer;