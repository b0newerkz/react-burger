import { ORDER_ERROR, ORDER_NUMBER, ORDER_REQUEST } from "./index";
import {ORDER_URL} from '../../utils/consts'
import request from "../../utils/request";

// Сделать функциональный экшн где берутся данные из api
export const getOrder = (data, openModal) => {

	return function(dispatch) {

		dispatch({type: ORDER_REQUEST})

		const options = {
			method: 'POST',
			body: JSON.stringify({
				ingredients: data
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		}

		request(ORDER_URL, options).then(data => {

			if(data.success) {

				dispatch({type: ORDER_NUMBER, id: data.order.number})
				openModal()
			} else {
				dispatch({
					type:ORDER_ERROR
				}) //console.log('Ошибка получения данных')
			}
		}).catch(e => {
			dispatch({
				type:ORDER_ERROR
			}) //console.log("Ошибка: "+ e)
		})
	}
}