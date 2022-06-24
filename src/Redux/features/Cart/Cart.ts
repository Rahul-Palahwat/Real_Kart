import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { stat } from "fs";
import _ from "lodash";

import totalitems from '../../../components/data.json';


type InitialState={
    loading: boolean,
    items: number[],
    error: string,
    sum: number,
    currentItem: any

}

const initialState:InitialState={
    loading: false,
    items: [],
    error: '',
    sum: 0,
    currentItem: {}
  
}

export const addItem = createAsyncThunk('cart/addItem' , async(itemCode: number) => {
    return itemCode
})

export const removeItem = createAsyncThunk('cart/removeItem', async(itemCode: number) => {
    return itemCode
})

export const orderItem = createAsyncThunk('cart/orderItem', async()=>{
    return 
})



const cartSlice = createSlice ({
    name:'cart',
    initialState: initialState,
    reducers:{
        // addItem: (state, actions) => {
        //     // console.log({actions})
        //     state.items.push(actions.payload)
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(addItem.pending , state =>{
            state.loading = true
        })
        builder.addCase(addItem.fulfilled , (state, actions) =>{
            state.loading = false
            // console.log({actions:actions.payload,totalitems})
            state.items.push(actions.payload)
            const index = _.findIndex(totalitems, ['itemCode', actions.payload])
            // console.log({index})
            state.currentItem = totalitems[index]
            state.sum += state.currentItem.newprice
            state.error = ''
        })
        builder.addCase(addItem.rejected , (state , actions)=>{
            state.loading = false
            state.error = actions.error.message || "CanNot add item to cart"
        })



        builder.addCase(removeItem.pending , state => {
            state.loading = true
        })
        builder.addCase(removeItem.fulfilled, (state , actions) => {
            state.loading = false
            state.items = state.items.filter((item)=>{return item!==actions.payload})
            const index = _.findIndex(totalitems , ['itemCode', actions.payload])
            state.currentItem = totalitems[index]
            state.sum -= state.currentItem.newprice
            state.error = ''
        })
        builder.addCase(removeItem.rejected , (state , actions) => {
            state.loading = false
            state.error = actions.error.message || "Item can'nt be removed from cart"
        })

        builder.addCase(orderItem.pending , state =>{
            state.loading = true
        })
        builder.addCase(orderItem.fulfilled , (state,actions) => {
            state.loading = false
            state.sum=0
            state.items=[]
            state.error=''
        })
        builder.addCase(orderItem.rejected , (state ,actions) => {
            state.loading = false
            state.error = actions.error.message || "Can not place order at this momment"
        })
    }
})

export default cartSlice.reducer

// export const { addItem } = cartSlice.actions