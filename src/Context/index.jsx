/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";


const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    //Get Items for Store
    const [items, setItems] = useState(null)

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


    // FETCH ALL DATA
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => setItems(data))
    },[])

// --------------------------------------------------------------------------------------------------------------

    

    // SearchBar states
    const [searchedValue, setSearchedValue] = useState(null)

    // SearchBar Filters
    const [filteredItems, setFilteredItems] = useState([])

    const filteredItemsByTitle = (items, searchedValue) =>{
        const searchedText = items?.filter(item => {
            const titleText = item.title.toLowerCase()
            const searchedValueText = searchedValue.toLowerCase()

            const textFiltered = titleText.includes(searchedValueText) 

            return textFiltered
        })
        return searchedText
    }




    // category status
    const [searchedCategory, setSearchedCategory] = useState(null)

    // category filtered
    const filteredByCategory = (items,searchedCategory) => {

        const categorySearchedText = items?.filter(item => {
            const categoryText = item.category.toLowerCase()
            const searchedCategoryText = searchedCategory.toLowerCase()

            const categoryFiltered = categoryText.includes(searchedCategoryText)

            return categoryFiltered
        })

        
        return categorySearchedText
    }

    const filterBy = (searchType, items, searchedValue, searchedCategory) =>{
        if(searchType=="BY_TITLE"){
            return filteredItemsByTitle(items, searchedValue)
        }

        if(searchType=="BY_CATEGORY"){
            return filteredByCategory(items, searchedCategory)
        }
        
        if(searchType=="BY_TITLE_AND_CATEGORY") {
            return filteredByCategory(items, searchedCategory).filter(item => item.title.toLowerCase().includes(searchedValue.toLowerCase()))
        }

        if(!searchType) return items

    }


    useEffect(()=>{
        if( searchedValue && searchedCategory ) setFilteredItems( filterBy("BY_TITLE_AND_CATEGORY", items, searchedValue, searchedCategory))
        if( searchedValue && !searchedCategory ) setFilteredItems( filterBy("BY_TITLE", items, searchedValue, searchedCategory))
        if( !searchedValue && searchedCategory ) setFilteredItems( filterBy("BY_CATEGORY", items, searchedValue, searchedCategory))
        if( !searchedValue && !searchedCategory ) setFilteredItems( filterBy("BY_TITLE_AND_CATEGORY", items, searchedValue, searchedCategory))
    }, [items, searchedValue, searchedCategory])
 
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

            setSearchedCategory,
        
        }} >
            {children}
        </ShoppingCartContext.Provider>

    )
}

export {
    ShoppingCartContext,
}