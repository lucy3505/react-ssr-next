import Home from "../components/Home";
import User from "../components/User";
import NotFount from "../components/NotFount";
const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/user",
    component: User,
  },
  {
    path: "",
    component: NotFount,
  },
];
export default routes;
