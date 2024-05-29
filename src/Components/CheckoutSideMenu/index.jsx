import { useContext } from 'react'
import './Styles.css'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'

const CheckoutSideMenu = () =>{

const context = useContext(ShoppingCartContext)

const productList = context.cartProducts

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


             
        </aside>

    )
}



export default CheckoutSideMenu