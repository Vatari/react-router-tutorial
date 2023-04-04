import { Link, useParams } from "react-router-dom";
import products from "../data";
const SingleProduct = () => {
  const productId = useParams();
  const currentProduct = products.find((p) => p.id === productId);
  const { image, name } = currentProduct;
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products">Back to products</Link>
    </section>
  );
};

export default SingleProduct;
