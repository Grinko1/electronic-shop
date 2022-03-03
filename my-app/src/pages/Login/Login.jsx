import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import './Login.css'
import { login } from '../../features/user/userSlice';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigete = useNavigate()

    const dispatch = useDispatch()


    const handleLogin = (e, password, email) => {
        e.preventDefault()
        const user = { password, email}
        dispatch(login(user))
        navigete('/', {replace:true})
    }
    return (
        <div className='container'>
            <div className='login-form'>
                <div>
                     <h1 style={{textAlign:"center", marginBottom:'15px'}}>Login</h1>
                </div>
               
                <form className='login-input' >
                    <div>
                      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email'/>  
                    </div>
                    <div>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
                    </div>
                    <div>
                         <button className='btn-login' onClick={(e)=>handleLogin(e, password, email)} type="submit">Login</button>
                    </div>
                    
                    <span>No account? <Link to='/register'>Register</Link></span>
                </form>
            </div>

            
        </div>
    );
};

export default Login;