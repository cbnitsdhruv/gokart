import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionType";

export const addToCart = (data) => {
    //console.log('action', data)
    return{
        type:ADD_TO_CART,
        payload:{data}
    }
}
export const removeFromCart = (data) => {
    //console.log('action', data)
    return{
        type:REMOVE_FROM_CART,
        payload:{data}
    }
}


