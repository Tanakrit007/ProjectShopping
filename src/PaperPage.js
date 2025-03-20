import React, { useState } from 'react';
import './assets/nb-shop.css'; // ให้แน่ใจว่าได้ import สไตล์ที่คุณใช้
import { useNavigate } from 'react-router-dom';

// นำเข้ารูปภาพที่ต้องการใช้
import A4Image from './product_img/A4.jfif';
import A4PackImage from './product_img/A4pack.jpg';
import ColorPaperImage from './product_img/กระดาษสี.jpg';
import CartImage from './product_img/Cartpng.png';

const PaperPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // ใช้ hook สำหรับการนำทาง

  const addToCart = (productId, price) => {
    const newCart = [...cart, { productId, price }];
    setCart(newCart);
  };

  const printCart = () => {
    const cartItems = cart.map(item => `${item.productId} - ฿${item.price}`).join('\n');
    alert(`รายการสินค้าในตะกร้า:\n${cartItems}`);
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
              <h1>กระดาษ</h1>
            </div>

            <div id="products" className="row">
              {/* สินค้า 1 */}
              <div className="col-md-3 product">
                <img src={A4Image} alt="A4" width="150" height="150" />
                <h5>A4<br />฿5</h5>
                <select className="form-control paper-type" data-product-id="A4">
                  <option value="ธรรมดา">ธรรมดา</option>
                  <option value="ร้อยปอนด์">ร้อยปอนด์</option>
                </select>
                <button className="btn btn-primary add-to-cart" onClick={() => addToCart('A4', 5)}>
                  Add to Cart
                </button>
              </div>

              {/* สินค้า 2 */}
              <div className="col-md-3 product">
                <img src={A4PackImage} alt="A4 1 แพ็ค" width="150" height="150" />
                <h5>A4 1 แพ็ค 500 แผ่น<br />฿129</h5>
                <button className="btn btn-primary add-to-cart" onClick={() => addToCart('A4 1 แพ็ค', 129)}>
                  Add to Cart
                </button>
              </div>

              {/* สินค้า 3 */}
              <div className="col-md-3 product">
                <img src={ColorPaperImage} alt="กระดาษสี" width="150" height="150" />
                <h5>กระดาษสี<br />฿10</h5>
                <select className="form-control paper-color" data-product-id="กระดาษสี">
                  <option value="แดง">แดง</option>
                  <option value="เขียว">เขียว</option>
                  <option value="น้ำเงิน">น้ำเงิน</option>
                  <option value="เหลือง">เหลือง</option>
                </select>
                <button className="btn btn-primary add-to-cart" onClick={() => addToCart('กระดาษสี', 10)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* ส่วนของตะกร้า */}
          <div className="col-md-3">
            <h2 style={{ marginTop: '30px' }}>
              ตะกร้า
              <img src={CartImage} alt="Cartpng" width="34" height="34" style={{ marginTop: '-11px' }} />
            </h2>

            <div id="cart" className="mt-3">
              {cart.length === 0 ? <p>ไม่มีสินค้าในตะกร้า.</p> : (
                <ul>
                  {cart.map((item, index) => (
                    <li key={index}>{item.productId} - ฿{item.price}</li>
                  ))}
                </ul>
              )}
            </div>
            <button className="btn btn-success mt-3" onClick={printCart}>
              พิมพ์ใบเสร็จ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperPage;
