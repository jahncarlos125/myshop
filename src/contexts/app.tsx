import React, { createContext, FC, useContext, useEffect, useState } from "react";
import { Product, ProductCart } from "../interfaces";
import api from "../services/api";

interface AppContextData {
  products: Product[];
  cart: ProductCart[];
  addProductInCart: (product: Product) => void;
  removeProductInCart: (product: Product) => void;
  total: number;
  currencyFormat: (num: number) => string;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

const AppProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<ProductCart[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function loadData() {
      try {
        const { data } : { data: Product[] } = await api.get('product');
        setProducts(data);
      } catch (error) {
        throw new Error('No data found.')
      }
    }

    loadData();
  }, [])

  function addProductInCart(product: Product){
    const index = cart.findIndex((item) => item.id === product.id);

    if(index !== -1){
      const updatedCart = cart.map(item => {
        if(item.id === product.id){
          return {
            ...item,
            quantity: item.quantity + 1,
            stock: item.stock -1
          }
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart((oldState) => [...oldState, {
        ...product,
        quantity: 1,
        stock: product.stock -1
      }])
    }
  }

  useEffect(() => {
    if(cart.length > 0){
      let totalValue = 0;
      cart.forEach((item) => {
        const value = Number(item.price) * item.quantity;
        totalValue = totalValue + value;
      })

      setTotal(totalValue);
    }
  }, [cart])

  function removeProductInCart(product: Product){
    const index = cart.findIndex((item) => item.id === product.id);

    if(cart[index].quantity === 1){
      setCart(cart.filter((item) => item.id !== product.id))
    } else {
      const updatedCart = cart.map(item => {
        if(item.id === product.id){
          return {
            ...item,
            quantity: item.quantity - 1,
            stock: item.stock + 1
          }
        }
        return item;
      });
      setCart(updatedCart)
    }
  }

  function currencyFormat(num: number) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <AppContext.Provider value={{
      products,
      cart,
      addProductInCart,
      removeProductInCart,
      total,
      currencyFormat
    }}>
      { children }
    </AppContext.Provider>
  )
}

function useApp() {
  const context = useContext(AppContext);

  if(!context) {
    throw new Error('useApp must be used within an AppProvider.')
  }

  return context;
}

export { AppProvider, useApp };