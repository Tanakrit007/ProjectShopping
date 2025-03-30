import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/nb-shop.css";

// นำเข้า generateCartReceipt จาก Cart.js
import { generateCartReceipt } from './Cart';

// import รูปภาพที่ใช้ใน products
import cut from './product_img/cut.jfif';
import cutter from './product_img/cutter.png';
import toa from './product_img/TOA.jfif';
import gao from './product_img/กาวแท่ง.jfif';
import max from './product_img/MAX.jfif';
import ลูกแม็ก from './product_img/ลูกแม็ก.jfif';
import cartIcon from './product_img/Cartpng.png';

const products = [
  { id: "กรรไกร", name: "กรรไกร", price: 39, img: cut },
  { id: "คัดเตอร์", name: "คัดเตอร์", price: 29, img: cutter },
  { id: "กาว", name: "กาว", price: 29, img: toa },
  { id: "กาวแท่ง", name: "กาวแท่ง", price: 20, img: gao },
  { id: "แม็ค", name: "แม็ค", price: 35, img: max },
  { id: "ลูกแม็ก", name: "ลูกแม็ก", price: 15, img: ลูกแม็ก },
];

const StationeryShop = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // ใช้ useNavigate

  const addToCart = (product) => {
    // ตรวจสอบว่ามีสินค้าชนิดเดียวกันในตะกร้าหรือไม่
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingItemIndex !== -1) {
      // ถ้ามีสินค้าแล้ว, เพิ่มจำนวนและราคา
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      updatedCart[existingItemIndex].price += product.price;
      setCart(updatedCart);
    } else {
      // ถ้าไม่มีสินค้าในตะกร้า, เพิ่มสินค้าใหม่
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <header>
        <nav>
          <h1>โอเคเครื่องเขียน</h1>
          <ul>
            <li><button onClick={() => navigate(-1)}>Back</button></li> {/* ใช้ปุ่ม Back */}
          </ul>
        </nav>
      </header>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-9">
            <div className="logo d-flex justify-content-center mb-4">
              <h1>อุปกรณ์</h1>
            </div>

            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-md-3 product mb-4">
                  <div className="card">
                    <img src={product.img} alt={product.name} className="card-img-top" width="150px" height="150px" />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">฿{product.price}</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-3">
            <h2 className="mt-3">
              Cart <img src={cartIcon} alt="Cart" width="34px" height="34px" style={{ marginTop: "-11px" }} />
            </h2>
            <div id="cart" className="mt-3">
              {cart.length === 0 ? (
                <p>No items in cart.</p>
              ) : (
                <ul>
                  {cart.map((item, index) => (
                    <li key={index}>
                      {item.name} x{item.quantity} - ฿{item.price}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className="btn btn-success mt-3" onClick={() => generateCartReceipt(cart)}>
              Print Cart Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationeryShop;
