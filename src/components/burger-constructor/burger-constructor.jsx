import React, {useContext, useState} from 'react'
import style from './burger-constructor.module.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from '../order-details/order-details'
import Modal from '../modal/modal'
import { useModal } from '../hooks/use-modal'
import { ConstructorContext } from '../../utils/context'
import ConstructorIngredients from '../constructor-ingredients/constructor-ingredients'
import request from '../../utils/request'

const ORDER_URL = 'https://norma.nomoreparties.space/api/orders'

const BurgerConstructor = (props) => {

	const [orderId, setOrderId] = useState('');
	const { isModalOpen, openModal, closeModal } = useModal();
	const {ingredients, dispatchIngredients} = useContext(ConstructorContext);

	// Оформление заказа (булку передавать 2 раза)
	const confirmOrder = () => {

		const bunId = ingredients.data.findIndex(e => e.type === 'bun');
		if(bunId === -1) {

			console.warn('Нет булки')
			return;
		}

		if(ingredients.data.findIndex(e => e.type !== 'bun') === -1) {

			console.warn('Нет ингредиентов')
			return;
		}

		const post = {

			ingredients: ingredients.data.map(e => e._id)
		}

		// Добавляем ещё одну булку(нижнюю)
		post.ingredients.push(ingredients.data[bunId]._id);
		
		const options = {

			method: 'POST',
			body: JSON.stringify(post),
			headers: {

				'Content-type': 'application/json; charset=UTF-8'
			}
		}

		request(ORDER_URL, options).then(data => {

			if(data.success) {

				console.log("Order: "+ data.order.number)
				setOrderId(data.order.number);
				openModal();
			} else {
				console.log('Ошибка получения данных')
			}
		}).catch(e => {
			console.log("Ошибка: "+ e)
		})
	}

	return (
		<div className={style.main}>
			<div className={style.list}>

				<ConstructorIngredients />

				<div className={style.button}>
					<p className="text text_type_digits-medium">{ingredients.sum}</p>
					<CurrencyIcon type="primary"/>
					<Button htmlType="button" type="primary" onClick={confirmOrder} size="medium">Оформить заказ</Button>
					{isModalOpen && <Modal onClose={closeModal}><OrderDetails orderId={orderId} /></Modal>}
					</div>
			</div>
		</div>
	)
}



export default BurgerConstructor