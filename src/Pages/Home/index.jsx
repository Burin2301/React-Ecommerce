/* eslint-disable react/prop-types */

import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/ProductDetail"
import CheckoutSideMenu from "../../Components/CheckoutSideMenu"
import { ShoppingCartContext } from "../../Context"
import { useContext } from "react"



function Home(){

   const context = useContext(ShoppingCartContext) 

   const renderView = () =>{
    if (context.searchedValue?.length > 0 ){

        if(context.filteredItems?.length > 0 ){
            return(
                context.filteredItems?.map((item)=>(
                    <Card
                    key={item.id}
                    data={item} />
                ))
            )
        }
        
    } else {
        return(
            context.items?.map((item)=>(
                <Card
                key={item.id}
                data={item} />
    
            ))
        )
    }
   }

    return(
        <div>
            <Layout >

                <div className="mb-4" >
                    <input 
                        type="text" 
                        placeholder="Search for a product"
                        className="rounded-lg border border-black w-[300px] text-center p-1 focus:outline-none"
                        onChange={ (e)=> context.setSearchedValue(e.target.value) } />
                </div>                
                <div className="grid place-items-center gap-4 grid-cols-3 w-full max-w-screen-lg p-2">
                    {
                        renderView()
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