import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import "./MainPage.css";
import axios from "axios";
import { API_URL } from "../config/constants";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const MainPage = () => {
  let [products, setProducts] = useState([]);
  const [banners, setBanners] = useState([]);

  /* products 통신 */
  useEffect(() => {
    axios
      .get(`${API_URL}/products`)
      .then((result) => {
        products = result.data.product;
        setProducts(products);
      })
      .catch((error) => {
        console.log(`network error ${error}`);
      });

    /* banners 통신 */
    axios
      .get(`${API_URL}/banners`)
      .then((result) => {
        const banners = result.data.banners;
        setBanners(banners);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div id="body">
        <Carousel autoplay autoplaySpeed={3000}>
          {banners.map((banner, index) => {
            return (
              <Link to={banner.href} key={index}>
                <div id="banner">
                  <img src={`${API_URL}/${banner.imgUrl}`} />
                </div>
              </Link>
            );
          })}
        </Carousel>

        <h1 id="product-title">Products</h1>
        <div id="product-list">
          {products.map((product, idx) => {
            return (
              <Link className="product-link" to={`/products/${product.id}`}>
                <div className="product-card" key={idx}>
                  <div>
                    <img
                      className="product-img"
                      src={`${API_URL}/${product.imgUrl}`}
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
