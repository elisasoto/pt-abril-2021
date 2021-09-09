import Crono from "components/crono";
export default function Home({
  text,
  handleClickStart,
  handleClickStop,
  handleClickSplit,
  handleClickClear,
  handleClickPause,
  crono,
  printTime,
  status,
  enableCrono,
}) {
  return (
    <section className={`${enableCrono}-crono`}>
      <Crono
        text={text}
        handleClickStart={handleClickStart}
        handleClickStop={handleClickStop}
        handleClickSplit={handleClickSplit}
        handleClickClear={handleClickClear}
        handleClickPause={handleClickPause}
        crono={crono}
        printTime={printTime}
        status={status}
      />
    </section>
  );
}
