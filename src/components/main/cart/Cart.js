import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg'

import { useState } from 'react';

import style from "./Cart.module.scss"

const data = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 1,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

export default function Cart () {

  const [amount1, setAmount1] = useState(10)
  console.log(`頭的amount1: ${amount1}`)
  const [amount2, setAmount2] = useState(20)
  console.log(`頭的amount2: ${amount2}`)

  return (  
    <div className={style.cart}>
      <h3 className={style.cartTitle}>購物籃</h3>
      <ProductList data={data} amount1={setAmount1} amount2={setAmount2}/>
      <CartInfo text="運費" price="免費"/>
      <CartInfo text="小計" price="0"/>
    </div>
  )
}

function ProductList ({ data, amount1, amount2 }) {
  return (
    <section className={style.productSection}>
      {data.map(datum => 
      <Product 
        key={datum.id}
        id={datum.id}
        name={datum.name}
        img={datum.img}
        price={datum.price}
        quantity={datum.quantity}
        setAmount={datum.id === 1 ? amount1 : amount2}
      />)}
    </section>
  )
}

function Product ({ id, name, img, price, quantity, setAmount }) {
  const [count, setCount] = useState(quantity)

  function set () {
    if(id === 1) {
      setAmount(100)
    }
  }
  set ()


  function minus () {
    if (count === 0) return
    setCount(prev => prev - 1)
  }

  function plus () {
    setCount(prev => prev + 1)
  }

  return (
    <div key={id} id={id} className={style.productContainer}>
      <img className={style.productImage} src={img} alt="productImage"/>
      <div className={style.productWrap}>
        <div className={style.productInfo}>
          <div className={style.productName}>{name}</div>
          <div className={style.productPrice}>{price * count}</div>
        </div>
        <div className={style.productControlContainer}>
          <span className={style.productControlBtn}>
            <Minus onClick={minus} />
          </span>
          <span className={style.productCount}>{count}</span>
          <span className={style.productControlBtn}>
            <Plus onClick={plus} />
          </span>
        </div>
      </div>
    </div>
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