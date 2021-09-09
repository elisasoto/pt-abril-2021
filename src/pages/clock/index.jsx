import Clock from "components/watch";

export default function ClockPage({ enableClock, clock, status }) {
  return (
    <section className={`${enableClock}-crono`}>
      {clock ? (
        <Clock clock={clock} status={status} />
      ) : (
        <p className="loading-message">Loading...</p>
      )}
    </section>
  );
}
