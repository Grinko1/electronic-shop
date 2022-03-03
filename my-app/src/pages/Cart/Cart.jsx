import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToCart,
  decreastFromCart,
  deleteFromCart,
  getTotal,
} from '../../features/cart/cartSlice';
import './Cart.css';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cartItems, dispatch]);

  const discont = () => {
    if (totalPrice > 1500) {
      const sum = (totalPrice / 100) * 5;
      return sum.toFixed(1);
    } else if (totalPrice <= 1500) {
      return 0;
    }
  };

  const total = totalPrice - discont();

  const handleDelete = (cartItem) => {
    dispatch(deleteFromCart(cartItem));
  };

  const decreactCartItem = (cartItem) => {
    dispatch(decreastFromCart(cartItem));
  };

  const increactCartItem = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  {
    if (cartItems.length <= 0)
      return (
        <div className="emptyCart">
          <div className="emptyCText">
          <h3 >Cart is empty</h3>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              fill="currentColor"
              className="bi bi-basket"
              viewBox="0 0 16 16">
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
            </svg>
           
          </div>
         
          </div>
          <div className='linkToShop'>
          <Link  to='/'>Go Shopping &rarr;</Link>
          </div>
        </div>
      );

    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>
          Cart{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-cart4"
            viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
        </h1>
        <div className="cart-list">
          
          <div className='link-to-catalog'>
          <Link to='/'>
          To Catalog &#8617; 
          </Link>
          </div>
          {cartItems.map((cartItem) => (
            <div className="cart-item" key={cartItem.id}>
              <Link  to={`/product/${cartItem.id}`}>
              <img className="cart-img" src={cartItem.image} alt="" />
              </Link>
              <div className="cart-desc">
                <div style={{ marginTop: '3px' }}>
                <Link to={`/product/${cartItem.id}`}>
                  <span>{cartItem.title}</span>
                  </Link>
                </div>
                <div>
                  <b>${cartItem.price} </b>
                </div>

                <div className="count">
                  {' '}
                  <button className="btn-count" onClick={() => decreactCartItem(cartItem)}>
                    -
                  </button>
                  <h3>{cartItem.cartQuantity}</h3>
                  <button className="btn-count" onClick={() => increactCartItem(cartItem)}>
                    +
                  </button>
                </div>

                <b>Total: ${cartItem.price * cartItem.cartQuantity} </b>
                <div onClick={() => handleDelete(cartItem)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="total">
          <p className="totalP">Subtotal : ${totalPrice}</p>
          <p className="totalP">Discont : ${discont()}</p>
          <p className="totalP">Shipping: Free </p>
          <p className="totalP">Total: ${total}</p>
         
            <button className="btn-order">Order</button>
         
          
        </div>
      </div>
    );
  }
};

export default Cart;
