import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import LikeReducer from './LikeReducer'
import productsReducer from './productsReducer'

export const store = configureStore({
    reducer:{
        likeProducts:LikeReducer,
        productsInCart:cartReducer,
        products: productsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
