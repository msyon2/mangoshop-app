import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const MainPage = () => {
  let [products, setProducts] = useState([]);
  const url = "http://localhost:8080/products";
  //"https://9ee8e607-a58c-49d7-bc21-e1315bad24ab.mock.pstmn.io/products";

  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        products = result.data.product;
        setProducts(products);
      })
      .catch((error) => {
        console.log(`network error ${error}`);
      });
  }, []);

  return (
    <div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="" />
        </div>
        <h1>Products</h1>
        <div id="product-list">
          {products.map((product, idx) => {
            return (
              <Link className="product-link" to={`/products/${product.id}`}>
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
                    <div className="product-footer">
                      <div className="product-seller">
                        <img
                          src="images/icons/avatar.png"
                          alt={product.seller}
                          className="product-avatar"
                        />
                        <span>{product.seller}</span>
                      </div>
                      <span className="product-date">
                        {dayjs(product.createdAt).fromNow()}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MainPage;
