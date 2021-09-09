import Button from "components/button";
import TimeList from "components/timelist";
import "./index.css";

const actionButtons = {
  start: "start",
  stop: "stop",
  split: "split",

  pause: "pause",
  clear: "clear",
};

export default function Crono({
  handleClickStart,
  handleClickPause,
  handleClickStop,
  handleClickSplit,
  handleClickClear,
  printTime,
  status,
  crono,
}) {
  return (
    <section className="crono-container">
      <section className="crono-display">
        <span>{crono.h < 10 ? `0${crono.h}:` : `${crono.h}: `} </span>
        <span>{crono.m < 10 ? `0${crono.m}:` : `${crono.m}: `} </span>
        <span>{crono.s < 10 ? `0${crono.s}:` : `${crono.s}: `} </span>
        <span>{crono.ms < 10 ? `0${crono.ms}` : `${crono.ms}`} </span>
      </section>
      {status === 0 || status === 2 ? (
        <section className={"control-buttons"}>
          <Button text={actionButtons.split} handleClick={handleClickSplit} />
          <Button text={actionButtons.start} handleClick={handleClickStart} />
          <Button text={actionButtons.stop} handleClick={handleClickStop} />
        </section>
      ) : (
        ""
      )}
      {status === 1 ? (
        <section className={"control-buttons"}>
          <Button text={actionButtons.split} handleClick={handleClickSplit} />
          <Button text={actionButtons.pause} handleClick={handleClickPause} />
          <Button text={actionButtons.stop} handleClick={handleClickStop} />
        </section>
      ) : (
        ""
      )}
      {status === 3 ? (
        <section className={"control-buttons"}>
          <Button text={actionButtons.clear} handleClick={handleClickClear} />
        </section>
      ) : (
        ""
      )}

      <section className="timelist">
        {printTime.length > 0
          ? printTime.map((card, index) => <TimeList key={index} {...card} />)
          : ""}
      </section>
    </section>
  );
}
