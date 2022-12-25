import Progress from "./register/Progress";
import Step1 from "./register/Step1";
import Step2 from "./register/Step2";
import Step3 from "./register/Step3";
import ProgressControl from './register/ProgressControl'
import Cart from "./cart/Cart"

import style from './Main.module.scss'

import { useState } from 'react'

export default function Main() {
  const [step, setStep] = useState(1)

  return (
    <main className={style.siteMain}>
      <div className={style.mainContainer}>
        <h2 className={style.mainTitle}>結帳</h2>
        <div className={style.sectionWrapper}>
          <section className={style.registerSection}>
            <Progress step={step}/>
            {step === 1 ? <Step1 /> : step === 2 ? <Step2 /> : <Step3 />}
            <ProgressControl step={step} setStep={setStep}/>
          </section>
          <section className={style.cartSection}>
            <Cart />
          </section>
        </div>
      </div>
    </main>
  );
}