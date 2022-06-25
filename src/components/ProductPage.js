import { useParams, useNavigate } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  return (
    <div>
      <button onClick={() => Navigate(-1)}>back</button>
      <h1>{id}번째 상품페이지</h1>
      <p>{id}번째 상품페이지 입니다</p>
    </div>
  );
};
export default ProductPage;
