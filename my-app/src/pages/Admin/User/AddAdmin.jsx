import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../features/user/userSlice';

const AddAdmin = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [role, setRole] = useState('admin')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const dispatch = useDispatch()


    const handleRegister = (e, name, email,role, password, confirmPassword) => {
        const user = { name, email,role,password, confirmPassword}
        e.preventDefault()
        dispatch(createUser(user))
    }

    return (
        <div className='container'>
        <div className='login-form'>
            <div>
                 <h1 style={{textAlign:"center", marginBottom:'15px'}}>Add an admin</h1>
            </div>
           
            <form className='login-input' >
            <div>
                  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='name'/>  
                </div>
                <div>
                  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email'/>  
                </div>
                <div>
                  <input type="text" value={role} disabled />
                   
                </div>
                <div>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
                </div>
                <div>
                    <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='confirm password'/>
                </div>
                
                <div>
                    <button className='btn-login' onClick={(e)=>handleRegister(e, name, email,role, password, confirmPassword)} type='submit' >Registration</button>
                </div>
                
               
            </form>
        </div>

        
    </div>
    );
};

export default AddAdmin;