import Home from "pages/home";
import Clock from "pages/clock";
import Crono from "pages/crono";

export default [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/clock",
    component: Clock,
    exact: true,
  },
  {
    path: "/crono",
    component: Crono,
    exact: true,
  },
];
