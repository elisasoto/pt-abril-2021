import HomePage from "pages";
import ClockPage from "pages/clockPage";
import CronoPage from "pages/cronoPage";

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
