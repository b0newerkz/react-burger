import React from 'react'
import style from './burger-constructor.module.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientType from '../../utils/types'
import OrderDetails from '../order-details/order-details'
import ConstructorItems from '../constructor-items/constructor-items'
import PropTypes from 'prop-types'
import Modal from '../modal/modal'
import { useModal } from '../hooks/use-modal'

const BurgerConstructor = (props) => {

	const { isModalOpen, openModal, closeModal } = useModal();

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
					<Button htmlType="button" type="primary" onClick={openModal} size="medium">Оформить заказ</Button>

					{isModalOpen && <Modal onClose={closeModal}><OrderDetails orderId='034536' /></Modal>}
            	</div>
    		</div>
		</div>
		
	)
}

BurgerConstructor.propTypes = {
	
	data: PropTypes.arrayOf(ingredientType.burger).isRequired
}

export default BurgerConstructor