export default function TimeList({ h, m, s, ms }) {
  return (
    <div className="time-container">
      <span>{`Record => `}</span>
      <span>{h < 10 ? `0${h}:` : `${h}: `} </span>
      <span>{m < 10 ? `0${m}:` : `${m}: `} </span>
      <span>{s < 10 ? `0${s}:` : `${s}: `} </span>
      <span>{ms < 10 ? `0${ms}` : `${ms}`} </span>
    </div>
  );
}
