import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../Actions/productsActions";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    image: "https://source.unsplash.com/random",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateProduct = () => {
    if (
      !newProduct.title ||
      !newProduct.description ||
      !newProduct.category ||
      newProduct.price <= 0
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }


    dispatch(createProduct(newProduct));

    setNewProduct({
      title: "",
      description: "",
      category: "",
      price: 0,
      image: "https://source.unsplash.com/random",
    });
    setSuccessMessage("Product created successfully!");
    setErrorMessage("");
  };

  return (
    <div>
      <h2>Create New Product</h2>
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <div className="mb-2">
        <label>Title:</label>
        <input
          type="text"
          className="form-control "
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
        />
      </div>
      <div className="mb-2">
        <label>Description:</label>
        <textarea
          value={newProduct.description}
          className="form-control "
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        ></textarea>
      </div>
      <div className="mb-2">
        <label>Category:</label>
        <input
          type="text"
          className="form-control "
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
        />
      </div>
      <div className="mb-2">
        <label>Price:</label>
        <input
          type="number"
          className="form-control "
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              price: parseFloat(e.target.value) || 0,
            })
          }
        />
      </div>
      <div className="mb-2">
        <label>Image URL:</label>
        <input
          type="text"
          className="form-control "
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        />
      </div>
      <button onClick={handleCreateProduct} className="btn btn-dark ">
        Create Product
      </button>
    </div>
  );
};

export default CreateProduct;
