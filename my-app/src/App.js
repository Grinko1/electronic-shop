import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layouts from './components/Nav/Layouts';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart'
import Admin from './pages/Admin/Admin'
import NotFound from './pages/NotFound/NotFound'
import AddProduct from './pages/Admin/Product/AddProduct';
import AddCategory from './pages/Admin/Category/AddCategory';
import AddBrand from './pages/Admin/Brand/AddBrand'
import EditProduct from './pages/Admin/EditProduct';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from './features/product/categorySlice';
import { fetchBrands } from './features/product/brandSlice';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import AddAdmin from './pages/Admin/User/AddAdmin';
import { me } from './features/user/userSlice';

function App() {
  const dispatch = useDispatch()
  const access_token = useSelector(state => state.user.access_token)
  // console.log(access_token)
  useEffect(()=>{
    dispatch(fetchCategory())
    dispatch(fetchBrands())
    dispatch(me())
  },[])
  return (
    <div className="App">
      <ToastContainer/>
    <Routes>
      <Route path='/' element={<Layouts/>}>
       
        <Route index element={<Home/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='product/:id' element={<ProductDetail/>}/>
        <Route path='admin' element={<Admin/>}>
          <Route path='create-product' element={<AddProduct/>}/>
          <Route path="create-category" element={<AddCategory/>}/>
          <Route path="create-brand" element={<AddBrand/>}/>
          <Route path="edit" element={<EditProduct/>}/>
          <Route path="add_admin" element={<AddAdmin/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
     
      </Route>
    </Routes>
      
    </div>
  );
}

export default App;
