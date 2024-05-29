/* eslint-disable react/prop-types */

import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/ProductDetail"
import CheckoutSideMenu from "../../Components/CheckoutSideMenu"



function Home(){

    const [items, setItems] = useState(null)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
    },[])

    return(
        <div>
            <Layout >
                
                <div className="grid place-items-center gap-4 grid-cols-3 w-full max-w-screen-lg p-2">
                    {
                        items?.map((item)=>(
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