import { ReactComponent as RightArrow } from "../../icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../icons/left-arrow.svg";

import style from "./ProgressControl.module.scss";

export default function ProgressControl({ step, setStep }) {
  function prevStep() {
    if (step === 1) return;
    setStep((prev) => prev - 1);
  }

  function nextStep() {
    if (step === 3) return;
    setStep((prev) => prev + 1);
  }

  return (
    <section className={style.progressControl}>
      <div className={style.buttonGroup}>
        <button
          className={`${style.button} ${style.buttonPrev}`}
          onClick={prevStep}
          style={{ visibility: step !== 1 ? "visible" : "hidden" }}
        >
          <LeftArrow />
          <p>上一步</p>
        </button>
        <button
          className={`${style.button} ${style.buttonNext}`}
          onClick={nextStep}
        >
          <p>{step !== 3 ? "下一步" : "確認下單"}</p>
          <RightArrow className={step === 3 ? style.none : style.block} />
        </button>
      </div>
    </section>
  );
}
