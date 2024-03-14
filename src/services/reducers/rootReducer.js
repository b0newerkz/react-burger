import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { constructorReducer } from "./constructor";
import { orderReducer } from "./order";


/*
export const rootReducer = combineReducers({
	step: stepReducer,
	cart: cartReducer,
 });
*/
export const rootReducer = combineReducers({
	ingredients: ingredientsReducer,
	constructorData: constructorReducer,
	order: orderReducer
});