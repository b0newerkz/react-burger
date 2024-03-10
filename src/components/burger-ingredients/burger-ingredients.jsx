import React, {useState, useRef, useMemo} from 'react'
import style from './burger-ingredients.module.css'
import {Tab, Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import ingredientType from '../../utils/types'
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useModal } from '../hooks/use-modal';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';

const Ingredient = props => {

	const {_id, image, name, price, type} = props.data;
	const { isModalOpen, openModal, closeModal } = useModal();
	const {bun, main} = useSelector(store => store.ingredients);

	const [num, setNum] = useState(0)
	
	useMemo(() => {
		
		if(type === 'bun' && bun && bun._id === _id) {

			return setNum(2);
		}

		if(type !== 'bun') {

			const fil = main.filter(e => e._id === _id)
			if(fil.length > 0) {

				return setNum(fil.length)
			}
		}

		return setNum(0)
	}, [bun, main, _id, type])
	

	const [, ref] = useDrag({
		type: 'ingredient',
		item: {id: _id}
	})

	return (
		<>
			<div ref={ref} className={style.card} id={name} onClick={openModal}>
				<div className={style.cardTop}>
					{num > 0 && <Counter count={num} size="default" extraClass="m-1" />}
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

const List = ({id, category, data, refSrc = null}) => {

	return (
	  <div id={id} ref={refSrc}>
		<p className="text text_type_main-medium">
			{category === 'bun' ? 'Булки' : category === 'sauce' ? 'Соусы' : 'Начинки'}
		</p>
		<div className={style.listItems}>
			{data.map(ingredient => ingredient.type === category && <Ingredient data={ingredient} key={ingredient._id} />)}
		</div>
	  </div>
	);
};

List.propTypes = {

	category: PropTypes.string.isRequired,
	data: PropTypes.arrayOf(ingredientType.burger).isRequired
};

const BurgerIngredients = (props) => {


	const [tab, setTab] = useState('one');

	const data = useSelector(store => store.data.ingredients);
	const buns = data.filter((item) => item.type === "bun");
	const mains = data.filter((item) => item.type === "main");
	const sauces = data.filter((item) => item.type === "sauce");

	const pointRef = useRef(null);
	const oneRef = useRef(null);
	const twoRef = useRef(null);
	const threeRef = useRef(null);

	const setActiveTab = (active) => {

		if(active !== tab) {

			setTab(active);
			const element = document.getElementById(active);
			element.scrollIntoView({ behavior: "smooth" });
		}
		
	}
	const handleScroll = () => {

		const scr = pointRef.current.getBoundingClientRect().top
		const one = oneRef.current.getBoundingClientRect().top
		const two = twoRef.current.getBoundingClientRect().top
		const three = threeRef.current.getBoundingClientRect().top

		const toOne = Math.abs(scr - one);
		const toTwo = Math.abs(scr - two);
		const toThree = Math.abs(scr - three)

		// Устанавливаем вкладку
		if(toOne < toTwo && toOne < toThree && tab !== 'one') {

			return setTab('one');
		}

		if(toTwo < toOne && toTwo < toThree && tab !== 'two') {

			return setTab('two');
		}

		if(toThree < toOne && toThree < toTwo && tab !== 'three') {

			return setTab('three');
		}
	}

	return (
		<div className={style.main}>
			
			<p className="text text_type_main-large mb-3">
				Соберите бургер
			</p>

			<div className={`mb-5 ${style.tab}`}>
				<Tab value="one" active={tab === 'one'} onClick={setActiveTab}>
					Булки
				</Tab>
				<Tab value="two" active={tab === 'two'} onClick={setActiveTab}>
					Соусы
				</Tab>
				<Tab value="three" active={tab === 'three'} onClick={setActiveTab}>
					Начинки
				</Tab>
			</div>

			<div id='scrollPoint' ref={pointRef} className={style.list} onScroll={handleScroll}>
				<List id='one' category='bun' refSrc={oneRef} data={buns} />
				<List id='two' category='sauce' refSrc={twoRef} data={sauces} />
				<List id='three' category='main' refSrc={threeRef} data={mains} />
			</div>
		</div>
		
	)
}

export default BurgerIngredients