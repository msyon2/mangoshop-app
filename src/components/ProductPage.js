import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  let [product, setproduct] = useState(null);

  /* component executes only when update occurs */
  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then((result) => {
        setproduct(result.data.product);
      })
      .catch((error) => {
        console.error(`network error ${error}`);
      });
  }, []);
  if (product === null) {
    return <h1>상품정보를 받고 있습니다.</h1>;
  }
  return (
    <div id="body">
      <button onClick={() => Navigate(-1)}>back</button>
      <div id="image-box">
        <img src={`/${product.imgUrl}`} alt={product.name} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" alt={product.seller} />
        <span className="product-seller">{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="creatAt">2022.6.20</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
};
export default ProductPage;
