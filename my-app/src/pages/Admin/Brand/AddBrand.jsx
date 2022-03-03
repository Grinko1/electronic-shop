import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBrands } from '../../../features/product/brandSlice';

const AddBrand = () => {
    const [titleBrand, setTitleBrand] = useState('');
    const dispatch = useDispatch();

    const CreateBrand = (e, titleBrand) => {
        e.preventDefault();
       dispatch(createBrands(titleBrand));
        setTitleBrand('')
      };
    return (
        <div className='container'>
             <div style={{ fontSize: '20px', textAlign: 'center', marginTop: '20px' }}> Add brand</div>
        <div className="form">
          <form action="" className="create-form">
            <input
              type="text"
              value={titleBrand}
              onChange={(e) => setTitleBrand(e.target.value)}
              id="title"
              placeholder="title of brand"
            />
            <button
              type="submit"
              onClick={(e) => CreateBrand(e, titleBrand)}
              className="btn-create-admin">
              Create brand
            </button>
          </form>
        </div>
        </div>
    );
};

export default AddBrand;