import qrcode from './product_img/myqrcode.jpg'; // นำเข้า QR Code ที่ต้องการแสดง

export const generateCartReceipt = (cart) => {
  // สร้าง object สำหรับเก็บสินค้าและจำนวนของแต่ละรายการ
  const itemSummary = cart.reduce((acc, item) => {
    const existingItem = acc.find(i => i.name === item.name && i.option === item.option);
    if (existingItem) {
      existingItem.quantity += 1; // ถ้ามีสินค้านี้แล้ว, เพิ่มจำนวน
      existingItem.price += item.price; // บวกราคากับจำนวนที่ซื้อ
    } else {
      acc.push({ ...item, quantity: 1 }); // ถ้ายังไม่มีสินค้าในรายการ, เพิ่มเข้าไป
    }
    return acc;
  }, []);

  // สร้างเนื้อหาใบเสร็จ
  let receiptContent = `  
    <div style="text-align: center; font-family: Arial, sans-serif; width: 80mm; margin: auto;">
      <h2>Cart Receipt</h2>
      <hr>
  `;

  let totalPrice = 0;
  itemSummary.forEach(item => {
    const itemTotalPrice = item.price; // ราคาต่อชิ้น
    const totalItemPrice = itemTotalPrice * item.quantity; // คูณจำนวนสินค้า
    totalPrice += totalItemPrice;
    receiptContent += `  
      <p>${item.name} ${item.option ? `(${item.option})` : ""} x${item.quantity} - ฿${totalItemPrice}</p>
    `;
  });

  receiptContent += `  
    <hr>
    <h3>Total: ฿${totalPrice}</h3>
    <p>พบปัญหาติดต่อ 0888-888-888</p>
    <img src="${qrcode}" alt="QR Code" style="width: 300px; height: 300px; margin-top: 10px;">  <!-- ปรับขนาด QR Code ที่นี่ -->
    <p>QRCODE สำหรับการสั่งซื้อของ</p>
  </div>
  <script>
    window.onload = function() {
      window.print();
      setTimeout(() => window.close(), 500);
    };
  </script>
  `;

  const receiptWindow = window.open("", "_blank", `width=${window.innerWidth},height=${window.innerHeight}`);
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
