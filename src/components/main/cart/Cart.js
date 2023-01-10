import { useContext } from 'react'
import { CartContext } from './CartContext.js'

import { ReactComponent as Minus } from '../../icons/minus.svg'
import { ReactComponent as Plus } from '../../icons/plus.svg'

import style from "./Cart.module.scss"

export default function Cart () {
  const {total, shippingFee} = useContext(CartContext)

  return (
      <div className={style.cart}>
        <h3 className={style.cartTitle}>購物籃</h3>
        <ProductList />
        <CartInfo text="運費" price={shippingFee === 0 ? "免費" : shippingFee}/>
        <CartInfo text="小計" price={total}/>
      </div>
  )
}

function ProductList () {

  const {currentData, setCurrentData} = useContext(CartContext)

  function handleOnClicked (id, plusOrMinus) {      
    setCurrentData(currentData.map(data => {
      if(id === data.id && plusOrMinus === "plus") {
        return {
          ...data,
          quantity: data.quantity + 1
        }
      } else if (id === data.id && plusOrMinus === "minus" && data.quantity > 0) {
        return {
          ...data,
          quantity: data.quantity - 1
        }
      } else {
        return data
      }
    }))
  }

  const productList = currentData.map(datum => 
    <div key={datum.id} id={datum.id} className={style.productContainer}>
      <img className={style.productImage} src={datum.img} alt="productImage"/>
      <div className={style.productWrap}>
        <div className={style.productInfo}>
          <div className={style.productName}>{datum.name}</div>
          <div className={style.productPrice}>{datum.price * datum.quantity}</div>
        </div>
        <div className={style.productControlContainer}>
          <span className={style.productControlBtn}>
            <Minus onClick={() => handleOnClicked(datum.id, "minus")} />
          </span>
          <span className={style.productCount}>{datum.quantity}</span>
          <span className={style.productControlBtn}>
            <Plus onClick={() => handleOnClicked(datum.id, "plus")} />
          </span>
        </div>
      </div>
    </div>
  )

  return (
    <section className={style.productSection}>
      {productList}
    </section>
  )
}

function CartInfo ({ text, price }) {
  return (
    <section className={style.cartInfo}>
      <div className={style.cartInfoText}>{text}</div>
      <div className={style.cartInfoPrice}>{price}</div>
    </section>
  )
}
