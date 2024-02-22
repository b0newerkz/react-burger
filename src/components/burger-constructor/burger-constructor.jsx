import React from 'react'
import style from './burger-constructor.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import ingredientType from '../../utils/types'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import IngredientDetails from '../ingredient-details/ingredient-details'


const ConstructorItem = (props) => {

	const [isModalOpen, setModalOpen] = React.useState(false);

	const openModal = () => setModalOpen(true);

	const closeModal = () => setModalOpen(false);

	const modal = (<Modal title='Детали ингредиента' onClose={closeModal}><IngredientDetails data={props.data} /></Modal>);

	return (
		<>
			<div className={style.item} onClick={openModal}>
				<div className={style.dragIcon}>
					{props.place === 'main' && <DragIcon type='primary' />}
				</div>
				<div className={style.info}>
					
					<ConstructorElement
						type={props.place}
						isLocked={props.place === 'main' ? false : true}
						text={`${props.data.name} ${props.place === 'top' ? '(верх)' : props.place === 'bottom' ? '(низ)' : ''}`}
						price={props.data.price}
						thumbnail={props.data.image}
					/>
				</div>
			</div>
			{isModalOpen && modal}
		</>
	)
}

ConstructorItem.propTypes = {

	place: PropTypes.string.isRequired,
	data: ingredientType.burger
}

const ConstructorItems = (props) => {

	return (
		<div className={style.items}>
			{props.items.map((e, i) => (<ConstructorItem key={i} data={e} place={props.place} />))}
		</div>
	)
}

ConstructorItems.propTypes = {

	place: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(ingredientType.burger)
}

const BurgerConstructor = (props) => {

	const [showOrder, setShowOrder] = React.useState(false);

	const openOrder = () => setShowOrder(true);

	const closeOrder = () => setShowOrder(false);

	const ingredients = {

		top: [props.data[0]],

		main: [
			props.data[3],
			props.data[4],
			props.data[5],
			props.data[7],
			props.data[8],
			props.data[8],
			props.data[8],
			props.data[10],
		],

		bottom: [props.data[0]]

	}

	return (
		<div className={style.main}>
			
			<div className={style.list}>

				<ConstructorItems place='top' items={ingredients.top} />

				<ConstructorItems place='main' items={ingredients.main} />
				
				<ConstructorItems place='bottom' items={ingredients.bottom} />

				<div className={style.button}>

					<p className="text text_type_digits-medium">610</p>
					<CurrencyIcon type="primary"/>
					<Button htmlType="button" type="primary" onClick={openOrder} size="medium">Оформить заказ</Button>

					{showOrder && <Modal onClose={closeOrder}><OrderDetails orderId='034536' /></Modal>}
            	</div>
    		</div>
		</div>
		
	)
}

BurgerConstructor.propTypes = {
	
	data: PropTypes.arrayOf(ingredientType.burger)
}

export default BurgerConstructor