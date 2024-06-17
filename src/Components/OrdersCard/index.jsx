/* eslint-disable react/prop-types */

import { CalendarIcon } from "@heroicons/react/16/solid"
import { ShoppingBagIcon } from "@heroicons/react/16/solid"
import { ChevronRightIcon } from "@heroicons/react/16/solid"

const OrdersCard = ( props ) =>{

    const {date, totalPrice, totalProducts } = props

    return(
        <div className=" flex justify-between items-center m-3 border border-black rounded-lg p-4 w-[300px]">
            <div className="w-full flex justify-between items-center">
                <div className="flex flex-col">

                    <span className="flex flex-row items-center gap-2">
                        <CalendarIcon className="size-4" /> 

                        <span>{date}</span>
                    </span>

                    <span className="flex flex-row items-center gap-2">
                        <ShoppingBagIcon className="size-4" />
                        <span>{totalProducts} items</span>    
                    </span>
                </div>

                <span className="font-bold text-2xl flex items-center gap-2">
                    ${totalPrice}
                    <ChevronRightIcon className="size-6" />
                </span>

            </div>
        </div>
    )
}

export default OrdersCard

