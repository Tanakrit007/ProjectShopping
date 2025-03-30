import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom"; // เพิ่มการนำเข้า Link
import ProductPage from './ProductPage'; // นำเข้า ProductPage
import ToolsPage from './ToolsPage';
import PaperPage from './PaperPage';
import pencil1 from './product_img/pencil1.jpg';
import cut from './product_img/cut.jfif';
import A4 from './product_img/A4.jfif';

const products = [
  { id: 1, img: pencil1, title: "เครื่องเขียน", link: "/product-page" },  // ใช้ตัวแปร pencil1 แทน path
  { id: 2, img: cut, title: "อุปกรณ์", link: "/tools-page" },             // ใช้ตัวแปร cut แทน path
  { id: 3, img: A4, title: "กระดาษ", link: "/paper-page" },               // ใช้ตัวแปร A4 แทน path
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header>
        <nav>
          <h1>โอเคเครื่องเขียน</h1>
          <button id="btn" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
          <ul className={menuOpen ? "show" : ""}>
            <li><Link to="/">Home</Link></li> {/* เปลี่ยนจาก <a> เป็น <Link> */}
          </ul>
        </nav>
      </header>

      <div className="container">
        <div className="card__container">
          {products.map(product => (
            <article className="card__article" key={product.id}>
              <img src={product.img} alt="image" className="card__img" />
              <div className="card__data">
                <h2 className="card__title">{product.title}</h2>
                <Link to={product.link} className="card__button">Read More</Link> {/* เปลี่ยนจาก <a> เป็น <Link> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
