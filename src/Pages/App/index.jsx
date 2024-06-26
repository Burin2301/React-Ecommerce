import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import '../../App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'


const AppRoutes = () =>{
  let routes = useRoutes([
    {path:'/', element: <Home />},
    {path:'/electronics', element: <Home />},
    {path:'/jewelery', element: <Home />},
    {path:`/men-clothing`, element: <Home />},
    {path:`/women-clothing`, element: <Home />},


    {path:'/my-account', element: <MyAccount />},
    {path:'/my-order', element: <MyOrder />},
    {path:'/my-orders', element: <MyOrders />},
    {path:'/my-orders/last', element: <MyOrder />},
    {path:'/my-orders/:id', element: <MyOrder />},
    {path:'/*', element: <NotFound />},
    {path:'/sign-in', element: <SignIn />},
  ])

  return routes
}


function App() {



  return (
    <>
        <ShoppingCartProvider>
          <BrowserRouter>
            <AppRoutes />
            <Navbar />
          </BrowserRouter>
        </ShoppingCartProvider>
    </>
  )
}

export default App