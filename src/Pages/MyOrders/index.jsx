import { useContext } from "react"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"


function MyOrders(){

    const context = useContext(ShoppingCartContext)

    console.log(context.order);

    return(
        <div>
            <Layout >
                <div className="flex flex-col">

                    <div className="flex flex-col w-[150px] justify-between items-center">
                        
                        <h1>My Orders</h1>
                    </div>

                    {
                        context.order.map((order, index)=>(
                            <Link
                                to={`/my-orders/${index}`}
                                key={index}>

                                <OrdersCard
                                date={order.date}
                                totalPrice={order.totalOrder}
                                totalProducts={order.totalProducts}
                                />
                            </Link>
                        ))
                    }

                </div>
                

            </Layout>
        </div>
    )
}

export default MyOrders 