import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export type ProductsProps = {
    id:number
    name: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}


const initialState:ProductsProps[]=[]

export const fetchProducts = createAsyncThunk<ProductsProps[]>(
    "products/fetchProducts",
   async () => {
    const response = await axios.get("https://run.mocky.io/v3/ea7b7859-1a85-421a-b5df-cd143774ded6")
    
    return response.data.products
   }
)

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled,(prevState, action) => {
        return (prevState = action.payload)
        })
    },
})


export default productsSlice.reducer