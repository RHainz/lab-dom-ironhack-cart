const quantity = product.querySelector('.quantity input')
const priceProd = price.innerText
const quantProd = quantity.valueAsNumber
const subtotalPrice = priceProd * quantProd
product.querySelector('.subtotal span').innerText = subtotalPrice
return subtotalPrice

