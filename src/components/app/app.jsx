import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import style from './app.module.css'

const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

const App = () => {

	const [data, setData] = React.useState({

		ingredients: [],
		isLoaded: false,
		hasError: false
	});

	React.useEffect(() => {

		fetch(API_URL)
			.then(res => res.json())
			.then(data => {

				if(data.success) {

					setData({isLoaded: true, hasError: false, ingredients: data.data})
				} else {

					console.log('Ошибка получения данных')
				}
			})
			.catch(e => {

				console.log("Ошибка: "+ e.message)
				setData({...data.ingredients, isLoading: false, hasError: true })
			})
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