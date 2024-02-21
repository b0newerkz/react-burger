import React from 'react'
import style from './burger-constructor.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import ingredientType from '../../utils/types'


const ConstructorItems = (props) => {

	return (
		<div className={style.items}>
			{props.items.map((e, i) => {

				return (
					<div className={style.item} key={i}>
						<div className={style.dragIcon}>
							{props.place === 'main' && <DragIcon type='primary' />}
						</div>
						<div className={style.info}>
							
							<ConstructorElement
								type={props.place}
								isLocked={props.place === 'main' ? false : true}
								text={`${e.name} ${props.place === 'top' ? '(верх)' : props.place === 'bottom' ? '(низ)' : ''}`}
								price={e.price}
								thumbnail={e.image}
							/>
						</div>
					</div>
				)
			})}
		</div>
	)
}

ConstructorItems.propTypes = {

	place: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(ingredientType.burger)
}

const BurgerConstructor = (props) => {

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
			props.data[8],
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
					<Button htmlType="button" type="primary" size="medium">Оформить заказ</Button>
            	</div>
    		</div>
		</div>
		
	)
}

BurgerConstructor.propTypes = {
	
	data: PropTypes.arrayOf(ingredientType.burger)
}

export default BurgerConstructor
