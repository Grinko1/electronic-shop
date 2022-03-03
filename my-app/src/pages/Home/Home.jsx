import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import { addToCart } from '../../features/cart/cartSlice';
import { useGetProductQuery } from '../../features/product/productApi';
import './Home.css';

const Home = () => {
  // const products = useSelector((state) => state.products.products);
  const [minPrice, setMinPrice] = useState('minPrice')
  const [maxPrice, setMaxPrice] = useState('maxPrice')
  const [newest, setNewest] = useState('newest')
  const [sortCat, setsortCat] = useState('newest')
  const {data} = useGetProductQuery()
  const [search, setSearch] = useState('')


  const user = useSelector(state => state.user.user)
  // console.log(user);


   const dispatch = useDispatch()
 
    const filteredData =  data?.data.filter(product => product.title.toLowerCase()
    .includes(search.toLowerCase()))
    .sort((a,b) => {
     
     if(sortCat == 'maxPrice')
     {
      return b.price - a.price
     } else if (sortCat === 'minPrice')
     {
       return a.price - b.price
     }
      
     })


  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  return (
    <div className="home-container">
      <div className="home-banner">
        <img
          className="banner-img"
          src="https://rozetked.me/images/uploads/0rlvx50ZVDqp.jpg"
          alt="banner"
        />
      </div>
      {/* <SearchPanel search={search} SetSearch={setSearch} setsortCat={setsortCat} newest={newest} maxPrice={maxPrice} minPrice={minPrice}  /> */}
      <div className="home-search">
        <div className='search'>
          <input className="input-search" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Type a name" />
          <button type="submit" className="btn-search">
            Search
          </button>
        </div>

        <div className='sort'>
          <button type="submit" className="btn-search">
            Sort
          </button>
          <select className="select" name="Sort" onChange={(e) => setsortCat(e.target.value)}>
            <option className="option" value={newest}>
            Newest 
            </option>
            <option className="option" value={maxPrice} >
              Max price
            </option>
            <option className="option" value={minPrice}>
            Min price
            </option>
          </select>
        </div>
      </div>

      <div className="home-list">
        {filteredData?.map((product) => (
          <div className="product-item" key={product.id}>
            <Link to={`product/${product.id}`}>
              <img className="prod-img" src={product.image} />
            
            
              <h3 className="prod-desc">{product.title}</h3>
              </Link>
              <p className="prod-desc">{product.category.title}</p>
           
            <p className="prod-desc">Price ${product.price}</p>
            <div className="btn-group">
              <button className="btn-incart" onClick={() => handleAddToCart(product)}>In Cart</button>
            </div>
          </div>
        ))}

       

      
     

      </div>
    </div>
  );
};

export default Home;
