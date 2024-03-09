import React, {useReducer} from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import style from './app.module.css'
import request from '../../utils/request';
import { ApiContext, ConstructorContext } from '../../utils/context';
import { v4 as uuidv4 } from 'uuid';

const API_URL = 'https://norma.nomoreparties.space/api/ingredients';
/*
	import { compose, createStore, applyMiddleware } from 'redux';
	import thunk from 'redux-thunk';

	const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

	const enhancer = composeEnhancers(applyMiddleware(thunk));

	const store = createStore(rootReducer, enhancer);

	или

	const initialState = {todos: []}
	const store = createStore(
		rootReducer,
		initialState,
		compositeWithDevTools(applyMiddleWare(...midleware))
	); 

	REDUX TOOLKIT
	import { configureStore } from '@reduxjs/toolkit'
	import logger from 'redux-logger'
	import todosReducer from './todos/todosReducer'
	import { customEnhancer } from './enhancers'

	const preloadedState = {
	todos: [],
	}
	const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
	preloadedState,
	enhancers: [customEnhancer],
	}) 

*/
const initialIngredients = {
	
	sum: 0,
	data: []
};

function ingredientReducer(state, action) {

	if(action.type === 'add') {

		const data = [...state.data];
		const item = {...action.payload};
		
		// Если передана булка - то надо найти предыдущую булку и удалить(если есть)
		if(item.type === 'bun') {
			
			const bunId = data.findIndex((e) => e.type === 'bun');
			if(bunId > -1) {

				data.splice(bunId, 1);
			}
		}

		// Добавляем уникальный uuid
		item.uuid = uuidv4();
		data.push(item);

		// Считаем сумму заказа и добавляем цену за ингредиент(х2 если это булка)
		const sum = data.reduce((currentSum, item) => currentSum + (item.type === 'bun' ? 2 : 1) * item.price, 0);

		return {data: data, sum: sum};
	}

	if(action.type === 'remove') {

		const data = [...state.data];

		// Ищем по uuid ингредиент
		const itemId = data.findIndex((e) => e.uuid === action.payload);
		data.splice(itemId, 1);

		// Считаем сумму заказа и умножаем на два цену ингредиента если это булка
		const sum = data.reduce((currentSum, item) => currentSum + (item.type === 'bun' ? 2 : 1) * item.price, 0);

		return {data: data, sum: sum};
	}

	console.warn("WARNING: Wrong action type (ingredientReducer)");
	return state;
}

const App = () => {

	const [data, setData] = React.useState({

		ingredients: [],
		isLoaded: false,
		hasError: false
	});

	const [ingredients, dispatchIngredients] = useReducer(ingredientReducer, initialIngredients);

	React.useEffect(() => {

		/*request(API_URL).then(data => {

			if(data.success) {
				setData({isLoaded: true, hasError: false, ingredients: data.data})
			} else {
				console.log('Ошибка получения данных')
			}
		}).catch(e => {
			console.log("Ошибка: "+ e)
			setData({...data.ingredients, isLoading: false, hasError: true })
		})*/
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<AppHeader />
			
			<main className={style.container}>
				{/*<ApiContext.Provider value={data.ingredients}>
					<ConstructorContext.Provider value={{ingredients, dispatchIngredients}}>*/}
						{data.isLoaded && !data.hasError && <BurgerIngredients />}
						{data.isLoaded && !data.hasError && <BurgerConstructor />}
					{/*</ConstructorContext.Provider>
				</ApiContext.Provider>*/}
			</main>
		</>
	)
}

export default App