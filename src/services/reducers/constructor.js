import { CONSTRUCTOR_ADD_INGREDIENT, CONSTRUCTOR_REMOVE_INGREDIENT, CONSTRUCTOR_ADD_BUN } from "../actions";
import { v4 as uuidv4 } from 'uuid';

const initialState = {

	bun: null,
	main: [],
	sum: 0
};

export const constructorReducer = (state = initialState, action) => {

	switch(action.type) {

		
		case 'CONSTRUCTOR_LOG': {

			console.log('VALUE: '+ action.value)
			console.log(state)
			return state
		}
		case CONSTRUCTOR_REMOVE_INGREDIENT: {

			const main = [...state.main];

			// Ищем по uuid ингредиент
			const itemId = main.findIndex((e) => e.uuid === action.uuid);
			const price = main[itemId].price;
			main.splice(itemId, 1);

			// data.findIndex((e) => e.uuid === action.payload);
			return {...state, main: main, sum: state.sum - price}
		}

		case CONSTRUCTOR_ADD_INGREDIENT: {

			return {...state, main: [...state.main, {...action.item, uuid: uuidv4()}], sum: state.sum + action.item.price};
		}
		
		case CONSTRUCTOR_ADD_BUN: {

			const item = {...action.item, uuid: uuidv4()};
			let price = state.sum

			// Если есть уже булка - минусуем двойную цену
			if(state.bun) {

				price -= state.bun.price * 2;
			}

			// Плюсуем двойную цену
			return {...state, bun: item, sum: price + item.price * 2};
		}

		default: {
			return state
		}
	}
}

/*
import { INGREDIENTS_FAILED, INGREDIENTS_REQUEST, INGREDIENTS_SUCCESS } from "../actions"

const initialState = {
	ingredients: [],
	isError: false,
	isLoading: false,
}


export const ingredientsReducer = (state = initialState, action) => {

	switch(action.type) {

		case INGREDIENTS_FAILED: {

			return { ...state, isError: true, isLoading: false }
		}

		case INGREDIENTS_REQUEST: {

			return {...state, isLoading: true, isError: false}
		}

		case INGREDIENTS_SUCCESS: {

			return {...state, isLoading: false, isError: false, ingredients: action.data}
		}

		default: {

			return state;
		}
	}
}
*/