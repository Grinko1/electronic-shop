import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchOneProduct} from '../../features/product/productSlice'
import './ProductDetail.css'
import {useNavigate, useParams} from 'react-router-dom'
import { addToCart } from '../../features/cart/cartSlice';


const ProductDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const product = useSelector(state => state.products.product)
    const goBack = () => navigate(-1);


    useEffect(()=>{
        dispatch(fetchOneProduct(id))
    },[id])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }


    return (
        <div className='container'>
          { product &&
           <div className='detail-container'>
                <div className="detail-img">
                    <img src={product?.image} alt=""/>
                </div>
                <div className="detail-desc">
                    <h2>{product?.title}</h2>
                    <p>{product.category.title}/{product.brand.title}</p>
                 <div>
                    <span>{product.desc}</span>
                    <h4>Price: ${product.price}</h4>
                    </div>
                    <div>
                        <button className='toCart' onClick={() => handleAddToCart(product)} >Add to Cart</button>
                    </div>
                </div>
            </div>}
            <div className='goBack' onClick={goBack}>	&#8617;</div>
        </div>
    );
};

export default ProductDetail;