import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ProductPage from './ProductPage';  // นำเข้า ProductPage
import ToolsPage from './ToolsPage';      // นำเข้า ToolsPage
import PaperPage from './PaperPage';      // นำเข้า PaperPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/tools-page" element={<ToolsPage />} />
        <Route path="/paper-page" element={<PaperPage />} />
      </Routes>
    </Router>
  );
}

export default App;
