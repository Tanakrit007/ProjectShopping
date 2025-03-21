import React, { useState } from "react";
import QRCODE from "./product_img/myqrcode.jpg";

function Cart() {
  const [cart, setCart] = useState({});

  const addToCart = (productId, price, details) => {
    const cartKey = `${productId} (${details})`;

    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (!updatedCart[cartKey]) {
        updatedCart[cartKey] = { quantity: 1, price, details };
      } else {
        updatedCart[cartKey].quantity++;
      }
      return updatedCart;
    });
  };

  const removeFromCart = (cartKey) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[cartKey];
      return updatedCart;
    });
  };

  const calculateTotalPrice = () => {
    return Object.values(cart).reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  const generateCartReceipt = () => {
    const receiptWindow = window.open("", "_blank", "width=600,height=800");

    if (!receiptWindow) {
      alert(
        "Could not open the print window. Please check your browser's popup blocker settings."
      );
      return;
    }

    let receiptContent = `
      <html>
      <head>
        <title>Receipt</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; }
          h2, h3, p { margin: 5px 0; }
          img { width: 200px; height: 200px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <h2>Cart Receipt</h2>
        <hr>
    `;

    let totalPrice = 0;
    for (const cartKey in cart) {
      const item = cart[cartKey];
      const itemTotalPrice = item.quantity * item.price;
      totalPrice += itemTotalPrice;
      receiptContent += `
        <p>${cartKey}<br> ${item.quantity} x ฿${item.price} = ฿${itemTotalPrice}</p>
      `;
    }

    receiptContent += `        
        <hr>
        <h3>Total: ฿${totalPrice}</h3>
        <p>พบปัญหาติดต่อ 0888-888-888</p>
        <img src="${QRCODE}" alt="QR Code">
        <p>QRCODE สำหรับการสั่งซื้อของ</p>
      </body>
      </html>
    `;

    receiptWindow.document.write(receiptContent);
    receiptWindow.document.close();

    setTimeout(() => {
      receiptWindow.print();
    }, 500);
  };

  return (
    <div>
      {Object.keys(cart).length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(cart).map(([cartKey, item]) => (
                <tr key={cartKey}>
                  <td>{cartKey}</td>
                  <td>{item.quantity}</td>
                  <td>฿{item.price}</td>
                  <td>฿{item.quantity * item.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(cartKey)}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total Price: ฿{calculateTotalPrice()}</p>
          <button className="btn btn-success" onClick={generateCartReceipt}>
            Print Receipt
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
