import axios from "axios";
import React, { createContext, FC, useContext, useEffect, useState } from "react";
import { Product } from "../interfaces";
import api from "../services/api";

interface AppContextData {
  products: Product[];
  cart: Product[];
}

const AppContext = createContext<AppContextData>({} as AppContextData);

const AppProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

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

  return (
    <AppContext.Provider value={{products: products, cart: []}}>
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