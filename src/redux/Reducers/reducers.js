import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionType";

const initialState = {
    cardData: [],
}

export const cartItems = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case ADD_TO_CART:
            newState['cardData'].push(action.payload.data)
            //console.log('reducers', action, newState)
            break;

        case REMOVE_FROM_CART:
            newState['cardData'].pop(action.payload.data)
        default: { }

    }
    return newState;
}

