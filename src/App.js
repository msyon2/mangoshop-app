import React, { ReactFragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./components/MainPage";
import UploadPage from "./components/UploadPage";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/upload" element={<UploadPage></UploadPage>} />
        <Route path="/products/:id" element={<ProductPage></ProductPage>} />
      </Routes>
      <div id="footer">
        <Link to="/about">회사소개</Link>
        <Link to="/policy">이용약관</Link>
        <Link to="/sales">통신판매업:123-1234</Link>
        <Link to="/license">사업자등록번호:456-56-78951</Link>
      </div>
    </React.Fragment>
  );
}

export default App;
