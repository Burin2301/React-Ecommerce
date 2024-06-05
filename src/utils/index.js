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



