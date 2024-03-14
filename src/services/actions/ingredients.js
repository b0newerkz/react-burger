import { INGREDIENTS_REQUEST, INGREDIENTS_FAILED, INGREDIENTS_SUCCESS } from "./index";
import {API_URL} from '../../utils/consts'
import request from "../../utils/request";

// Сделать функциональный экшн где берутся данные из api
export const getIngredients = () => {

	return function(dispatch) {

		dispatch({type: INGREDIENTS_REQUEST})

		request(API_URL).then(data => {

			if(data.success) {
				dispatch({
					type: INGREDIENTS_SUCCESS,
					data: data.data
				}) //setData({isLoaded: true, hasError: false, ingredients: data.data})
			} else {

				dispatch({
					type:INGREDIENTS_FAILED
				}) //console.log('Ошибка получения данных')
			}
		}).catch(e => {
			dispatch({
				type:INGREDIENTS_FAILED
			})//console.log("Ошибка: "+ e) setData({...data.ingredients, isLoading: false, hasError: true })
		})		
	}
}
