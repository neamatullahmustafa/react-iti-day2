import "./App.css";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import AllProducts from "./Components/Products/Allproducts";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Singleproduct from "./Components/Products/Singleproduct";
import CreateProduct from "./Components/Products/CreateProduct"

function App() {
  let routers = createBrowserRouter([{
    path: "/",
    element: < Layout / > ,
    children: [{
        index: true,
        element: < AllProducts / >
      },
      {
        path: "/products/:id",
        element: < Singleproduct / >
      },
      {
        path: "/products/create",
        element: < CreateProduct / >
      },
    ],
  }, ]);

  return ( <
    >
    <
    RouterProvider router = {
      routers
    } > < /RouterProvider> <
    />
  );
}

export default App;