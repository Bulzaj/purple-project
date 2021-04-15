import Home from "./pages/home/Home";
import Test from "./pages/test/Test";

const routes = [
  { path: "/", page: <Home /> },
  { path: "/test", page: <Test /> },
];

const getRoutes = () => routes;

export default getRoutes;
