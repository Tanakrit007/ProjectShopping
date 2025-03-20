import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // นำเข้า Link จาก react-router-dom
import ProductPage from './ProductPage';
import ToolsPage from './ToolsPage';
import PaperPage from './PaperPage';
import './assets/styles.css';  // นำเข้า CSS

// Import รูปภาพ
import pencil1 from './product_img/pencil1.jpg';
import cut from './product_img/cut.jfif';
import A4 from './product_img/A4.jfif';

function Home() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      {/* Header */}
      <header>
        <nav>
          <h1>โอเคเครื่องเขียน</h1>
          <ul className={menuVisible ? 'show' : ''}>
            <li><a href="main_index.html">Home</a></li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <div className="container">
        <div className="card__container">
          <article className="card__article product">
            {/* ใช้ import รูปภาพ */}
            <img src={pencil1} alt="เครื่องเขียน" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">เครื่องเขียน</h2>
              {/* เปลี่ยน <a> เป็น <Link> */}
              <Link to="/product-page" className="card__button">Read More</Link>
            </div>
          </article>

          <article className="card__article product">
            {/* ใช้ import รูปภาพ */}
            <img src={cut} alt="อุปกรณ์" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">อุปกรณ์</h2>
              {/* เปลี่ยน <a> เป็น <Link> */}
              <Link to="/tools-page" className="card__button">Read More</Link>
            </div>
          </article>

          <article className="card__article product">
            {/* ใช้ import รูปภาพ */}
            <img src={A4} alt="กระดาษ" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">กระดาษ</h2>
              {/* เปลี่ยน <a> เป็น <Link> */}
              <Link to="/paper-page" className="card__button">Read More</Link>
            </div>
          </article>
        </div>
      </div>

      {/* Button to toggle menu visibility */}
      <button id="btn" onClick={toggleMenu}>Toggle Menu</button>
    </div>
  );
}

export default Home;
