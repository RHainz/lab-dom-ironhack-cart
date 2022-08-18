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
  buttons=document.getElementsByClassName('btn btn-remove');
  console.log(buttons);
  return document.querySelector("#total-value span").innerText=valorTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let oldValor = Number(document.querySelector("#total-value span").innerText);
  console.log(oldValor);
  novoValor=oldValor-updateSubtotal(target.parentNode.parentNode);
  console.log(novoValor);
  console.log('The target in remove is:', target);
  const parent = target.parentNode.parentNode.parentNode;
  parent.removeChild(target.parentNode.parentNode);
  console.log(parent);
  return document.querySelector("#total-value span").innerText=novoValor; 
}

// ITERATION 5

function createProduct() {
  console.log('ababiju')
  let clone= document.getElementsByClassName("product");
  //let clone2=clone[0].cloneNode();
  let ondeClone=document.querySelector(".body tbody");
  console.log(clone);
  console.log(ondeClone);
  ondeClone.appendChild(clone);
  location.reload();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn= document.getElementsByClassName("btn btn-remove");
  for (i=0;i<removeBtn.length;i++){
  removeBtn[i].addEventListener("click", removeProduct);
  }

  const createPro=document.getElementById("create");
  createPro.addEventListener('click',createProduct);
});


