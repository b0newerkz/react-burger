import React from 'react'
import style from './burger-constructor.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'

const burgerPropTypes = PropTypes.shape({

	_id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	proteins: PropTypes.number.isRequired,
	fat: PropTypes.number.isRequired,
	carbohydrates: PropTypes.number.isRequired,
	calories: PropTypes.number.isRequired,
	price: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	image_mobile: PropTypes.string.isRequired,
	image_large: PropTypes.string.isRequired,
	__v: PropTypes.number.isRequired,
});

const ConstructorItems = (props) => {

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'auto', maxHeight: 350 }}>
			{props.items.map((e, i) => {

				return (
					<div style={{display: 'flex', alignItems: 'center'}} key={i}>
						<div style={{minWidth: '32px'}}>
							{props.place === 'main' && <DragIcon type='primary' />}
						</div>
						<div style={{width: '100%'}}>
							
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
			
			<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

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
	
	data: PropTypes.arrayOf(burgerPropTypes)
}

export default BurgerConstructor
