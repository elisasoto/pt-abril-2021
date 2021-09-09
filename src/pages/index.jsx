import { useEffect, useState } from "react";
import Button from "components/button";
import CronoPage from "pages/crono";
import ClockPage from "pages/clock";
import Crono from "components/crono";

import "./index.css";

const buttonText = {
  start: "start",
  stop: "stop",
  split: "split",
  crono: "crono",
  watch: "clock",
  pause: "pause",
  clear: "clear",
};

export default function Base() {
  const [cronoTime, setCronoTime] = useState({ h: 0, m: 0, s: 0, ms: 0 });
  const [printTime, setPrintTime] = useState([]);
  const [interv, setInterv] = useState();
  const [clock, setClock] = useState();
  const [enableClock, setEnableClock] = useState("disable");
  const [enableCrono, setEnableCrono] = useState("disable");
  const [status, setStatus] = useState(0);
  // 0 => not running
  // 1 => start
  // 2 => pause
  // 3 => stop

  const start = () => {
    if (cronoTime.m === 60) {
      cronoTime.h++;
      cronoTime.m = 0;
    }
    if (cronoTime.s === 60) {
      cronoTime.m++;
      cronoTime.s = 0;
    }
    if (cronoTime.ms === 100) {
      cronoTime.s++;
      cronoTime.ms = 0;
    }
    cronoTime.ms++;
    return setCronoTime({
      ms: cronoTime.ms,
      s: cronoTime.s,
      m: cronoTime.m,
      h: cronoTime.h,
    });
  };

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock({
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
      });
    }, 1000);
  }, []);

  const handleClickStart = () => {
    start();
    setStatus(1);
    setInterv(setInterval(start, 100));
  };
  const handleClickStop = () => {
    clearInterval(interv);
    setStatus(3);
  };
  const handleClickPause = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const handleClickClear = () => {
    clearInterval(interv);
    setStatus(0);
    setCronoTime({ h: 0, m: 0, s: 0, ms: 0 });
    setPrintTime([]);
  };

  const handleClickSplit = () => {
    setPrintTime((prevtime) => [...prevtime, cronoTime]);
  };

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
      <CronoPage />
      <section className={`${enableCrono}-crono`}>
        <Crono
          text={buttonText}
          handleClickStart={handleClickStart}
          handleClickStop={handleClickStop}
          handleClickSplit={handleClickSplit}
          handleClickClear={handleClickClear}
          handleClickPause={handleClickPause}
          crono={cronoTime}
          printTime={printTime}
          status={status}
        />
      </section>
      <ClockPage enableClock={enableClock} clock={clock} status={status} />
    </section>
  );
}
