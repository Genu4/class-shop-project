import { configureStore } from '@reduxjs/toolkit'
import LikeReducer from './LikeReducer'

export const store = configureStore({
    reducer:{
        likeProducts:LikeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
