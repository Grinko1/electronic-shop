import React from 'react';

const CartItem = ({title, desc, image, price, category, brand}) => {
    return (
        <div className="cart-item">
          <img
            className="cart-img"
            src={image}
            alt=""
          />
          <div className="cart-desc">
            <div style={{marginTop:'3px'}}>
              <span >Notebook Amd 32-70 </span>
            </div>
            <div>
              <b>$1220 </b>
            </div>

            <div className="count">
              {' '}
              <button className="btn-count">-</button>
              <h3>1</h3>
              <button className="btn-count">+</button>
            </div>

            <b>Total: $1300</b>
            <div>
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


    );
};

export default CartItem;