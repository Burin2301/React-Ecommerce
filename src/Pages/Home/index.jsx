/* eslint-disable react/prop-types */

import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/ProductDetail"
import CheckoutSideMenu from "../../Components/CheckoutSideMenu"
import { ShoppingCartContext } from "../../Context"
import { useContext } from "react"



function Home(){

   const context = useContext(ShoppingCartContext) 

    return(
        <div>
            <Layout >
                
                <div className="grid place-items-center gap-4 grid-cols-3 w-full max-w-screen-lg p-2">
                    {
                        context.items?.map((item)=>(
                            <Card
                            key={item.id}
                            data={item} />

                        ))
                    }
                </div>
                <ProductDetail />
                <CheckoutSideMenu />
            </Layout>

        </div>
    )
}

export default Home 


/* eslint-disable react/prop-types */