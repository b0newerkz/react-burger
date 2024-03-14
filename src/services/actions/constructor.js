import { CONSTRUCTOR_ADD_BUN, CONSTRUCTOR_ADD_INGREDIENT } from "./index";
import { v4 as uuidv4 } from 'uuid';

// Добавить ингредиент
export const addIngredient = (ingredient) => {

	return {
		type: ingredient.type === 'bun' ? CONSTRUCTOR_ADD_BUN : CONSTRUCTOR_ADD_INGREDIENT,
		item: {...ingredient, uuid: uuidv4()}
	}
}