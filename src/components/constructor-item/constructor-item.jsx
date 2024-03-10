import React from 'react'
import PropTypes from 'prop-types'
import ingredientType from '../../utils/types'
import style from './constructor-item.module.css'
import IngredientDetails from '../ingredient-details/ingredient-details'
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../modal/modal'
import { useModal } from '../hooks/use-modal'
import { useDispatch } from 'react-redux'
import { CONSTRUCTOR_REMOVE_INGREDIENT, CONSTRUCTOR_SORT_INGREDIENT } from '../../services/actions'
import { useDrop, useDrag } from 'react-dnd'


const ConstructorItem = (props) => {
	
	const { isModalOpen, openModal, closeModal } = useModal();
	const dispatch = useDispatch();
	const {position = 0} = props

	const modal = (<Modal title='Детали ингредиента' onClose={closeModal}><IngredientDetails data={props.data} /></Modal>);

	// Удаление из товаров
	const handleClose = (e) => {

		dispatch({type: CONSTRUCTOR_REMOVE_INGREDIENT, uuid: props.uuid})
		e.stopPropagation();
	}

	const [, dragRef] = useDrag({
		type: 'sort',
		item: {id: props.data._id, position}
	})

	const [, dropRef] = useDrop({

		accept: 'sort',
		drop(item) {

			//console.log(item.position +" to "+ position)
			if(position !== item.position) {

				dispatch({type: CONSTRUCTOR_SORT_INGREDIENT, from: position, to: item.position})
			}
		}
	})

	return (
		<div {...(props.place === 'main' && {ref: dropRef})}>
			<div className={style.item} onClick={openModal} {...(props.place === 'main' && {ref: dragRef})}>
				<div className={style.dragIcon}>
					{props.place === 'main' && <DragIcon type='primary' />}
				</div>
				<div className={style.info}>
					
					<ConstructorElement
						type={props.place}
						isLocked={props.place === 'main' ? false : true}
						text={`${props.data.name} ${props.place === 'top' ? '(верх)' : props.place === 'bottom' ? '(низ)' : ''}`}
						price={props.data.price}
						handleClose={handleClose}
						thumbnail={props.data.image}
					/>
				</div>
			</div>
			{isModalOpen && modal}
		</div>
	)
}

ConstructorItem.propTypes = {

	place: PropTypes.string.isRequired,
	data: ingredientType.burger.isRequired
}

export default ConstructorItem