import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  product:null,
  status: null,
  error: null,
};

export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/products');
 

      return response?.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchOneProduct = createAsyncThunk(
  'products/fetchOneProduct',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
      // console.log(response.data.data);

      return response?.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/products', 
        {
          title: data.title,
          image: data.image,
          desc: data.desc,
          price:data.price,
          category_id:data.categoryId,
          brand_id: data.brandId,
        },
      );

 

      return response?.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (id, {rejectWithValue}) =>{
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProduct.pending]: (state) => {
      state.status = 'Loading';
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.status = 'Success';
      state.products = action.payload;
    },
    [fetchProduct.rejected]: (state, action) => {
      state.status = 'Error';
      state.error = action.payload;
    },
    [createProduct.pending]: (state) => {
        state.status = 'Loading';
      },
      [createProduct.fulfilled]: (state, action) => {
        state.status = 'Success';
        // state.products = action.payload;
      },
      [createProduct.rejected]: (state, action) => {
        state.status = 'Error';
        state.error = action.payload;
      },
      [deleteProduct.pending]: (state) => {
        state.status = 'Loading';
      },
      [deleteProduct.fulfilled]: (state, action) => {
        state.status = 'Success';
        // state.products = action.payload;
      },
      [deleteProduct.rejected]: (state, action) => {
        state.status = 'Error';
        state.error = action.payload;
      },
      [fetchOneProduct.pending]: (state) => {
        state.status = 'Loading';
      },
      [fetchOneProduct.fulfilled]: (state, action) => {
        state.status = 'Success';
        state.product = action.payload;
      },
      [fetchOneProduct.rejected]: (state, action) => {
        state.status = 'Error';
        state.error = action.payload;
      },
  },
});

export default productSlice.reducer;
