import "./index.css";

export default function Clock({ clock, status }) {
  return (
    <section className="clock-container">
      {status === 1 ? (
        <p className="crono-alert">Crono is still running...</p>
      ) : (
        ""
      )}
      <div className="clock-display">
        <span>{clock.h < 10 ? `0${clock.h}:` : `${clock.h}: `} </span>
        <span>{clock.m < 10 ? `0${clock.m}:` : `${clock.m}: `} </span>
        <span>{clock.s < 10 ? `0${clock.s}` : `${clock.s} `} </span>
      </div>
    </section>
  );
}
