import { Link } from "react-router-dom";
import data from "../data/data";


function Homepage() {
    return(
  <>
    <h1>Featured product</h1>
    <div className="products">
      {data.product.map((item) => (
        <div className="product" key={item.slug}>
          <Link to={`/product/${item.slug}`}>
            <img src={item.image} alt={item.name} height={494} />
          </Link>

          <div className="product-info">
            <Link to={`/product/${item.slug}`}>
              <p>{item.name}</p>
            </Link>
            <p>
              <strong>${item.price}</strong>
            </p>
            <button>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  </>);
}
export default Homepage;
