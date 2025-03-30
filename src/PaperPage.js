import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/nb-shop.css";
import { useNavigate } from 'react-router-dom';
import { generateCartReceipt } from './Cart';  // นำเข้า generateCartReceipt จาก cart.js

// import รูปภาพที่ใช้ใน products
import cart from './product_img/Cartpng.png';
import A4 from './product_img/A4.jfif';
import A4pack from './product_img/A4pack.jpg';
import กระดาษสี from './product_img/กระดาษสี.jpg';

const products = [
  { id: "A4", name: "A4", price: 5, img: A4, options: ["ธรรมดา", "ร้อยปอนด์"] },
  { id: "A4pack", name: "A4 1 แพ็ค 500 แผ่น", price: 129, img: A4pack },
  { id: "กระดาษสี", name: "กระดาษสี", price: 10, img: กระดาษสี, options: ["แดง", "เขียว", "น้ำเงิน", "เหลือง"] },
];

const StationeryShop = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product, option) => {
    // ตรวจสอบว่ามีสินค้าชนิดเดียวกันในตะกร้าหรือยัง
    const existingItemIndex = cart.findIndex(item => item.id === product.id && item.option === option);
    
    if (existingItemIndex !== -1) {
      // ถ้ามีสินค้าแล้ว, เพิ่มจำนวนและราคา
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      updatedCart[existingItemIndex].price += product.price;
      setCart(updatedCart);
    } else {
      // ถ้าไม่มีสินค้าในตะกร้า, เพิ่มสินค้าใหม่
      setCart([...cart, { ...product, option, quantity: 1 }]);
    }
  };

  return (
    <div>
      <header>
        <nav>
          <h1>โอเคเครื่องเขียน</h1>
          <ul>
            <li><button onClick={() => navigate(-1)}>Back</button></li>
          </ul>
        </nav>
      </header>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-9">
            <div className="logo d-flex justify-content-center mb-4">
              <h1>สินค้า</h1>
            </div>

            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-md-3 product">
                  <img src={product.img} alt={product.name} width="150px" height="150px" />
                  <h5>
                    {product.name}
                    <br />฿{product.price}
                  </h5>
                  {product.options && (
                    <select className="form-control mb-2" onChange={(e) => addToCart(product, e.target.value)}>
                      {product.options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  )}
                  <button className="btn btn-primary" onClick={() => addToCart(product, product.options ? product.options[0] : null)}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-3">
            <h2 className="mt-3">
              Cart
              <img src={cart} alt="Cart" width="34px" height="34px" style={{ marginTop: "-11px" }} />
            </h2>

            <div className="mt-3">
              {cart.length === 0 ? (
                <p>No items in cart.</p>
              ) : (
                <ul>
                  {cart.map((item, index) => (
                    <li key={index}>
                      {item.name} {item.option ? `(${item.option})` : ""} x{item.quantity} - ฿{item.price}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className="btn btn-success mt-3" onClick={() => generateCartReceipt(cart)}>Print Cart Receipt</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationeryShop;
