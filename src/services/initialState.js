export const initialState = {

	// список всех полученных ингредиентов
	data: {

		ingredients: [],
		isError: false,
		isLoading: false,
	},

	// список всех ингредиентов в текущем конструкторе бургера
	ingredients: {

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