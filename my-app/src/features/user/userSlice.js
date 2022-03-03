import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    status:null,
    error:null,
    access_token: localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null
}

export  const createUser = createAsyncThunk(
    'user/createUser',
    async (user, {rejectWithValue} ) => {
        try {
         
            const response = await axios.post('http://127.0.0.1:8000/api/users', {
                name: user.name,
                email: user.email,
                role: user.role,
                password: user.password,
                password_confirm: user.confirmPassword,
            })
       
            console.log(response)
            return response?.data
            
        } catch (error) {
           return rejectWithValue(error.message)
        }
    }
)

export const login = createAsyncThunk(
    'user/login',
    async(user, {rejectWithValue}) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/login', {
                email: user.email,
                password: user.password
            })
            // console.log(response?.data.access_token)
            return response?.data.access_token
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


export const logout = createAsyncThunk(
   'user/logout',
    async(_, {rejectWithValue}) => {
        try {
           const response = await axios.post('http://127.0.0.1:8000/api/auth/logout')
                console.log(response)
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const me = createAsyncThunk(
    'user/me',
    async(_, {rejectWithValue}) => {
        try {
            let config = {
                headers: {
                  'authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
              }
            
         
            const response = await axios.post('http://127.0.0.1:8000/api/auth/me',{},config)

            console.log(response?.data)
            return response?.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers:{
            [createUser.pending] : (state) => {
                state.status = 'loading'
            },
            [createUser.fulfilled] : (state, action) => {
                state.status = 'success'
                state.access_token = action.payload.access_token
                state.user = action.payload.user
                
                localStorage.setItem('access_token',state.access_token )
                localStorage.setItem('user' , state.user)
              
            },
            [createUser.rejected] : (state,action) => {
                state.status = 'error'
                state.error = action.payload
            },
            [login.pending] : (state) => {
                state.status = 'loading'
            },
            [login.fulfilled] : (state, action) => {
                state.status = 'success'
                state.access_token = action.payload
                localStorage.setItem('access_token',state.access_token )
              
            },
            [login.rejected] : (state,action) => {
                state.status = 'error'
                state.error = action.payload
            },
            [me.pending] : (state) => {
                state.status = 'loading'
            },
            [me.fulfilled] : (state, action) => {
                state.status = 'success'
                state.user = action.payload
                // state.access_token = action.payload
                localStorage.setItem('user',JSON.stringify(state.user) )
              
            },
            [me.rejected] : (state,action) => {
                state.status = 'error'
                state.error = action.payload
            },
            [logout.pending] : (state) => {
                state.status = 'loading'
            },
            [logout.fulfilled] : (state, action) => {
                state.status = 'success'
                localStorage.removeItem('access_token' )
                localStorage.removeItem('user' )
              
            },
            [logout.rejected] : (state,action) => {
                state.status = 'error'
                state.error = action.payload
                localStorage.removeItem('access_token' )
                localStorage.removeItem('user')
                
            },
    }
})
export default userSlice.reducer