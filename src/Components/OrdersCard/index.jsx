const OrdersCard = ( props ) =>{

    const {date, totalPrice, totalProducts } = props

    return(
        <div className=" flex justify-between items-center mb-3 border border-black">
            <p>
                <span> {date} </span>
                <span> {totalProducts} </span>
                <span> {totalPrice} items </span>
            </p>
        </div>
    )
}

export default OrdersCard