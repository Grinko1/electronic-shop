import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createProduct } from '../../../features/product/productSlice';

const AddProduct = () => {

    const category = useSelector((state) => state.category.categories);
    const brands = useSelector((state) => state.brands.brands);

  
    
    // console.log(history);

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [brandId, setBrandId] = useState('');

    const dispatch = useDispatch()
  


    const makeProduct = (e, title, image, desc, price, categoryId, brandId) => {
        e.preventDefault();
        const data = { title, image, desc, price, categoryId, brandId };
  
        dispatch(createProduct( data ));
        setTitle('')
        setImage('')
        setDesc('')
        setPrice('')
        setCategoryId('')
        setBrandId('')
      };

  return (
    <div className='container'>

      {/* <button >Back</button> */}
      <div style={{ fontSize: '20px', textAlign: 'center', marginTop: '20px' }}> Add product</div>

      <div className="form">
        <form action="" className="create-form">
          <input
            type="text"
            value={title}
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
            //   onClick={(e) => handleAddProduct(e)}
            onClick={(e) => makeProduct(e, title, image, desc, price, categoryId, brandId)}
            className="btn-create-admin">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
