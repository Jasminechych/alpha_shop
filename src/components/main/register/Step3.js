import { useContext } from 'react'
import { FormContext } from '../FormContext.js'
import { InputBox } from './Step1.js'

import style from './Step3.module.scss'

export default function Step3 () {
  const {formData, handleChange, handleSubmit} = useContext(FormContext)

  return (
    <section className={style.registerFormSection}>
      <h3 className="formTitle">付款資訊</h3>
      <form className={style.formContainer} onSubmit={handleSubmit}>
          <InputBox
            className={`inputGroup ${style.cardName}`}
            id="cardName"
            name="cardName"
            label="持卡人姓名"
            type="text"
            placeholder="John Doe"
            value={formData.cardName}
            onChange={handleChange}
          />

          <InputBox
            className={`inputGroup ${style.cardNumber}`}
            id="cardNumber"
            name="cardNumber"
            label="卡號"
            type="text"
            placeholder="1111 2222 3333 4444"
            value={formData.cardNumber}
            onChange={handleChange}
          />

          <InputBox
            className={`inputGroup ${style.cardValid}`}
            id="cardValid"
            name="cardValid"
            label="有效期限"
            type="text"
            placeholder="MM/YY"
            value={formData.cardValid}
            onChange={handleChange}
          />

          <InputBox
            className={`inputGroup ${style.cardCvc}`}
            id="cardCvc"
            name="cardCvc"
            label="CVC / CCV"
            type="text"
            placeholder="123"
            value={formData.cardCvc}
            onChange={handleChange}
          />
      </form>
    </section>
  )
}