/* eslint-disable react/prop-types */

import { useContext,  } from "react"
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
        
         

        // 
        context.setCount(context.count +1)
        
        // context.setCartProducts([...context.cartProducts, productData]) //WORKING AS INTENDED
        
        context.setProductCount(context.productCount + 1)


        context.setCartProducts(()=>{
            const isProductInCart = context.cartProducts.some((item)=>item.id === productData.id)

            if( !isProductInCart ){
                const newCart = [...context.cartProducts, {...productData, quantity: 1}]
                console.log(newCart);
                return newCart
            } else {
                const updatedCart = context.cartProducts.map((item)=>{
                    if( item.id === productData.id){
                        return { ...item, quantity: item.quantity + 1}
                    }
                    return item
                })
                console.log(updatedCart);
                return updatedCart
            }
    
        })
    }

    return(
        <div 
        className="bg-white cursor-pointer w-56 h-[290px] overflow-hidden p-2 hover:bg-slate-300 hover:rounded-lg"
        onClick={ ()=>showData(data)}>

            <figure className="relative mb-4 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs p-1 m-1 bg-slate-300">
                    {data.category}
                </span>
                <img 
                className="w-full h-full object-cover rounded-lg"
                src={data.image} alt="" />
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-slate-300 w-6 h-6 rounded-full m-1 p-1 border"
                    onClick={(e)=>{
                        addProductsToCart(data)
                        e.stopPropagation()
                    }}>
                    <PlusIcon />
                </div>
            </figure>
            <p className="flex justify-between h-10">
                <span className="text-sm overflow-y-hidden w-[70%]">{data.title}</span>
                <span className="text-sm">${data.price}</span>
            </p>
        </div>
    )
}

export default Card