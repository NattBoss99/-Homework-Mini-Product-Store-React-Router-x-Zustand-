import { useLoaderData, Link } from "react-router-dom";

const ProductList = () => {
  const products = useLoaderData();

  console.log("PRODUCTS:", products); // 👈 debug

  if (!products) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Product List</h1>

      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.price} $</p>

          <Link to={`/product/${item.id}`}>
            View Detail
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;