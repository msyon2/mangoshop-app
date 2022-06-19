import React, { useState, useEffect } from "react";
import "./MainPage.css";
import axios from "axios";

const MainPage = () => {
  let [products, setProducts] = useState([]);
  const url =
    "https://9ee8e607-a58c-49d7-bc21-e1315bad24ab.mock.pstmn.io/products";

  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        products = result.data.products;
        setProducts(products);
      })
      .catch((error) => {
        console.log(`network error ${error}`);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="" />
        </div>
        <h1>Products</h1>
        <div id="product-list">
          {products.map((product, idx) => {
            return (
              <div className="product-card" key={idx}>
                <div>
                  <img
                    className="product-img"
                    src={product.imgUrl}
                    alt={product.name}
                  />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img
                      src="images/icons/avatar.png"
                      alt=""
                      className="product-avatar"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer">
        <a href="#">회사소개</a>
        <a href="#">이용약관</a>
        <a href="#">통신판매업:123-1234</a>
        <a href="#">사업자등록번호:456-56-78951</a>
      </div>
    </div>
  );
};
export default MainPage;
