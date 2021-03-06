import React, { createContext, useContext, useReducer } from 'react'
import faker from "faker";
import { cartReducer } from './Reducers';

const Cart = createContext ()

const Context = ({children}) => {
 
 const products = [...Array(12)].map(() => ({
     id: faker.datatype.uuid(),
     name: faker.commerce.productName(),
     price: faker.commerce.price(),
     image: faker.random.image(),
     ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
 }))
 
 const [state, dispatch] = useReducer(cartReducer, {
     products:products,
     cart: []
    });

    return (
    <Cart.Provider value={{state, dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState = () => {
    return useContext(Cart);
}