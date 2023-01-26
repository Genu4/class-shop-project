import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import LikeReducer from './LikeReducer'

export const store = configureStore({
    reducer:{
        likeProducts:LikeReducer,
        productsInCart:cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
