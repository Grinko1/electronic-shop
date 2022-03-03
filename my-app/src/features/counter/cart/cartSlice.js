import {createSlice} from '@reduxjs/toolkit'

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
            } else {
                const currentProduct = {...action.payload, cartQuantity : 1}
                state.cartItems.push(currentProduct)
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

        },
        deleteFromCart :(state, action) => {
            const currentCartItem =  state.cartItems.filter(item => item.id !== action.payload.id)

            state.cartItems = currentCartItem
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        decreastFromCart: (state, action) => {
            const existingProduct = state.cartItems.findIndex(item => item.id === action.payload.id) 

            if(state.cartItems[existingProduct].cartQuantity > 1){
                state.cartItems[existingProduct].cartQuantity -=1
            } else if (state.cartItems[existingProduct].cartQuantity === 1 ) {
                const nextCartItem = state.cartItems.filter(item => item.id !== action.payload.id)

                state.cartItems = nextCartItem
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