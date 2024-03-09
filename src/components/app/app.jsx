import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import style from './app.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';

const App = () => {

	const dispatch = useDispatch();
	const {isLoaded, isError, ingredients} = useSelector(store => store.data);

	React.useEffect(() => {

		dispatch(getIngredients())
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<AppHeader />
			
			<main className={style.container}>
				{isLoaded && !isError && ingredients && <BurgerIngredients />}
				{isLoaded && !isError && ingredients && <BurgerConstructor />}
			</main>
		</>
	)
}

export default App