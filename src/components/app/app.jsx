import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import style from './app.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
			<DndProvider backend={HTML5Backend}>
				<main className={style.container}>
					{isLoaded && !isError && ingredients && <BurgerIngredients />}
					{isLoaded && !isError && ingredients && <BurgerConstructor />}
				</main>
			</DndProvider>
		</>
	)
}

export default App