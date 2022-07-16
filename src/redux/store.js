import { legacy_createStore as createStore, combineReducers, compose } from "redux";
import { cartItems } from "./Reducers/reducers";

const rootReducer = combineReducers({
    cartItems
});


const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers
);
