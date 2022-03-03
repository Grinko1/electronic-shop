import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCategory } from '../../../features/product/categorySlice';

const AddCategory = () => {
    const [titleCat, setTitleCat] = useState('');
    const dispatch = useDispatch()

    const addOneCategory = (e, titleCat) => {
        e.preventDefault();
        dispatch(createCategory(titleCat));
        setTitleCat('')
      };
    return (
        <div className='container'>
              <div style={{ fontSize: '20px', textAlign: 'center', marginTop: '20px' }}>
          {' '}
          Add category
        </div>
        <div className="form">
          <form action="" className="create-form">
            <input
              type="text"
              value={titleCat}
              onChange={(e) => setTitleCat(e.target.value)}
              id="title"
              placeholder="title of category"
            />
            <button
              type="submit"
              onClick={(e) => addOneCategory(e, titleCat)}
              className="btn-create-admin">
              Create category
            </button>
          </form>
        </div>

        <hr />
        </div>
    );
};

export default AddCategory;