import React, { useState } from "react";

function Cart() {
  const [cart, setCart] = useState({});

  // ฟังก์ชันเพิ่มสินค้าเข้าไปในตะกร้า
  const addToCart = (productId, price, details) => {
    const cartKey = `${productId} (${details})`;

    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (!updatedCart[cartKey]) {
        updatedCart[cartKey] = { quantity: 1, price: price, details: details };
      } else {
        updatedCart[cartKey].quantity++;
      }
      return updatedCart;
    });
  };

  // ฟังก์ชันลบสินค้าออกจากตะกร้า
  const removeFromCart = (cartKey) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[cartKey];
      return updatedCart;
    });
  };

  // คำนวณราคาทั้งหมด
  const calculateTotalPrice = () => {
    return Object.values(cart).reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  // ฟังก์ชันการแสดงข้อมูลตะกร้า
  const updateCartDisplay = () => {
    if (Object.keys(cart).length === 0) {
      return <p>No items in cart.</p>;
    }

    const totalPrice = calculateTotalPrice();
    return (
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
            {Object.entries(cart).map(([cartKey, item]) => {
              const itemTotalPrice = item.quantity * item.price;
              return (
                <tr key={cartKey}>
                  <td>{cartKey}</td>
                  <td>{item.quantity}</td>
                  <td>฿{item.price}</td>
                  <td>฿{itemTotalPrice}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(cartKey)}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>Total Price: ฿{calculateTotalPrice()}</p>
        <button className="btn btn-success" onClick={generateCartReceipt}>Print Receipt</button>
      </>
    );
  };

  // ฟังก์ชันสำหรับสร้างใบเสร็จ
  const generateCartReceipt = () => {
    let receiptContent = `
      <div style="text-align: center; font-family: Arial, sans-serif; width: 80mm; margin: auto;">
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
        <img src="./product_img/myqrcode.jpg" alt="QR Code" style="width: 300px; height: 300px; margin-top: 50px;">
        <p>QRCODE สำหรับการสั่งซื้อของ</p>
      </div>
      <script>
        window.onload = function() {
          window.print();
          setTimeout(() => window.close(), 500);
        };
      </script>
    `;
  
    // ตรวจสอบว่าเราสามารถเปิดหน้าต่างได้หรือไม่
    const receiptWindow = window.open(
      "",
      "_blank",
      `width=600,height=800,scrollbars=yes,resizable=yes`
    );
    
    if (!receiptWindow) {
      alert("Could not open the print window. Please check your browser's popup blocker settings.");
      return;
    }

    // เขียนเนื้อหาของใบเสร็จไปยังหน้าต่างใหม่
    receiptWindow.document.write(`
      <html>
      <head>
        <title>Receipt</title>
        <style>
          body { text-align: center; font-family: Arial, sans-serif; }
          h2, h3, p { margin: 5px 0; }
        </style>
      </head>
      <body>
        ${receiptContent}
      </body>
      </html>
    `);
    receiptWindow.document.close();
  };

  return (
    <div>
      {updateCartDisplay()}
    </div>
  );
}

export default Cart;
