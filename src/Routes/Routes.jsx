import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CompletedTask from "../pages/CompletedTask";
import Layout from "../component/Layout";
import NotFound from "../pages/NotFound";
import { TodosProvider } from "../utils/Context";

const Routes = createBrowserRouter([
  {
    element: <TodosProvider />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/completed-tasks", element: <CompletedTask /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default Routes;
