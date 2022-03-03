import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink, Outlet} from 'react-router-dom'
import { logout } from '../../features/user/userSlice';
import './Nav.css'

const Layouts = () => {

  const access_token = useSelector(state=> state.user.access_token)
  const dispatch = useDispatch()

    return (
      <>
        <nav className="nav-container">
        <NavLink to="/">
      <h1 className="logo">ASMshop</h1>
      </NavLink>
     
     
    
   
     
      <div className="nav-cart">
   
        <div className="linkToAdmin">
      <NavLink to="/admin">
    <p> AdminPanel</p>
     </NavLink>
     </div>
     <div>
        <NavLink to="/cart">
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-bag-check"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
            />
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
        </NavLink>
        </div>
      </div>
    </nav>
    <main>
      <Outlet/>
    </main>
    </>
    );
};

export default Layouts;