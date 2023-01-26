import { createSlice } from '@reduxjs/toolkit'
import { omit } from 'lodash'

type CartState = {
    [id:number]:number
}

export const initialState:CartState = {}

export const cartSlice = createSlice({
    name:"productsInCart",
    initialState,
    reducers: {
        addProductToCart:(prevState,action) => ({
            ...prevState,
            [action.payload.id]: (prevState[action.payload.id] || 0) + action.payload.count
        }),
        removeProductFromCart:(prevState, action) => (omit(prevState,action.payload)),
        changeProductQuantity: (prevState, action) => ({
            ...prevState,
            [action.payload.id]: action.payload.count
        })
    }
})

export const {addProductToCart, removeProductFromCart, changeProductQuantity} = cartSlice.actions

export default cartSlice.reducer