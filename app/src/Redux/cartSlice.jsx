import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {cart : []},
    reducers: {
        // AddToCart (state , action){
        //     const check = state.list.findIndex(book => book.id ===action.payload.id)
        //     if(check !== -1){
        //         state.list[index].quantity += action.payload.quantity
        //     }else{
        //         state.list.push(action.payload)
        //     }
        // }

        AddToCart (state , action){
            const newItem = action.payload;
            const existItem = state.cart.find(item => item.id === newItem.id)
            const cartItems = existItem ? state.cart.map(item => item.id === existItem.id ? newItem : item)
            :
            [...state.cart , newItem]
            return {...state , cart : cartItems}
        }
    }
})





export const {AddToCart} = cartSlice.actions;

export default cartSlice.reducer;

