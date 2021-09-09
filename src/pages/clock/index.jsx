import { useEffect, useState } from "react";
import Clock from "components/watch";

export default function ClockPage({ enableClock, status }) {
  const [clock, setClock] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setClock({
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(interval); // OJO! si no limpieamos el intevalo, causa un error de "unmounted component can cause memory leaks"
  }, []);

  return (
    <section className={`${enableClock}-clock`}>
      {clock ? (
        <Clock clock={clock} status={status} />
      ) : (
        <p className="loading-message">Loading...</p>
      )}
    </section>
  );
}
