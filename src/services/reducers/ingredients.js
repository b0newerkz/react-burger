import { INGREDIENTS_FAILED, INGREDIENTS_REQUEST, INGREDIENTS_SUCCESS } from "../actions"

const initialState = {
	ingredients: [],
	isError: false,
	isLoaded: false,
}


export const ingredientsReducer = (state = initialState, action) => {

	switch(action.type) {

		case INGREDIENTS_FAILED: {

			return { ...state, isError: true, isLoaded: false }
		}

		case INGREDIENTS_REQUEST: {

			return {...state, isError: false, isLoaded: false }
		}

		case INGREDIENTS_SUCCESS: {

			return {...state, isLoaded: true, isError: false, ingredients: action.data}
		}

		default: {

			return state;
		}
	}
}