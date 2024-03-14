import React, {useMemo} from 'react'
import style from './burger-constructor.module.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from '../order-details/order-details'
import Modal from '../modal/modal'
import { useModal } from '../hooks/use-modal'
import ConstructorIngredients from '../constructor-ingredients/constructor-ingredients'
import { useSelector, useDispatch } from 'react-redux'
import { getOrder } from '../../services/actions/order'
import { useDrop } from 'react-dnd'
import { addIngredient } from '../../services/actions/constructor'
const BurgerConstructor = () => {

	const {isModalOpen, openModal, closeModal} = useModal();
	const ingredients = useSelector(store => store.constructorData)
	const dispatch = useDispatch();
	const orderId = useSelector(store => store.order.id)
	const allIngredients = useSelector(store => store.ingredients.data);

	const confirmOrder = () => {

		// Проверяем булку
		if(!ingredients.bun) {
			return;
		}

		// Проверяем ингредиенты
		if(ingredients.main.length < 1) {
			return;
		}

		// Составляем POST
		const data = [ingredients.bun._id, ...ingredients.main.map(e => e._id), ingredients.bun._id];

		// Отправляем запрос
		dispatch(getOrder(data, openModal))
	}

	const [, drop] = useDrop({

		accept: 'ingredient',
		drop(item) {

			const itemId = allIngredients.findIndex(e => e._id === item.id);
			dispatch(addIngredient(allIngredients[itemId]));
		}
	})

	const sum = useMemo(() => {

		return  0 
			+ (ingredients.bun ? ingredients.bun.price * 2 : 0) 
			+ (ingredients.main.length > 0 ? ingredients.main.reduce((acc, e) => e.price + acc, 0) : 0);
	}, [ingredients])

	return (
		<div ref={drop} className={style.main}>
			<div className={style.list}>

				<ConstructorIngredients />

				<div className={style.button}>
					<p className="text text_type_digits-medium">{sum}</p>
					<CurrencyIcon type="primary"/>
					<Button htmlType="button" type="primary" onClick={confirmOrder} size="medium">Оформить заказ</Button>
					{isModalOpen && orderId > 0 && <Modal onClose={closeModal}><OrderDetails orderId={orderId} /></Modal>}
					</div>
			</div>
		</div>
	)
}



export default BurgerConstructor