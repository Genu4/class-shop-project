import { createSlice } from '@reduxjs/toolkit'

type CartState = {
    [id:number]:number
}

export const initialState:CartState = {
    1:3,
    2:3
}

export const cartSlice = createSlice({
    name:"productsInCart",
    initialState,
    reducers: {

    }
})

export default cartSlice.reducer