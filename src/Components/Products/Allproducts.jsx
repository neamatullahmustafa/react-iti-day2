import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProducts,
  deleteProduct,
} from "../../Actions/productsActions";
import { addToCart, incrementCartCount } from "../../Actions/cartActions";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(products)) {
    return <div>No products available</div>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(incrementCartCount());
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(productId));
    }
  };

  return (
    <div>
      <h2 className="mb-3">All Products</h2>
      <div className="row">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-4 d-flex justify-content-center"
          >
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt="Product Img"
                width={300}
                height={300}
              />
              <div className="card-body">
                <h5 >{product.title}</h5>
                <div>
                  <span>Category:  {product.category} </span>

                </div>
                  <p>Price:{product.price} </p>
                <div>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-dark w-100"
                  >
                    Details
                  </Link>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="btn btn-dark w-100"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn btn-dark w-100"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
