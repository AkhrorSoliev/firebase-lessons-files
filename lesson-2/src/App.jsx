// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
