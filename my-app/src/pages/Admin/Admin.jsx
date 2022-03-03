import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAddProductMutation } from '../../features/product/productApi';
import './Admin.css';



const Admin = () => {

  const [addProduct, { isError }] = useAddProductMutation();


  return (
    <div>
      
      <div className="admin-create">


        <hr />
    <div className="admin-links">
        <div className='each-link'>
          <Link to='create-product' >Create Product</Link>
        </div>
        <div className='each-link'>
          <Link to='create-category'>Create Category</Link>
        </div>
        <div className='each-link'>
          <Link to='create-brand'>Create Brand</Link>
        </div>
        <div className='each-link'>
          <Link to='edit'>Edit Product</Link>
        </div>
        <div className='each-link'>
          <Link to='add_admin'>Add an admin</Link>
        </div>
        </div>
        <div>
        <Outlet/>
        </div>
      

      </div>
    </div>
  );
};

export default Admin;
