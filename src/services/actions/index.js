// Получение списка ингредиентов от API. Используется в компоненте BurgerIngredients
export const INGREDIENTS_REQUEST = 'INGREDIENTS_REQUEST';
export const INGREDIENTS_FAILED = 'INGREDIENTS_FAILED';
export const INGREDIENTS_SUCCESS = 'INGREDIENTS_SUCCESS';

// Хранение списка ингредиентов для конструктора бургера. Используется в компоненте BurgerConstructor
export const CONSTRUCTOR_ADD_BUN = 'CONSTRUCTOR_ADD_BUN';
export const CONSTRUCTOR_ADD_INGREDIENT = 'CONSTRUCTOR_ADD_INGREDIENT';
export const CONSTRUCTOR_REMOVE_INGREDIENT = 'CONSTRUCTOR_REMOVE_INGREDIENT';

// Работа с суммой
export const CONSTRUCTOR_UPDATE_SUM = 'CONSTRUCTOR_UPDATE_SUM';

// Добавление данных о просматриваемом в модальном окне IngredientDetails ингредиенте
export const INGREDIENTS_DETAILS = 'INGREDIENTS_DETAILS';

// Получение и обновление номера заказа в модальном окне OrderDetails
export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_ERROR = 'ORDER_ERROR';
export const ORDER_NUMBER = 'ORDER_NUMBER';

