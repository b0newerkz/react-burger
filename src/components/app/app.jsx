import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import style from './app.module.css'
import request from '../../utils/request';

const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

const App = () => {

	const [data, setData] = React.useState({

		ingredients: [],
		isLoaded: false,
		hasError: false
	});

	React.useEffect(() => {

		request(API_URL).then(data => {

			if(data.success) {
				setData({isLoaded: true, hasError: false, ingredients: data.data})
			} else {
				console.log('Ошибка получения данных')
			}
		}).catch(e => {
			console.log("Ошибка: "+ e)
			setData({...data.ingredients, isLoading: false, hasError: true })
		})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<AppHeader />
			
			<main className={style.container}>
				{data.isLoaded && !data.hasError && <BurgerIngredients data={data.ingredients} />}
				{data.isLoaded && !data.hasError && <BurgerConstructor data={data.ingredients} />}
			</main>
		</>
	)
}

export default App