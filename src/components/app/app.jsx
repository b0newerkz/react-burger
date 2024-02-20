import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import style from './app.module.css'
import dummy from '../../utils/data'

const App = (props) => {

	return (
		<>
			<AppHeader />
			
			<main className={style.container}>
				<BurgerIngredients data={dummy} />
				<BurgerConstructor data={dummy} />
			</main>
		</>
	)
}

export default App