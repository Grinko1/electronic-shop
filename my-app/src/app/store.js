import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice'
import categoryReducer from '../features/product/categorySlice'
import brandReducer from '../features/product/brandSlice'
import {productApi} from '../features/product/productApi'
import cartReducer from '../features/cart/cartSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    
    products: productReducer,
    category: categoryReducer,
    brands: brandReducer,
    cartItems : cartReducer,
    user : userReducer,
    [productApi.reducerPath] : productApi.reducer

  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
});
