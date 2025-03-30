import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./assets/nb-shop.css";
import { generateCartReceipt } from './Cart';  // นำเข้า generateCartReceipt จาก Cart.js

// import รูปภาพที่ใช้ใน products
import pencil1 from './product_img/pencil1.jpg';
import pencilbox from './product_img/pencilbox.jfif';
import penred from './product_img/penred.jfif';
import penblue from './product_img/penblue.jfif';
import colleen24 from './product_img/colleen24.jfif';
import pen43 from './product_img/pen4.3.jfif';

const products = [
  { id: 1, img: pencil1, name: "ดินสอ 2 B", price: 12 },
  { id: 2, img: pencilbox, name: "ดินสอ 2 B 12 แท่ง", price: 120 },
  { id: 3, img: penred, name: "ปากกาแดง", price: 15 },
  { id: 4, img: penblue, name: "ปากกาน้ำเงิน", price: 15 },
  { id: 5, img: colleen24, name: "24 สี", price: 89 },
  { id: 6, img: pen43, name: "ชุดรวมปากกา 12 แท่ง", price: 150 },
];

function Shop() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // ใช้ useNavigate

  const addToCart = (product) => {
    // ตรวจสอบว่ามีสินค้าชนิดเดียวกันในตะกร้าหรือยัง
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
    <div className="container mt-5">
      <header>
        <nav>
          <h1>โอเคเครื่องเขียน</h1>
          <ul>
            <li><button onClick={() => navigate(-1)}>Back</button></li>
          </ul>
        </nav>
      </header>

      <div className="row">
        <div className="col-md-9">
          <div className="logo d-flex justify-content-center mb-4">
            <h1>เครื่องเขียน</h1>
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
            Cart <FaShoppingCart />
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
          <button className="btn btn-success mt-3" onClick={() => generateCartReceipt(cart)}>Print Cart Receipt</button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
