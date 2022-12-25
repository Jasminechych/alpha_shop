import { ReactComponent as Complete } from "../../icons/pg-complete.svg";
import style from "./Progress.module.scss";

export default function RegisterProgress({ step }) {
  return (
    <section>
      <div className={style.progressContainer}>
        <ProgressGroup
          stepNum="1"
          stepText="寄送地址"
          active={step >= 1}
          showActive={step <= 1}
        />
        <span className={step >= 1 ? style.progressDone : style.progressUnDone}></span>

        <ProgressGroup
          stepNum="2"
          stepText="運送方式"
          active={step >= 2}
          showActive={step <= 2}
        />
        <span className={step >= 2 ? style.progressDone : style.progressUnDone}></span>

        <ProgressGroup
          stepNum="3"
          stepText="付款資訊"
          active={step >= 3}
          showActive={step <= 3}
        />
      </div>
    </section>
  );
}

function ProgressGroup({ stepNum, stepText, active, showActive }) {
  return (
    <div className={style.progressGroup}>
      <div
        className={`${active ? style.currentCount : style.progressCount} ${showActive ? style.block : style.none}`}>
        {stepNum}
      </div>
      <Complete className={showActive ? style.none : style.block} />
      <div className={active ? style.currentText : style.progressText}>
        {stepText}
      </div>
    </div>
  );
}
