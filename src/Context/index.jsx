/* eslint-disable react/prop-types */

import { createContext, useState } from "react";


const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    // Counts the amount of items in shoppincart
    const [count, setCount] = useState(0)

    // Determines when the ProductDetail aside is open * functions to open/close aside
    const [isProductOpen, setIsProductOpen] = useState(false)

    const openProductDetail = ( ) => setIsProductOpen(true)
    const closeProductDetail = ( ) => setIsProductOpen(false)

    const [productData, setProductData] = useState({})

    // STATUS FOR SHOPPING CART PRODUCTS > what items are in the shopping cart

    const [cartProducts, setCartProducts] = useState([])


    // Determines when shopping cart is open * functions to open/close aside
    
    const [cartOpen, setCartOpen] = useState(false)

    const openShoppingCart = () => setCartOpen(true)
    const closeShoppingCart = () => setCartOpen(false) 

    // FOR PRODUCT COUNTER IN SHOPPING CART
    const [productCount, setProductCount] = useState(0)

 
    return(
        <ShoppingCartContext.Provider
        
        value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductOpen,

            productData,
            setProductData,

            cartProducts,
            setCartProducts, 

            cartOpen,
            openShoppingCart,
            closeShoppingCart,

            productCount,
            setProductCount,
        
        }} >
            {children}
        </ShoppingCartContext.Provider>

    )
}

export {
    ShoppingCartContext,
}