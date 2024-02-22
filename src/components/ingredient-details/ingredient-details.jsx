import React from 'react'
import PropTypes from 'prop-types'
import style from './ingredient-details.module.css'

const IngredientDetails = (props) => {

	return (

		<div className={style.body}>

			<img src={props.data.image_large} alt={props.data.name} />

			<p className="text text_type_main-medium">
  				{props.data.name}
			</p>

			{/* В данных с API нет описания, а на макетах - есть. Поэтому добавил вручную описание, если не надо его использовать - напишите, пожалуйста */}
			<div className={`mt-8 mb-8 ${style.description}`}>

				<p className="text text_type_main-default">
					Превосходные котлеты из марсианской Магнолии для фирменных космических бургеров, набирающих популярность по всей вселенной.
				</p>
			</div>
			

			<div className={`mt-8 ${style.details} text_color_inactive`}>

				<div className="text text_type_main-small">
  					Калории,ккал<br/>
					<p className="text text_type_digits-default">{props.data.calories}</p>
				</div>

				<div className="text text_type_main-small">
  					Белки, г<br/>
					<p className="text text_type_digits-default">{props.data.proteins}</p>
				</div>

				<div className="text text_type_main-small">
  					Жиры, г<br/>
					<p className="text text_type_digits-default">{props.data.fat}</p>
				</div>

				<div className="text text_type_main-small">
  					Углеводы, г<br/>
					<p className="text text_type_digits-default">{props.data.carbohydrates}</p>
				</div>
			</div>
		</div>
	)
}

IngredientDetails.propTypes = {

	data: PropTypes.shape({
		image_large: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		calories: PropTypes.number.isRequired,
		proteins: PropTypes.number.isRequired,
		fat: PropTypes.number.isRequired,
		carbohydrates: PropTypes.number.isRequired,
	})
}

export default IngredientDetails