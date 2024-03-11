import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cartCount);

  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary fixed-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link "
                aria-current="page"
                to="/products/create"
              >
                Create Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Products
              </Link>
            </li>
          </ul>
          <div className="ms-auto">
            <div>
              <button className="p-0 border-0 ">
              cart
                <span className="text-white bg-black">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
