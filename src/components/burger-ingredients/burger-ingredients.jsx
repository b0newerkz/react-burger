import React from 'react'
import style from './burger-ingredients.module.css'
import {Tab, Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import ingredientType from '../../utils/types'
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useModal } from '../hooks/use-modal';
import { useSelector, useDispatch } from 'react-redux';
import { CONSTRUCTOR_ADD_BUN, CONSTRUCTOR_ADD_INGREDIENT } from '../../services/actions';

const Ingredient = props => {

	const {_id, image, name, price} = props.data;
	const { isModalOpen, openModal, closeModal } = useModal();
	const dispatch = useDispatch();
	const {ingredients} = useSelector(store => store.data);

	const addItem = (e) => {

		const itemId = ingredients.findIndex(e => e._id === _id);
		if(ingredients[itemId].type === 'bun') {

			dispatch({type: CONSTRUCTOR_ADD_BUN, item: ingredients[itemId]})
		}
		else {

			dispatch({type: CONSTRUCTOR_ADD_INGREDIENT, item: ingredients[itemId]})
		}
		e.preventDefault();
	}

	return (
		<>
			<div className={style.card} id={name} onClick={openModal} onContextMenu={addItem}>
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
			{isModalOpen && <Modal title='Детали ингредиента' onClose={closeModal}><IngredientDetails data={props.data} /></Modal>}
		</>
	)
}

Ingredient.propTypes = {
	
	data: PropTypes.shape({

		_id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
	}).isRequired
};

const List = ({category, data}) => {

	return (
	  <>
		<p className="text text_type_main-medium">
			{category === 'bun' ? 'Булки' : category === 'sauce' ? 'Соусы' : 'Начинки'}
		</p>
		<div className={style.listItems}>
			{data.map(ingredient => ingredient.type === category && <Ingredient data={ingredient} key={ingredient._id} />)}
		</div>
	  </>
	);
};

List.propTypes = {

	category: PropTypes.string.isRequired,
	data: PropTypes.arrayOf(ingredientType.burger).isRequired
};

const BurgerIngredients = (props) => {

	const state = {
		tab: 'one'
	}

	const data = useSelector(store => store.data.ingredients);
	const buns = data.filter((item) => item.type === "bun");
	const mains = data.filter((item) => item.type === "main");
	const sauces = data.filter((item) => item.type === "sauce");

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
				<List category='bun' data={buns} />
				<List category='sauce' data={sauces} />
				<List category='main' data={mains} />
			</div>
		</div>
		
	)
}

export default BurgerIngredients