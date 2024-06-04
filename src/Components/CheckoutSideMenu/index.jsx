import { useContext } from 'react'
import './Styles.css'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'

const CheckoutSideMenu = () =>{

    const context = useContext(ShoppingCartContext)

    const productList = context.cartProducts

    console.log(productList);
    console.log(totalPrice(context.cartProducts));

    return(
        <aside className={` ${context.cartOpen?"flex":"hidden"} checkout-side-menu flex-col fixed bg-white right-4 border border-black rounded-lg p-4 overflow-scroll` } >            
             <div className='flex justify-between items-center p-4 '>
                    <h2 className=' font-medium text-xl' >My Order</h2>
                   <XMarkIcon
                   className=' size-8 cursor-pointer'
                   onClick={()=>context.closeShoppingCart()} />
             </div>

             {
                productList.map((item, index) =>(

                    <OrderCard
                    key={index}
                    item={item}  />

                ))
             }

             <div
                className='cart-total flex fixed bottom-0 items-center justify-between font-bold bg-slate-400 z-0 px-4 my-4'>
                <span
                    className='w-[70%] text-start'>
                    Total:
                </span>

                <span
                    className='w-[30%] text-end'>
                    $0
                </span>
             </div>


             
        </aside>

    )
}



export default CheckoutSideMenu