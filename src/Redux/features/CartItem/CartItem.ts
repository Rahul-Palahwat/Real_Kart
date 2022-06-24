import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { loadavg } from "os";


type InitialState={
    loading: boolean
    items: number[]
    error: string
}

const initialState:InitialState={
    loading: true,
    items: [],
    error: ''
}

export const addToCart = createAsyncThunk('cartItem/addToCart', async(itemCode:number) => {
    return itemCode
})

const cartItemSlice = createSlice({
    name: "cartItem",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builders) => {
        builders.addCase(addToCart.pending , state => {
            state.loading= true
        })
        builders.addCase(addToCart.fulfilled , (state , actions) => {
            state.loading = false
            state.items.push(actions.payload)
            state.error = ''
        })
        builders.addCase(addToCart.rejected , (state , actions) => {
            state.loading = false
            state.error = actions.error.message || "Item not added to cart"
        })
    }
})

export default cartItemSlice.reducer
