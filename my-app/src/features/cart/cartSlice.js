import {createSlice} from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
    cartItems : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    quantity:0,
    totalPrice:0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{

        addToCart :(state,  action) => {
            const existingProduct = state.cartItems.findIndex(item => item.id === action.payload.id) 

            if(existingProduct >= 0 ){
                state.cartItems[existingProduct].cartQuantity += 1
                toast.info(`increacted ${state.cartItems[existingProduct].title} cart quantity`, {
                    position: 'bottom-left',
                  });
            } else {
                const currentProduct = {...action.payload, cartQuantity : 1}
                state.cartItems.push(currentProduct)
                toast.success(` ${action.payload.title} added to cart`, {
                    position: 'bottom-left',
                  });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

        },
        deleteFromCart :(state, action) => {
            const currentCartItem =  state.cartItems.filter(item => item.id !== action.payload.id)

            state.cartItems = currentCartItem
            toast.error(` ${action.payload.title} remove from cart`, {
                position: 'bottom-left',
              });
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        decreastFromCart: (state, action) => {
            const existingProduct = state.cartItems.findIndex(item => item.id === action.payload.id) 

            if(state.cartItems[existingProduct].cartQuantity > 1){
                state.cartItems[existingProduct].cartQuantity -=1
                toast.info(`Decreased ${action.payload.title} cart quantity`, {
                    position: 'bottom-left',
                    
                  });
            } else if (state.cartItems[existingProduct].cartQuantity === 1 ) {
                const nextCartItem = state.cartItems.filter(item => item.id !== action.payload.id)

                state.cartItems = nextCartItem
                toast.error(` ${action.payload.title} remove from cart`, {
                    position: 'bottom-left',
                  });
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        getTotal:(state) =>{
            let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem) =>{
                const {price, cartQuantity} = cartItem
                const itemTotal = price * cartQuantity
                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal
            }, {
                total: 0,
                quantity: 0
            })
            state.quantity = quantity
            state.totalPrice = total
        }
    }
})

export default cartSlice.reducer

export const {addToCart, deleteFromCart, decreastFromCart, getTotal} = cartSlice.actions