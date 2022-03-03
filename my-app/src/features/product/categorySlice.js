import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    categories :[],
    status: null,
    error: null
}


export const fetchCategory = createAsyncThunk(
    'category/fetchCategory',
   async ( _, {rejectWithValue}) =>{
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/categories')
      
        
        return response?.data.data

        
    } catch (error) {
        return rejectWithValue(error.message)
    }
    }
)

export const createCategory = createAsyncThunk(
    'category/createCategory',
   async ( title, {rejectWithValue}) =>{
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/categories', {title})
        
    
        return response?.data.data

        
    } catch (error) {
        return rejectWithValue(error.message)
    }
    }
)

export const deleteCategory = createAsyncThunk(
    'category/deleteCategory',
    async(id, {rejectWithValue}) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/categories/${id}`)

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchCategory.pending] :(state) => {
            state.status = 'Loading'
        },
        [fetchCategory.fulfilled] :(state,action) => {
            state.status = 'Success'
            state.categories = action.payload
        },
        [fetchCategory.rejected] :(state,action) => {
            state.status = 'Error'
            state.error = action.payload
        },
        [createCategory.pending] :(state) => {
            state.status = 'Loading'
        },
        [createCategory.fulfilled] :(state,action) => {
            state.status = 'Success'
            // state.categories = action.payload
        },
        [createCategory.rejected] :(state,action) => {
            state.status = 'Error'
            state.error = action.payload
        },
        [deleteCategory.pending] :(state) => {
            state.status = 'Loading'
        },
        [deleteCategory.fulfilled] :(state,action) => {
            state.status = 'Success'
            // state.categories = action.payload
        },
        [deleteCategory.rejected] :(state,action) => {
            state.status = 'Error'
            state.error = action.payload
        },
    }
})


export default categorySlice.reducer