import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  brands: [],
  status: null,
  error: null,
};

export const fetchBrands = createAsyncThunk(
  'brands/fetchBrands',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/brands');
 
      return response?.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);


export const createBrands = createAsyncThunk(
  'brands/createBrands',
  async (titleBrand, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/brands',
        { headers: {
            'Content-Type' :'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        } ,
        title: titleBrand ,
    },
     
      );

      return response?.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const brandSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBrands.pending]: (state) => {
      state.status = 'Loading';
    },
    [fetchBrands.fulfilled]: (state, action) => {
      state.status = 'Success';
      state.brands = action.payload;
    },
    [fetchBrands.rejected]: (state, action) => {
      state.status = 'Error';
      state.error = action.payload;
    },
    [createBrands.pending]: (state) => {
      state.status = 'Loading';
    },
    [createBrands.fulfilled]: (state, action) => {
      state.status = 'Success';
      // state.brands = action.payload
    },
    [createBrands.rejected]: (state, action) => {
      state.status = 'Error';
      state.error = action.payload;
    },
  },
});

export default brandSlice.reducer;
