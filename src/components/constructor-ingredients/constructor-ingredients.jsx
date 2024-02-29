import React, {useContext} from 'react'
import style from './constructor-ingredients.module.css'
import { ConstructorContext } from '../../utils/context'
import ConstructorItem from '../constructor-item/constructor-item'

const ConstructorIngredients = (props) => {
	
	const data = useContext(ConstructorContext);
	const buns = data.ingredients.data.filter((item) => item.type === "bun");
	const mains = data.ingredients.data.filter((item) => item.type !== "bun");
	
	return (
		<>
			{/* Булка(верх) */}
			<div className={style.items}>
				{buns.map((e, i) => (<ConstructorItem key={e.uuid} uuid={e.uuid} data={e} place='top' />))}
			</div>

			<div className={style.items}>
				{mains.map((e, i) => (<ConstructorItem key={e.uuid} uuid={e.uuid} data={e} place='main' />))}
			</div>

			{/* Булка(низ) */}
			<div className={style.items}>
				{buns.map((e, i) => (<ConstructorItem key={e.uuid} uuid={e.uuid} data={e} place='bottom' />))}
			</div>
		</>
	)
}



export default ConstructorIngredients
