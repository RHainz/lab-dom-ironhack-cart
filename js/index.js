// ITERATION 1

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  priceProd=price.innerText;
  quantProd=quantity.valueAsNumber;
  subTotalPrice=priceProd*quantProd;
  product.querySelector('.subtotal span').innerText=subTotalPrice;
  return subTotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProduct=document.getElementsByClassName('product');
  console.log(allProduct);
  
  let valorTotal =0;

  for (i=0;i<allProduct.length;i++){
    valorTotal += updateSubtotal(allProduct[i]);
  }

  // ITERATION 3
  console.log(valorTotal);
  return document.querySelector("#total-value span").innerText=valorTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
