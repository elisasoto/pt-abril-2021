import { NavLink } from "react-router-dom";
import "./index.css";

export default function Header() {
  return (
    <section className="header">
      <section className="title">
        <h2>Clock/StopWatch Project</h2>
      </section>
      <section className="links">
        <NavLink className="default" activeClassName="selected" to="/">
          Home
        </NavLink>
        <NavLink className="default" activeClassName="selected" to="/clock">
          Clock
        </NavLink>
        <NavLink className="default" activeClassName="selected" to="/crono">
          Stopwatch
        </NavLink>
      </section>
    </section>
  );
}
