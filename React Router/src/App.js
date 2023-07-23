import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorHandler from "./pages/ErrorHandler";
import Products from "./pages/Products";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home />, errorElement: <ErrorHandler /> },
      {
        path: "/products",
        element: <Products />,
        errorElement: <ErrorHandler />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
