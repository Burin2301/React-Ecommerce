/**
 * 
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number} Total Price 
 */

export function totalPrice(products){

    let sum =0

    products.forEach(product => {
        let productTotal = product.price * product.quantity
        sum += productTotal
        return sum
    });
}
