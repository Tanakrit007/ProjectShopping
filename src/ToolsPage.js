import React, { useState } from 'react';
import './assets/nb-shop.css'; // Make sure to import your custom styles
import { useNavigate } from 'react-router-dom';

const ToolsPage = () => {
  // State for the cart
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // ใช้ hook สำหรับการนำทาง

  // Function to add a product to the cart
  const addToCart = (productId, price) => {
    const newCart = [...cart, { productId, price }];
    setCart(newCart);
  };

  // Function to print the cart
  const printCart = () => {
    const cartItems = cart.map(item => `${item.productId} - ฿${item.price}`).join('\n');
    alert(`Cart Items:\n${cartItems}`);
  };

  return (
    <div>
      <header>
        <nav>
          <h1>โอเคเครื่องเขียน</h1>
          <ul>
            {/* ใช้ navigate(-1) เพื่อกลับไปหน้าก่อนหน้า */}
            <button className="card__button" onClick={() => navigate(-1)}>Back</button>
          </ul>
        </nav>
      </header>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-9">
            <div className="logo d-flex justify-content-center" style={{ marginBottom: '30px' }}>
              <h1>อุปกรณ์</h1>
            </div>

            <div id="products" className="row">
              {/* Product 1 */}
              <div className="col-md-3 product">
                <img src="./product_img/cut.jfif" alt="กรรไกร" width="150" height="150" />
                <h5>กรรไกร<br />฿39</h5>
                <button className="btn btn-primary add-to-cart" onClick={() => addToCart('กรรไกร', 39)}>
                  Add to Cart
                </button>
              </div>

              {/* Product 2 */}
              <div className="col-md-3 product">
                <img src="./product_img/cutter.png" alt="คัดเตอร์" width="150" height="150" />
                <h5>คัดเตอร์<br />฿29</h5>
                <button className="btn btn-primary add-to-cart" onClick={() => addToCart('คัดเตอร์', 29)}>
                  Add to Cart
                </button>
              </div>

              {/* Product 3 */}
              <div className="col-md-3 product">
                <img src="./product_img/TOA.jfif" alt="กาว" width="150" height="150" />
                <h5>กาว<br />฿29</h5>
                <button className="btn btn-primary add-to-cart" onClick={() => addToCart('กาว', 29)}>
                  Add to Cart
                </button>
              </div>

              {/* Product 4 */}
              <div className="col-md-3 product">
                <img src="./product_img/กาวแท่ง.jfif" alt="กาวแท่ง" width="150" height="150" />
                <h5>กาวแท่ง<br />฿20</h5>
                <button className="btn btn-primary add-to-cart" onClick={() => addToCart('กาวแท่ง', 20)}>
                  Add to Cart
                </button>
              </div>

              {/* Product 5 */}
              <div className="col-md-3 product">
                <img src="./product_img/MAX.jfif" alt="แม็ค" width="150" height="150" />
                <h5>แม็ค<br />฿35</h5>
                <button className="btn btn-primary add-to-cart" onClick={() => addToCart('แม็ค', 35)}>
                  Add to Cart
                </button>
              </div>

              {/* Product 6 */}
              <div className="col-md-3 product">
                <img src="./product_img/ลูกแม็ก.jfif" alt="ลูกแม็ก" width="150" height="150" />
                <h5>ลูกแม็ก<br />฿15</h5>
                <button className="btn btn-primary add-to-cart" onClick={() => addToCart('ลูกแม็ก', 15)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Cart Section */}
          <div className="col-md-3">
            <h2 style={{ marginTop: '30px' }}>
              Cart
              <img src="./product_img/Cartpng.png" alt="Cartpng" width="34" height="34" style={{ marginTop: '-11px' }} />
            </h2>

            <div id="cart" className="mt-3">
              {cart.length === 0 ? <p>No items in cart.</p> : (
                <ul>
                  {cart.map((item, index) => (
                    <li key={index}>{item.productId} - ฿{item.price}</li>
                  ))}
                </ul>
              )}
            </div>
            <button className="btn btn-success mt-3" onClick={printCart}>
              Print Cart Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
