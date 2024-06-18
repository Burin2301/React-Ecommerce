/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";


const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    //Get Items for Store
    const [items, setItems] = useState(null)



    // FETCH ALL DATA
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => setItems(data))
    },[])


    // FILTER ITEMS IN SEARCHBAR

        // SearchBar states
    const [searchedValue, setSearchedValue] = useState(null)

        // SearchBar Filteres
    const [filteredItems, setFilteredItems] = useState([])

    const filteredItemsByTitle = (items, searchedValue) =>{
        return items?.filter(item => item.title.toLowerCase().includes(searchedValue.toLowerCase()) )
    }

    useEffect(()=>{
        if(searchedValue) setFilteredItems( filteredItemsByTitle(items, searchedValue))
    }, [items, searchedValue])

    

    // FILTER FOR CATEGORY --- FROM THE BTONS ON HEADER

        // category status
    const [category, setCategory] = useState(null)

        // category filtered
    const [categorizedItems, setCategorizedItems] = useState([])

    const filteredByCategory = (items,category) => {
        return items?.filter(item => item.category.toLowerCase().includes(category.toLowerCase()))
    }

    useEffect(()=>{
        if(category) setCategorizedItems(filteredByCategory(items, category) )
    }, [items, category])




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

    // Shopping Cart => To Otder
    const [order, setOrder] = useState([])


    // To delete items from Cart
    const deleteItemfromCart = (index, productList) =>{
        const newItems = [...productList]
        newItems.splice(index,1)
        setCartProducts(newItems)
    }

 
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

            order,
            setOrder,

            deleteItemfromCart,

            items,
            setItems,

            searchedValue,
            setSearchedValue,

            filteredItems,

            setCategory,
            categorizedItems
        
        }} >
            {children}
        </ShoppingCartContext.Provider>

    )
}

export {
    ShoppingCartContext,
}