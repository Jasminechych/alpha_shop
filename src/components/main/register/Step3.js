import  { InputBox }  from './Step1.js'

import style from './Step3.module.scss'

export default function Step3 () {
  return (
    <section className={style.registerFormSection}>
      <h3 className="formTitle">付款資訊</h3>
      <form className={style.formContainer}>
          <InputBox
            className={`inputGroup ${style.cardName}`}
            id="card__name"
            label="持卡人姓名"
            type="text"
            placeholder="John Doe"
          />

          <InputBox
            className={`inputGroup ${style.cardNumber}`}
            id="card__number"
            label="卡號"
            type="text"
            placeholder="1111 2222 3333 4444"
          />

          <InputBox
            className={`inputGroup ${style.cardValid}`}
            id="card__valid"
            label="有效期限"
            type="text"
            placeholder="MM/YY"
          />

          <InputBox
            className={`inputGroup ${style.cardCvc}`}
            id="card__cvc"
            label="CVC / CCV"
            type="text"
            placeholder="123"
          />

      </form>
    </section>
  )
}