/* eslint-disable react/prop-types */

import { useContext, useState } from "react"
import { ShoppingCartContext } from "../../Context/index"
import { PlusIcon } from "@heroicons/react/24/outline"

function Card ({data}){

    const context = useContext(ShoppingCartContext)

    function showData (productData) {
        context.closeShoppingCart()
        context.openProductDetail()
        context.setProductData(productData)
    }

    function addProductsToCart(productData) {
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        console.log(context.cartProducts);
    }

    return(
        <div 
        className="bg-white cursor-pointer w-56 h-60"
        onClick={ ()=>showData(data)}>

            <figure className="relative mb-4 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs p-1 m-1">
                    {data.category}
                </span>
                <img 
                className="w-full h-full object-cover rounded-lg"
                src={data.image} alt="" />
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-1 p-1 border"
                    onClick={(e)=>{
                        addProductsToCart(data)
                        e.stopPropagation()
                    }}>
                    <PlusIcon />
                </div>
            </figure>
            <p className="flex justify-between">
                <span>{data.title}</span>
                <span>{data.price}</span>
            </p>
        </div>
    )
}

export default Card