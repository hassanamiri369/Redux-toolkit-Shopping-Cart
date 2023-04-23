import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {cart : []},
    reducers: {
       

        AddToCart (state , action){
            const newItem = action.payload;
            
            const existItem = state.cart.find(item => item.id === newItem.id)
            const quantity = existItem ? existItem.quantity + 1 : 1;
            const updatedProduct = {...newItem , quantity}
            const cartItems = existItem ? state.cart.map(item => item.id === existItem.id ? updatedProduct : item)
            :
            [...state.cart , updatedProduct]
            return {...state , cart : cartItems}
        } ,

        deleteProduct (state ,action){
            const newItem = action.payload;
            const exist =  state.cart.find(x => x.id === newItem.id)
            if(exist.quantity === 1){
                const updated = state.cart.filter(x => x.id !== newItem.id)
                return {...state , cart : updated}
            }else{
                const updated = state.cart.map(x => x.id === newItem.id ? {...x , quantity : x.quantity - 1} : x)
                return {...state , cart : updated}
            }
        }, 


        resetCart (state , action){
            const newItem = action.payload;
            const updated = state.cart.filter(x => x.id !== newItem.id)
                return {...state , cart : updated}
        }
    }
})





export const {AddToCart , deleteProduct , resetCart} = cartSlice.actions;

export default cartSlice.reducer;

