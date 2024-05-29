/* eslint-disable react/prop-types */

import { XMarkIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const OrderCard = ({item}) =>{

    const context = useContext(ShoppingCartContext)

    const productList = context.cartProducts

    const deleteItemfromCart = (index) =>{
        const newItems = [...productList]
        newItems.splice(index,1)
        context.setCartProducts(newItems)
    }

    console.log('CART', item);

    // STATE FOR COUNT OF AMOUNT OF ITEMS
    

    

    return(

    <div className='flex justify-between p-2 items-center hover:bg-slate-300 hover:rounded-lg'>
       
        <span className='text-xs overflow-hidden w-[180px]'>{item.title}</span>
        <div className='text-sm w-[20px] flex flex-col items-center'>
            <span className='text-[.50rem]'>
                Amount
            </span>
            
            <span>
                2
            </span>
        </div>
        <span className='text-sm w-[80px] text-center'>${item.price * 2}</span>
        <XMarkIcon 
            className=' w-[20px] cursor-pointer'
            onClick={()=>deleteItemfromCart()} />               
    </div>
    )
}

export default OrderCard