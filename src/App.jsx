import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./ui/Home.jsx";
import Menu from "./features/menu/Menu.jsx";
import Cart from "./features/cart/Cart.jsx";
import Order from "./features/order/Order.jsx";
// import OrderItem from "./features/order/OrderItem.jsx";
import CreateOrder from "./features/order/CreateOrder.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "menu",
    element: <Menu />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "order/:orderId",
    element: <Order />,
  },
  {
    path: "order/new",
    element: <CreateOrder />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;