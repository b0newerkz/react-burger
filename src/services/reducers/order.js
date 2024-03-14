import { ORDER_ERROR, ORDER_NUMBER, ORDER_REQUEST, ORDER_SUCCESS } from "../actions"
import { initialState } from "../initialState"

export const orderReducer = (state = initialState.order, action) => {

	switch(action.type) {

		case ORDER_ERROR: {

			return { ...state, isError: true, isLoaded: false, id: 0 }
		}

		case ORDER_NUMBER: {

			return {...state, isError: false, isLoaded: false, id: action.id }
		}

		case ORDER_REQUEST: {

			return {...state, isError: false, isLoaded: false }
		}

		case ORDER_SUCCESS: {

			return {...state, isLoaded: true, isError: false, id: action.id}
		}

		default: {

			return state;
		}
	}
}