import style from "./Step2.module.scss";

export default function Step2() {
  return (
    <section className={style.registerFormSection}>
      <h3 className="formTitle">運送方式</h3>
      <form className={style.formContainer}>
        <ShippingGroup
          id="shipping-standard"
          shippingText="標準運送"
          shippingPrice="免費"
          shippingPeriod="約 3~7 個工作天"
          defaultChecked="defaultChecked"
        />

        <ShippingGroup
          id="shipping-dhl"
          shippingText="DHL 貨運"
          shippingPrice="500"
          shippingPeriod="48 小時內送達"
        />
      </form>
    </section>
  )
}

function ShippingGroup({id, shippingText, shippingPrice, shippingPeriod, defaultChecked }) {
  return (
    <label className={`${style.shippingGroup} ${defaultChecked ? style.checked : null}`}>
      <input
        className={style.radioBox}
        id={id}
        type="radio"
        name="shipping"
        defaultChecked={id === "shipping-standard" ? defaultChecked : null}
      />
      <div className={style.shippingInfo}>
        <div className={style.infoWrap}>
          <div className={`${style.shippingText} ${id === "shipping-dhl" ? style.shippingRecommend : null}`}>
            {shippingText}
          </div>
          <div className={style.shippingPrice}>${shippingPrice}</div>
        </div>
        <div className={style.shippingPeriod}>{shippingPeriod}</div>
      </div>
    </label>
  )
}
