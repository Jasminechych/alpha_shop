import { createContext, useContext, useState } from 'react' 
import { CartContext } from './cart/CartContext'

export const FormContext = createContext()

export const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const {total} = useContext(CartContext)

  function handleChange (e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value || ''
    });
  }

  function handleSubmit (e) {
    e.preventDefault();
    console.log('formData: ', formData)
    console.log('toa: ', total)
  }

  return (
    <FormContext.Provider value={{ formData, handleChange, handleSubmit }}>
      {children}
    </FormContext.Provider>
  )
}