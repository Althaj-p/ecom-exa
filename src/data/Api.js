import constants from "./constants"
export const Api = {
    'products':`${constants.port}/api/products`,
    'addToCart':`${constants.port}/api/cart/add/`,
    'cart':`${constants.port}/api/cart`,
    'deleteFromCart':`${constants.port}/api/cart/delete`,
    'updateItemQuantity':`${constants.port}/api/cart/update-quantity/`,
}