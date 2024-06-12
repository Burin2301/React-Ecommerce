/**
 * 
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number} Total Price 
 */

export function totalPrice(products){

    let sum = 0

    products.forEach(item=>{
        let subTotal = item.quantity * item.price

        sum += subTotal

    } )
    return sum.toFixed(2)
}



export const getDate = () =>{

    const today = new Date()

    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()

    const date = today.getDay() + '/' + ((today.getMonth()+1)) + '/' + today.getFullYear() 

    let fullDate = date + ' ' + time
    
    return  fullDate

} 