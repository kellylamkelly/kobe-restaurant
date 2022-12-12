// change url to real url when published
const BASE_URL = 'http://localhost:3000';

export const MENU_URL = BASE_URL + '/api/menu';
export const MENU_ID_URL = MENU_URL + '/';
export const MENU_APPS_URL = MENU_URL + '/appetizers';
export const MENU_TEPP_URL = MENU_URL + '/teppanyaki';
export const MENU_COMBOS_URL = MENU_URL + '/combos';
export const MENU_NIGIRI_URL = MENU_URL + '/nigiri';
export const MENU_SUSHIROLLS_URL = MENU_URL + '/sushirolls';
export const MENU_SUSHIENTREES_URL = MENU_URL + '/sushientrees';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_PAID_URL = ORDERS_URL + '/id/';