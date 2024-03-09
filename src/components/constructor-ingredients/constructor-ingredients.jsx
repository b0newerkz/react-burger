import React from 'react'
import style from './constructor-ingredients.module.css'
import ConstructorItem from '../constructor-item/constructor-item'
import { useSelector } from 'react-redux' 

const ConstructorIngredients = () => {
	
	const {bun, main} = useSelector(store => store.ingredients);
	
	return (
		<>
			{/* Булка(верх) */}
			<div className={style.items}>
				{bun && <ConstructorItem key={bun.uuid} uuid={bun.uuid} data={bun} place='top' />}
			</div>

			{<div className={style.items}>
				{main.map((e, i) => (<ConstructorItem key={e.uuid} uuid={e.uuid} data={e} place='main' />))}
			</div>}

			{/* Булка(низ) */}
			<div className={style.items}>
				{bun && <ConstructorItem key={bun.uuid} uuid={bun.uuid} data={bun} place='bottom' />}
			</div>
		</>
	)
}

export default ConstructorIngredients