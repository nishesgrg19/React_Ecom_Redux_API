import { combineReducers } from "redux";
import { product_reducer ,selected_product_reducer} from "./p_reducer";

export const rootreducer=combineReducers({
    product_reducer,selected_product_reducer
})