import React from 'react'
import style from './constructor-ingredients.module.css'
import ConstructorItem from '../constructor-item/constructor-item'
import { useSelector } from 'react-redux'

const ConstructorIngredients = () => {
	
	const {bun, main} = useSelector(store => store.constructorData);
	
	return (
		<>
			{/* Булка(верх) */}
			<div className={style.items}>
				{bun 
					? <ConstructorItem key={bun.uuid} uuid={bun.uuid} data={bun} place='top' />
					: 
						(
							<div className={style.item}>
								<div className={style.dragIcon}> </div>
								<div className={style.info}>
									<div className="constructor-element constructor-element_pos_top">
										<span className="constructor-element__row">
											<span className={`constructor-element__text ${style.template}`}>
												Выберите булку
											</span>
										</span>
									</div>
								</div>
							</div>
						)
				}
			</div>

			{<div className={style.items}>
				{main.length
					? main.map((e, i) => (<ConstructorItem key={e.uuid} uuid={e.uuid} data={e} place='main' position={i} />))
					:
						(
							<div className={style.item}>
								<div className={style.dragIcon}> </div>
								<div className={style.info}>
									<div className="constructor-element">
										<span className="constructor-element__row">
											<span className={`constructor-element__text ${style.template}`}>
												Выберите ингредиенты
											</span>
										</span>
									</div>
								</div>
							</div>
						)
				}
			</div>}

			{/* Булка(низ) */}
			<div className={style.items}>
				{bun
					?	<ConstructorItem key={bun.uuid} uuid={bun.uuid} data={bun} place='bottom' />
					:
						(
							<div className={style.item}>
								<div className={style.dragIcon}> </div>
								<div className={style.info}>
									<div className="constructor-element constructor-element_pos_bottom">
										<span className="constructor-element__row">
											<span className={`constructor-element__text ${style.template}`}>
												Выберите булку
											</span>
										</span>
									</div>
								</div>
							</div>
						)
				}
			</div>
		</>
	)
}

export default ConstructorIngredients