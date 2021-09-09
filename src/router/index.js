import HomePage from "pages";
import ClockPage from "pages/clock";
import CronoPage from "pages/crono";

export default [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/clock",
    component: ClockPage,
    exact: true,
  },
  {
    path: "/crono",
    component: CronoPage,
    exact: true,
  },
];
