import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {list : [] , total : 0},
    reducers: {
        AddToCart (state , action){
            const check = state.list.findIndex(book => book.id ===action.payload.id)
            if(check !== -1){
                state.list[index].quantity += action.payload.quantity
            }else{
                state.list.push(action.payload)
            }
        }
    }
})





export const {AddToCart} = cartSlice.actions;

export default cartSlice.reducer;

