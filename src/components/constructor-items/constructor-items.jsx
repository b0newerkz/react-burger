import React from 'react'
import PropTypes from 'prop-types'
import ingredientType from '../../utils/types'
import style from './constructor-items.module.css'
import ConstructorItem from '../constructor-item/constructor-item'

const ConstructorItems = (props) => {
	
	return (
		<div className={style.items}>
			{props.items.map((e, i) => (<ConstructorItem key={i} data={e} place={props.place} />))}
		</div>
	)
}

ConstructorItems.propTypes = {

	place: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(ingredientType.burger).isRequired
}

export default ConstructorItems
