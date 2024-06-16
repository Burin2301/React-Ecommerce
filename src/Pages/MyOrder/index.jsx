import { useContext } from "react"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"

function MyOrder(){

    const context = useContext(ShoppingCartContext)

    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/')+1)

    if(index === 'last') index = context.order?.length - 1

    return(
        <div>
            <Layout>
                <div>

                <div className="flex w-[150px] justify-between items-center mb-6">
                    <Link
                        to='/my-orders'>
                        <ChevronLeftIcon
                        className="size-8 cursor-pointer" />
                    </Link>
                    <h1>My Order</h1>
                </div>

                    <div className='overflow-y-auto flex flex-col '>
                        {
                            context.order <1 ? <h3>This looks empty</h3> :
                            context.order?.[index]?.products.map((item, index) =>(

                                <OrderCard
                                key={index}
                                item={item}  />

                            ))
                            
                        }



                    </div>

                </div>
                
            </Layout>
        </div>
    )
}

export default MyOrder 