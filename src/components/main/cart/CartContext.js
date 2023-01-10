import { createContext, useState } from 'react'

const data = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

export const CartContext = createContext(data)

export const CartContextProvider = ({ children }) => {
  const [currentData, setCurrentData] = useState(data)
  const [shippingFee, setShippingFee] = useState(0)

  function handleOnClick(id) {
    if (id === "shipping-dhl") {
      setShippingFee(500)
    } else {
      setShippingFee(0)
    }
  }
  
  let total = 0 + shippingFee
  currentData.map(data => total = total + data.price * data.quantity)

  return (
    <CartContext.Provider value={{currentData, setCurrentData, total, shippingFee, handleOnClick}}>
      {children}
    </CartContext.Provider>
  )
}


