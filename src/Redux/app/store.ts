import { configureStore } from "@reduxjs/toolkit";

import cartReducer from '../features/Cart/Cart'

import cartItemReducer from '../features/CartItem/CartItem'


const store = configureStore({
    reducer:{
        cart: cartReducer,
        cartItem: cartItemReducer
    },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
