import { useState } from "react";
import Button from "components/button";
import CronoPage from "pages/cronoPage";
import ClockPage from "pages/clockPage";
import TestPage from "pages/Test";

import "./index.css";

const buttonText = {
  crono: "crono",
  watch: "clock",
  start: "start",
  stop: "stop",
  split: "split",
  pause: "pause",
  clear: "clear",
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
      <CronoPage enableCrono={enableCrono} text={buttonText} />
      <ClockPage enableClock={enableClock} />
      <TestPage text={buttonText} />
    </section>
  );
}
