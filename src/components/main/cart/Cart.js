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

  // 先設假初始值測試用
  // amount1 綁定 id 1
  // amount2 綁定 id 2
  const [amount1, setAmount1] = useState(100)
  const [amount2, setAmount2] = useState(200)
  const [total, setTotal] = useState(amount1 + amount2)

  console.log('父amount1： ', amount1)
  console.log('父amount2： ', amount2)
  console.log('父total： ',total)


  return (  
    <div className={style.cart}>
      <h3 className={style.cartTitle}>購物籃</h3>
      <ProductList 
        data={data}
        setAmount1={setAmount1}
        setAmount2={setAmount2}
        amount1={amount1}
        amount2={amount2}
        setTotal={setTotal}
        />
      <CartInfo text="運費" price="免費"/>
      <CartInfo text="小計" price={total}/>
    </div>
  )
}

function ProductList ({ data, setAmount1, setAmount2, amount1, amount2, setTotal }) {
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
        setAmount1={setAmount1}
        setAmount2={setAmount2}
        amount1={amount1}
        amount2={amount2}
        setTotal={setTotal}
      />)}
    </section>
  )
}

function Product ({ id, name, img, price, quantity, setAmount1, setAmount2, amount1, amount2, setTotal }) {
  const [count, setCount] = useState(quantity)

  // 渲染初始資料
  // data.map(datum => {
  //   console.log(datum.id, datum.price, datum.quantity)
  //   if (datum.id === "1") {
  //     return setAmount1(datum.price * datum.quantity) + setTotal(amount1 + amount2)
  //   } 
    
  //   if (datum.id === "2") {
  //     return setAmount2(datum.price * datum.quantity) + setTotal(amount1 + amount2)
  //   }
  // })

  // set 小計跟加總
  function set (id, price, content) { 
    console.log(`id: ${id} click ${content} price: ${price}`)
      
    if (id === "1" && content === "plus") {
      return setAmount1(amount1 + price) + setTotal(amount1 + price + amount2)
    } 
    if (id === "1" && content === "minus") {
      if (count === 0 || amount1 === 0) return
      return setAmount1(amount1 - price) + setTotal(amount1 - price + amount2)
    }

    if (id === "2" && content === "plus") {
      return setAmount2(amount2 + price) + setTotal(amount2 + price + amount1)
    } 
    if (id === "2" && content === "minus") {
      if (count === 0 || amount2 === 0) return
      return setAmount2(amount2 - price) + setTotal(amount2 - price + amount1)
    } 
  }

  function handleOnClicked (productId, price, content) {      
      if (content === "plus") {
        setCount(prev => prev + 1)
        set(productId, price, "plus")
        
      } else if (content === "minus" && count > 0 ) {
        setCount(prev => prev - 1)
        set(productId, price, "minus")
      }  
  }

  return (
    <div key={id} id={id} className={style.productContainer}>
      <img className={style.productImage} src={img} alt="productImage"/>
      <div className={style.productWrap}>
        <div className={style.productInfo}>
          <div className={style.productName}>{name}</div>
                                                  {/* 這邊資料應該要連動 */}
          <div className={style.productPrice}>{price * count}</div>
        </div>
        <div className={style.productControlContainer}>
          <span className={style.productControlBtn}>
            <Minus onClick={() => handleOnClicked(id, price, "minus")} />
          </span>
          <span className={style.productCount}>{count}</span>
          <span className={style.productControlBtn}>
            <Plus onClick={() => handleOnClicked(id, price, "plus")} />
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
