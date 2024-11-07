import constants from "./constants"
export const Api = {
    'products':`${constants.port}/api/products`,
    'addToCart':`${constants.port}/api/cart/add/`,
    'cart':`${constants.port}/api/cart`,
    'deleteFromCart':`${constants.port}/api/cart/delete`,
    'updateItemQuantity':`${constants.port}/api/cart/update-quantity/`,
    'shippingAddresses':`${constants.port}/api/checkout/shipping-addresses/`,
    'createOrder':`${constants.port}/api/checkout/`,
    'createCheckoutSession':`${constants.port}/api/checkout/create-checkout-session`,
    'recentlyViewed':`${constants.port}/api/recently-viewed-variants`,
    'topOffers':`${constants.port}/api/top-offer-product-variants`,
}