import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../../features/user/userSlice';
import './Login.css'


const Register = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [role, setRole] = useState('user')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleRegister = (e, name, role,  email,password, confirmPassword) => {

        const user = { name, role, email,password, confirmPassword}
        e.preventDefault()
        dispatch(createUser(user))
        navigate('/', {replace:true})

      
    }
    return (
        <div className='container'>
        <div className='login-form'>
            <div>
                 <h1 style={{textAlign:"center", marginBottom:'15px'}}>Registration</h1>
            </div>
           
            <form className='login-input' >
            <div>
                  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='name'/>  
                </div>
                <div>
                  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email'/>  
                </div>
                <div >
                  <input type="text" hidden value={role} disabled />
                   
                </div>
                <div>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
                </div>
                <div>
                    <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='confirm password'/>
                </div>
                <div>
                    <button className='btn-login' onClick={(e)=>handleRegister(e, name,role, email,password, confirmPassword)} type='submit' >Registration</button>
                </div>
                
                <span>Already have an account? <Link to='/login'>Login</Link></span>
            </form>
        </div>

        
    </div>
    );
};

export default Register;