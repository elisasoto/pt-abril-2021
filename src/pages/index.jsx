import { useState } from "react";
import Button from "components/button";
import CronoPage from "pages/crono";
import ClockPage from "pages/clock";

import "./index.css";

const buttonText = {
  crono: "crono",
  watch: "clock",
};

export default function Base() {
  const [enableClock, setEnableClock] = useState("disable");
  const [enableCrono, setEnableCrono] = useState("disable");

  const handleClickClock = () => {
    setEnableClock("enable");
    setEnableCrono("disable");
  };
  const handleClickCrono = () => {
    setEnableCrono("enable");
    setEnableClock("disable");
  };

  return (
    <section className="main-container">
      <section className="clock-type">
        <Button text={buttonText.watch} handleClick={handleClickClock} />
        <Button text={buttonText.crono} handleClick={handleClickCrono} />
      </section>
      <CronoPage enableCrono={enableCrono} />
      <ClockPage enableClock={enableClock} />
    </section>
  );
}
