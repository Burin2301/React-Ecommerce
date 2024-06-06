import { useContext } from 'react'
import './Styles.css'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
// import { totalPrice } from '../../utils'

const CheckoutSideMenu = () =>{

    const context = useContext(ShoppingCartContext)

    const handleCheckout = () =>{
        const orderToAdd = {
            date:'01/01/2024',
            products: context.cartProducts,
            totalProducts: context.cartProducts.lenght,
            totalOrder: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0)

        console.log(context.order);
    }


    return(
        <aside className={` ${context.cartOpen?"flex":"hidden"} z-0 checkout-side-menu flex-col fixed bg-white right-4 border border-black rounded-lg p-4 gap-1` } >            
             <div className='flex justify-between items-center p-4 '>
                    <h2 className=' font-medium text-xl' >My Order</h2>
                   <XMarkIcon
                   className=' size-8 cursor-pointer'
                   onClick={()=>context.closeShoppingCart()} />
             </div>

             <div className='overflow-y-auto flex flex-col '>
             {
                context.cartProducts.lenght >1 ? <p>Try adding something to your cart!.</p> : 
                context.cartProducts.map((item, index) =>(

                    <OrderCard
                    key={index}
                    item={item}  />

                ))
             }



             </div>

             <div
                className='cart-total flex flex-col flex-wrap self-center border-t bottom-0 items-center justify-between font-bold bg-white z-0 px-4 my-4 '>

                <div className='flex justify-between w-full items-center'>
                    <span
                        className='w-[70%] text-start'>
                        Total:
                    </span>
                    <span
                        className='w-[30%] text-end'>
                        ${totalPrice(context.cartProducts)}
                    </span>
                </div>

            
                <button 
                className={`w-full bg-blue-500 text-white py-2 rounded-lg m-2  ${context.cartProducts.length < 1 ? 'opacity-50 cursor-not-allowed' : ''} `}
                onClick={()=>handleCheckout()} >
                    Checkout
                </button>
             </div>

             


             
        </aside>

    )
}



export default CheckoutSideMenu