import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { useContext } from "react"

import { ShoppingBagIcon } from "@heroicons/react/24/outline"


function Navbar () {

    const context = useContext(ShoppingCartContext)

    const  activeStyle = 'underline underline-offset-4'

    function toggleShoppingCart(){
        context.closeProductDetail()
        context.openShoppingCart()
    }

    function callCategory(category){
        context.setCategory(category)
    }

    return(
        <nav
        className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light bg-white" >
            <ul className="flex items-center z-10 gap-4">
                <li className="font-semibold text-lg">
                    <NavLink
                    to='/' >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/'
                    className={({isActive})=>isActive? activeStyle: undefined} >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/women-clothing'
                    className={({isActive})=>isActive? activeStyle: undefined}
                    onClick={()=>{
                        let text = "women's clothing"
                        text.replace(/'/g, '').replace(/\s+/g, '-');
                        callCategory(text)
                        
                    }} >
                        {`Women's Clothing`}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/men-clothing'
                    className={({isActive})=>isActive? activeStyle: undefined}
                    onClick={()=>callCategory("men's clothing")} >
                        {`Men's Clothing`}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/electronics'
                    className={({isActive})=>isActive? activeStyle: undefined}
                    onClick={()=>callCategory('electronics')} >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/jewelery'
                    className={({isActive})=>isActive? activeStyle: undefined}
                    onClick={()=>callCategory('jewelery')} >
                        Jewelery
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center z-10 gap-4">
                <li className="text-black/60">
                    email@mail.com
                </li>
                <li>
                    <NavLink
                    to='/my-orders'
                    className={({isActive})=>isActive? activeStyle: undefined} >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/my-account'
                    className={({isActive})=>isActive? activeStyle: undefined} >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/sign-in'
                    className={({isActive})=>isActive? activeStyle: undefined} >
                        Sign-In
                    </NavLink>
                </li>
                
                <li className="flex items-stretch">
                    <ShoppingBagIcon 
                        className="size-5"
                        onClickCapture={()=> toggleShoppingCart()} /> {context.count}
                </li>

            </ul>
        </nav>
    )
}

export default Navbar