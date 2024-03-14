export const initialState = {

	// список всех полученных ингредиентов
	ingredients: {

		data: [],
		isError: false,
		isLoading: false,
	},

	// список всех ингредиентов в текущем конструкторе бургера
	constructorData: {

		bun: null,
		main: []
	},

	// объект текущего просматриваемого ингредиента
	details: {},

	// объект созданного заказа
	order: {

		id: 0,
		isError: false,
		isLoaded: false
	}
}