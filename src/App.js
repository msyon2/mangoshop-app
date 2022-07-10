import React, { ReactFragment } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import MainPage from "./components/MainPage";
import UploadPage from "./components/UploadPage";
import ProductPage from "./components/ProductPage";
import "./App.css";
import "antd/dist/antd.min.css";
import { UploadOutlined } from "@ant-design/icons";
import { Button } from "antd";

function App() {
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="images/icons/logo.png" alt="" />
          </Link>
          <Button
            size="large"
            shape="round"
            icon={<UploadOutlined />}
            onClick={() => navigate("/upload")}
          >
            UPLOAD
          </Button>
        </div>
      </div>
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
