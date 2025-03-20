import React, { useState } from 'react';
import './assets/nb-shop.css'; // นำเข้า CSS สำหรับหน้าเครื่องเขียน
import Cart from './Cart';

// นำเข้ารูปภาพที่ต้องการใช้
import Pencil1Image from './product_img/pencil1.jpg';
import PencilBoxImage from './product_img/pencilbox.jfif';
import PenRedImage from './product_img/penred.jfif';
import PenBlueImage from './product_img/penblue.jfif';
import Colleen24Image from './product_img/colleen24.jfif';
import Pen4Image from './product_img/pen4.3.jfif';
import CartImage from './product_img/Cartpng.png';

function ProductPage() {
  const [cart, setCart] = useState([]); // ใช้ state ในการจัดการตะกร้าสินค้า

  const addToCart = (productId, price) => {
    setCart([...cart, { productId, price }]);
  };

  const printCart = () => {
    if (cart.length === 0) {
      alert("ตะกร้าสินค้าของคุณว่างเปล่า");
    } else {
      console.log("การชำระเงินสินค้าของคุณ: ", cart);
    }
  };

  return (
    <div>
      {/* Header */}
      <header>
        <nav>
          <h1>โอเคเครื่องเขียน</h1>
          <ul>
            <li><a href="/home">Back</a></li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <div className="container mt-5">
        <div className="row">
          {/* Product List */}
          <div className="col-md-9">
            <div className="logo d-flex justify-content-center" style={{ marginBottom: '30px' }}>
              <h1>เครื่องเขียน</h1>
            </div>

            <div id="products" className="row">
              {/* Product 1 */}
              <div className="col-md-3 product">
                <img src={Pencil1Image} alt="Product 1 Image" width="150px" height="150px" />
                <h5>ดินสอ 2 B<br />฿12</h5>
                <button className="btn btn-primary add-to-cart" onClick={() => addToCart('ดินสอ 2 B', 12)}>
                  Add to Cart
                </button>
              </div>

              {/* Product 2 */}
              <div className="col-md-3 product">
                <img src={PencilBoxImage} alt="Product 2 Image" width="150px" height="150px" />
                <h5>ดินสอ 2 B 12 แท่ง<br />฿120</h5>
                <button className="btn btn-primary add-to-cart" onClick={() => addToCart('ดินสอ 12 แท่ง', 120)}>
                  Add to Cart
                </button>
              </div>

              {/* Product 3 */}
              <div className="col-md-3 product">
                <img src={PenRedImage} alt="Product 3 Image" width="150px" height="150px" />
                <h5>ปากกาแดง<br />฿15</h5>
                <button className="btn btn-primary add-to-cart" onClick={() => addToCart('ปากกาแดง', 15)}>
                  Add to Cart
                </button>
              </div>

              {/* Product 4 */}
              <div className="col-md-3 product">
                <img src={PenBlueImage} alt="Product 4 Image" width="150px" height="150px" />
                <h5>ปากกาน้ำเงิน<br />฿15</h5>
                <button className="btn btn-primary add-to-cart" onClick={() => addToCart('ปากกาเงิน', 15)}>
                  Add to Cart
                </button>
              </div>

              {/* Product 5 */}
              <div className="col-md-3 product">
                <img src={Colleen24Image} alt="Product 5 Image" width="150px" height="150px" />
                <h5>24 สี<br />฿89</h5>
                <button className="btn btn-primary add-to-cart" onClick={() => addToCart('24 สี', 89)}>
                  Add to Cart
                </button>
              </div>

              {/* Product 6 */}
              <div className="col-md-3 product">
                <img src={Pen4Image} alt="Product 6 Image" width="150px" height="150px" />
                <h5>ชุดรวมปากกา 12 แท่ง<br />฿150</h5>
                <button className="btn btn-primary add-to-cart" onClick={() => addToCart('ชุดรวมปากกา', 150)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Cart */}
          <div className="col-md-3">
            <h2 style={{ marginTop: '30px' }}>
              Cart
              <img src={CartImage} alt="Cartpng" width="34px" height="34px" style={{ marginTop: '-11px' }} />
            </h2>

            <div id="cart" className="mt-3">
              {cart.length === 0 ? (
                <p>No items in cart.</p>
              ) : (
                <ul>
                  {cart.map((item, index) => (
                    <li key={index}>
                      {item.productId} - ฿{item.price}
                    </li>
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
}

export default ProductPage;
