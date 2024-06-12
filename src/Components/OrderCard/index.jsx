/* eslint-disable react/prop-types */

import { XMarkIcon } from '@heroicons/react/24/outline'

const OrderCard = ({item, handleDelete}) =>{

    let isDeleteSent

    if( handleDelete ) {
        isDeleteSent = <XMarkIcon 
        className='w-[20px] cursor-pointer '
        onClick={handleDelete} />
    } 

    return(

    <div className='flex justify-between p-2 items-center hover:bg-slate-300 hover:rounded-lg'>
       
        <span className='text-xs overflow-hidden w-[180px]'>{item.title}</span>
        <div className='text-xs w-[20px] flex flex-col items-center'>
            <span className='text-[.50rem]'>
                Amount
            </span>
            
            <span>
                {item.quantity}
            </span>
        </div>
        <span className='text-sm w-[80px] text-center'>${item.price * item.quantity}</span>
        {isDeleteSent}               
    </div>
    )
}

export default OrderCard