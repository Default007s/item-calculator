const addButton = document.getElementById('addition');
const body = document.getElementById('body');
const deleteButton = document.getElementById('subtraction');

addButton.addEventListener('click', addTemplate);
deleteButton.addEventListener('click', removeTemplate);

let totalTotalPrice = 0;
let totalTotalItems = 1;

function addTemplate() {

    const itemCalculator = document.createElement('form');
    itemCalculator.className = 'item-calculator';
    body.appendChild(itemCalculator);

    const itemLabel = document.createElement('label')
    itemLabel.for = 'item';
    itemLabel.textContent = 'Item';
    itemCalculator.appendChild(itemLabel);
    itemLabel.style.marginRight = '5px'
    const itemInput = document.createElement('input');
    itemInput.type = 'text';
    itemInput.id = 'item';
    itemCalculator.appendChild(itemInput);

    const priceLabel = document.createElement('label')
    priceLabel.for = 'price';
    priceLabel.textContent = 'Price $';
    itemCalculator.appendChild(priceLabel);
    priceLabel.style.marginRight = '5px'
    const priceInput = document.createElement('input');
    priceInput.type = 'text';
    priceInput.id = 'price';
    priceInput.className = 'price';
    itemCalculator.appendChild(priceInput);

    const taxLabel = document.createElement('label')
    taxLabel.for = 'tax';
    taxLabel.textContent = 'Tax';
    itemCalculator.appendChild(taxLabel);
    taxLabel.style.marginRight = '5px'
    const taxInput = document.createElement('input');
    taxInput.type = 'text';
    taxInput.id = 'tax';
    taxInput.className = 'tax';
    itemCalculator.appendChild(taxInput);

    const quantityLabel = document.createElement('label')
    quantityLabel.for = 'quantity';
    quantityLabel.textContent = 'Quantity';
    itemCalculator.appendChild(quantityLabel);
    quantityLabel.style.marginRight = '5px'
    const quantityInput = document.createElement('input');
    quantityInput.type = 'text';
    quantityInput.id = 'quantity';
    quantityInput.className = 'quantity';
    itemCalculator.appendChild(quantityInput);

    const totalLabel = document.createElement('label')
    totalLabel.for = 'total';
    totalLabel.textContent = 'Total';
    itemCalculator.appendChild(totalLabel);
    totalLabel.style.marginRight = '5px'
    const totalInput = document.createElement('input');
    totalInput.type = 'text';
    totalInput.id = 'total';
    totalInput.className = 'total-price';
    itemCalculator.appendChild(totalInput);

    totalTotalItems += 1;
}

setInterval(totalEveryThing, 1);

function totalEveryThing() {
    let totalPrice = document.getElementById('tt-price');
    let totalItems = document.getElementById('tt-items');
    let inputTotalPrice = document.getElementsByClassName('total-price');
    let inputPrice = document.getElementsByClassName('price');
    let inputQuantity = document.getElementsByClassName('quantity');
    let inputTax = document.getElementsByClassName('tax')
    let aPrice = 0;


    for(var i = 0; i < inputTotalPrice.length; i++){
        aPrice += Number(inputTotalPrice[i].value);
    }

    for(var i = 0; i < inputTotalPrice.length; i++){
        let totalPriceQuantity = Number(inputPrice[i].value) * Number(inputQuantity[i].value);
        inputTotalPrice[i].value = Number(totalPriceQuantity) + (Number(totalPriceQuantity) * Number(inputTax[i].value));
    }

    totalPrice.value = '$ ' + aPrice.toFixed(2);
    totalItems.value = totalTotalItems;

}

function removeTemplate() {
    let template = document.getElementsByClassName('item-calculator');
    if (template.length ) {
        totalTotalItems -=1;
    }
    body.removeChild(template[0]);
}
