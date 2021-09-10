import { useState } from "react";

import Crono from "components/crono";

export default function CronoPage({ enableCrono }) {
  const [cronoTime, setCronoTime] = useState({ h: 0, m: 0, s: 0, ms: 0 });
  const [printTime, setPrintTime] = useState([]);
  const [interv, setInterv] = useState();
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

  const handleClickStart = () => {
    start();
    setStatus(1);
    setInterv(setInterval(start, 10));
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
    setPrintTime((prevtime) => [...prevtime, { ...cronoTime }]);
    // Recuerda! [...prevTime] nos asegura que lo que habia antes en el array no se borra con la nueva actualizacion. {...cronoTime} guarda una copia del objeto. Si ponemos solo el cronoTime este es el mismo objeto que se va acutalizando constantemente.
  };

  return (
    <section className={`${enableCrono}-crono`}>
      {cronoTime ? (
        <Crono
          handleClickStart={handleClickStart}
          handleClickStop={handleClickStop}
          handleClickSplit={handleClickSplit}
          handleClickClear={handleClickClear}
          handleClickPause={handleClickPause}
          crono={cronoTime}
          printTime={printTime}
          status={status}
        />
      ) : (
        <p className="loading-message">Loading...</p>
      )}
    </section>
  );
}
