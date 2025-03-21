import React, { useState } from "react";
import "./assets/nb-shop.css"; // นำเข้า CSS สำหรับหน้าอุปกรณ์
import { useNavigate } from "react-router-dom";

// นำเข้ารูปภาพที่ต้องการใช้
import ScissorsImage from "./product_img/cut.jfif";
import CutterImage from "./product_img/cutter.png";
import GlueImage from "./product_img/TOA.jfif";
import GlueStickImage from "./product_img/กาวแท่ง.jfif";
import StaplerImage from "./product_img/MAX.jfif";
import StaplesImage from "./product_img/ลูกแม็ก.jfif";
import CartImage from "./product_img/Cartpng.png";

const ToolsPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

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
      <header>
        <nav>
          <h1>โอเคเครื่องเขียน</h1>
          <button className="card__button" onClick={() => navigate(-1)}>
            Back
          </button>
        </nav>
      </header>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-9">
            <div
              className="logo d-flex justify-content-center"
              style={{ marginBottom: "30px" }}
            >
              <h1>อุปกรณ์</h1>
            </div>

            <div id="products" className="row">
              {/* Product List */}
              {[
                { img: ScissorsImage, name: "กรรไกร", price: 39 },
                { img: CutterImage, name: "คัดเตอร์", price: 29 },
                { img: GlueImage, name: "กาว", price: 29 },
                { img: GlueStickImage, name: "กาวแท่ง", price: 20 },
                { img: StaplerImage, name: "แม็ค", price: 35 },
                { img: StaplesImage, name: "ลูกแม็ก", price: 15 },
              ].map((product, index) => (
                <div key={index} className="col-md-3 product">
                  <img
                    src={product.img}
                    alt={product.name}
                    width="150"
                    height="150"
                  />
                  <h5>
                    {product.name}
                    <br />฿{product.price}
                  </h5>
                  <button
                    className="btn btn-primary add-to-cart"
                    onClick={() => addToCart(product.name, product.price)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="col-md-3">
            <h2 style={{ marginTop: "30px" }}>
              Cart{" "}
              <img
                src={CartImage}
                alt="Cart"
                width="34"
                height="34"
                style={{ marginTop: "-11px" }}
              />
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
};

export default ToolsPage;
