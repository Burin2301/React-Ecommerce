import { useContext } from "react"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline"


function MyOrders(){

    const context = useContext(ShoppingCartContext)

    return(
        <div>
            <Layout >
                <div className="flex w-[150px] justify-between items-center">
                    <Link
                        to={'my-orders'}>
                        <ArrowUturnLeftIcon
                        className="size-8 cursor-pointer" />
                    </Link>
                    <h1>My Orders</h1>
                </div>

                {
                    context.order.map((order, index)=>{
                        <Link
                            to={`my-orders/${order.id}`}
                            key={index}>

                            <OrdersCard
                            totalPrice={order.totalOrder}
                            totalProducts={order.totalProducts}
                            />
                        </Link>

                    })
                }

            </Layout>
        </div>
    )
}

export default MyOrders 