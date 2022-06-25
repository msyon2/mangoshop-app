import React, { ReactFragment } from "react";
import { Routes, Route } from "react-router-dom";
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
    </React.Fragment>
  );
}

export default App;
