import { useContext } from "react"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"

function MyOrder(){

    const context = useContext(ShoppingCartContext)

    console.log(context.order?.slice(-1)[0]);

    return(
        <div>
            <Layout>
                <div>

                    <h2>My Order</h2>

                    <div className='overflow-y-auto flex flex-col '>
                        {
                            context.order <1 ? <h3>This looks empty</h3> :
                            context.order?.slice(-1)[0].products.map((item, index) =>(

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