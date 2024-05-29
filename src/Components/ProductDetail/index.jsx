import { useContext } from 'react'
import './Styles.css'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = ( ) =>{

    const context = useContext(ShoppingCartContext)

    return(

        <aside className={` ${context.isProductOpen?"flex":"hidden"} product-detail flex-col fixed bg-white right-4 border border-black rounded-lg p-4 overflow-scroll` } >            
             <div className='flex justify-between items-center p-4 '>
                    <h2 className=' font-medium text-xl' >Detail</h2>
                   <XMarkIcon
                   className=' size-8 cursor-pointer'
                   onClick={()=>context.closeProductDetail()} />
             </div>

             <figure>
                <img 
                src={context.productData.image} 
                alt=""
                className='w-full h-full' />
             </figure>
             <p className='flex justify-between p-2'>
               <span className='text-xl'>{context.productData.title}</span>
                <span className='text-xl'>${context.productData.price}</span>
             </p>
             <p className='capitalize text-xs'>{context.productData.description}</p>
        </aside>
    )
}


export default ProductDetail