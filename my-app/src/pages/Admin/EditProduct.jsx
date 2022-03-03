import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductQuery } from '../../features/product/productApi';
import { deleteProduct, fetchProduct } from '../../features/product/productSlice';
import './EditProduct.css'

const EditProduct = () => {

  const category = useSelector((state) => state.category.categories);
  const brands = useSelector((state) => state.brands.brands);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [brandId, setBrandId] = useState('');
  const [isEdit, setIsEdit] = useState('')

    const {data} = useGetProductQuery()
 
  
    const dispatch = useDispatch()

    const handleDelProduct = (id) => {
        dispatch(deleteProduct(id))
     
    }

    const handleEdit= (id)=>{
      setIsEdit(id)

    }

    console.log(isEdit);
 
    return (
      <div className='container'> 

        <div>

          <h2>Products</h2>
          <div>
            {
              data && data.data.map(product => (

           
     <div className='item-product' key={product.id}>
       <div className='main-peace'>
       <div className='item-product-text'>
            <b>Title: </b><p>{product.title}</p>
            </div>
            <div className='item-product-text'>
              <b>
                Description:
              </b> <p>{product.desc}</p>
            </div>
            <div className='item-product-text'>
              <b>Image Url: </b><p>{product.image}</p>
              <img className='edit.img' src={product.image} alt=""/>
            </div>
            <div className='item-product-text'><b>Price:</b><p>{product.price} </p></div>
            <div className='item-product-text'><b>Category:</b><p>{product.category.title}</p></div>
            <div className='item-product-text'><b>Brand: </b><p>{product.brand.title}</p></div>
            <div className='btn-group'>
              <button className='btn-edit ' onClick={() => handleEdit(product.id)}>Edit</button>
              <button className='btn-delete' onClick={() => handleDelProduct(product.id)}>Delete</button>
              </div>
              </div>

          <div  className={ isEdit ? 'admin-form' : 'd-none'} >
          


          <div style={{marginRight:'100px', marginBottom:'10px'}}> Edit product</div>
    
          <div className="form-for-update">
            <form action="" className="create-form">
              <input
                type="text"
                value=""
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                placeholder="title"
              />
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                id="image"
                placeholder="Image url"
              />
              <textarea
                name=""
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                id="desc"
                cols="10"
                rows="5"
                placeholder="description"></textarea>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                id="price"
                placeholder="price"
              />
    
              <select
                className="admin-select"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                name=""
                id="">
                <option value="">choose one category </option>
                {category?.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.title}
                  </option>
                ))}
              </select>
    
              <select
                className="admin-select"
                value={brandId}
                onChange={(e) => setBrandId(e.target.value)}
                name=""
                id="">
                <option value="">choose one brand </option>
                {brands?.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.title}
                  </option>
                ))}
              </select>
              <button
                type="submit"
             
                // onClick={(e) => makeProduct(e, title, image, desc, price, categoryId, brandId)}
                className="btn-create-admin">
                Update
              </button>
            </form>
          </div>
        </div>
            </div>
            ))
          }
         
          </div>

       
        </div>

          </div>
    );
};

export default EditProduct;