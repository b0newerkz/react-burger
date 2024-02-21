import React from 'react'
import style from './burger-ingredients.module.css'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ingredientType from '../../utils/types'

const Ingredient = props => {

	const {_id, image, name, price} = props.data;

	return (

		<div className={style.card}>
			<div className={style.cardTop}>
				{_id === '60666c42cc7b410027a1a9b1' && <Counter count={1} size="default" extraClass="m-1" />}
				<img src={image} alt={name} className={style.cardImage} />
			</div>
			<div className={style.cardBottom}>
				<p className="text text_type_digits-default mr-2">{price}</p> <CurrencyIcon type="primary" />
			</div>
			<div className={style.name}>
				{name}
			</div>
		</div>
	)
}

Ingredient.propTypes = {
	
	data: PropTypes.shape({

		_id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
	})
};

const List = props => {

	return (
	  <>
		<p className="text text_type_main-medium">
			{props.category === 'bun' ? 'Булки' : props.category === 'sauce' ? 'Соусы' : 'Начинки'}
		</p>
		<div className={style.listItems}>
			{props.data.map(ingredient => ingredient.type === props.category && <Ingredient data={ingredient} key={ingredient._id} />)}
		</div>
	  </>
	);
};

List.propTypes = {

	category: PropTypes.string.isRequired,
	data: PropTypes.arrayOf(ingredientType.burger)
};

const BurgerIngredients = (props) => {

	const state = {
		tab: 'one'
	}

	return (
		<div className={style.main}>
			
			<p className="text text_type_main-large mb-3">
				Соберите бургер
			</p>

			<div className={`mb-5 ${style.tab}`}>
				<Tab value="one" active={state.tab === 'one'}>
					Булки
				</Tab>
				<Tab value="two" active={state.tab === 'two'}>
					Соусы
				</Tab>
				<Tab value="three" active={state.tab === 'three'}>
					Начинки
				</Tab>
			</div>

			<div className={style.list}>
				<List category='bun' data={props.data} />
				<List category='sauce' data={props.data} />
				<List category='main' data={props.data} />
			</div>
		</div>
		
	)
}

BurgerIngredients.propTypes = {
	
	data: PropTypes.arrayOf(ingredientType.burger)
}


export default BurgerIngredients
