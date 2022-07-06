// default price  function
function forDefaultButton(inputId, againActiveButtonId, forOneTBstorage){
     const defaultBtnPrice = document.getElementById(inputId);
     defaultBtnPrice.innerText = 0;

     const button = document.getElementById(againActiveButtonId, forOneTBstorage);
     button.disabled = false;

     const oneTBbutton = document.getElementById(forOneTBstorage);
     oneTBbutton.disabled = false;
     
}

// additional price function  
function additionalPrice(addPriceId, price, buttonId, productCostId, priceLimit){
    const additionalPriceBtnPrice = document.getElementById(addPriceId);
    additionalPriceBtnPrice.innerText = price;

    let memoryCost = document.getElementById(productCostId).innerText;

    if (memoryCost == priceLimit){
        const button = document.getElementById(buttonId);
        button.disabled = true;
    }
}

// total price function
function totalPrice(productCost){
const totalPrice = document.getElementById("total-price");
const totalPriceInput = totalPrice.innerText;
const totalPriceValue = parseInt(totalPriceInput)

totalPrice.innerText = totalPriceValue + productCost;

// footer total price
let finalPrice = document.getElementById("finalPrice")
let finalPriceInput = finalPrice.innerText;
const finalPriceValue = parseInt(finalPriceInput);
finalPrice.innerText = totalPriceValue + productCost;
}

// 8GB Unified Memory
document.getElementById("8GbMemory-btn").addEventListener('click', function(){
   

    let total = document.getElementById("total-price");
    let totalInput = total.innerText;
    let totalInputValue = parseFloat(totalInput);

    let memoryCost = document.getElementById("memory-cost");
    let memoryCostInput =memoryCost.innerText
    let memoryCostValue = parseInt(memoryCostInput);

    total.innerText = totalInputValue - memoryCostValue;

    // footer total price
    let finalPrice = document.getElementById("finalPrice")
    let finalPriceInput = finalPrice.innerText;
    const finalPriceValue = parseInt(finalPriceInput);

    finalPrice.innerText = totalPriceValue - memoryCostValue;
    
forDefaultButton("memory-cost", "16GbMemory-btn")
})

// 16GB Unified Memory
document.getElementById("16GbMemory-btn").addEventListener('click', function(){

    additionalPrice("memory-cost", 180 , "16GbMemory-btn", "memory-cost", 180);
    totalPrice(180) 
})

// 256GB SSD Storage
document.getElementById("256GbSSD-btn").addEventListener('click', function(){

let total = document.getElementById("total-price");
let totalInput = total.innerText;
let totalInputValue = parseFloat(totalInput);

let storageCost = document.getElementById("storage-price");
let storageCostInput =storageCost.innerText
let storageCostValue = parseInt(storageCostInput);

total.innerText = totalInputValue - storageCostValue;

// footer total price
let finalPrice = document.getElementById("finalPrice")
let finalPriceInput = finalPrice.innerText;
const finalPriceValue = parseInt(finalPriceInput);

finalPrice.innerText = totalInputValue - storageCostValue;

forDefaultButton("storage-price", "512GbSSD-btn", "1TbSSD-btn");
})

// 512GB SSD Storage
document.getElementById("512GbSSD-btn").addEventListener('click', function(){

    additionalPrice("storage-price", 100, "512GbSSD-btn", "storage-price", 100)
    
    const oneTBstorage = document.getElementById("1TbSSD-btn");

    const totalPrices = document.getElementById("total-price");
    const totalPriceInput = totalPrices.innerText;
    const totalPriceValue = parseInt(totalPriceInput)

    if(oneTBstorage.disabled == true){
        totalPrices.innerText = totalPriceValue - 180;
        const oneTBbutton = document.getElementById("1TbSSD-btn");
        oneTBbutton.disabled = false;
    }
   
    totalPrice(100)
})

// 1TB SSD Storage
document.getElementById("1TbSSD-btn").addEventListener('click', function(){
    additionalPrice("storage-price", 180, "1TbSSD-btn", "storage-price", 180)

    const oneTBstorage = document.getElementById("512GbSSD-btn");

    const totalPrices = document.getElementById("total-price");
    const totalPriceInput = totalPrices.innerText;
    const totalPriceValue = parseInt(totalPriceInput)

    if(oneTBstorage.disabled == true){
        totalPrices.innerText = totalPriceValue - 100;
        const oneTBbutton = document.getElementById("512GbSSD-btn");
        oneTBbutton.disabled = false;
    }
    // else if(oneTBstorage.disabled == false){
    //     totalPrices.innerText = totalPriceValue + 180;
    // }
    totalPrice(180)
})

// free delivery Charge
document.getElementById("free-delivery").addEventListener('click', function(){

    let total = document.getElementById("total-price");
    let totalInput = total.innerText;
    let totalInputValue = parseFloat(totalInput);

    let deliveryCost = document.getElementById("delivery-charge");
    let deliveryCostInput =deliveryCost.innerText
    let deliveryCostValue = parseInt(deliveryCostInput);

    total.innerText = totalInputValue - deliveryCostValue;

    // footer total price
    let finalPrice = document.getElementById("finalPrice")
    let finalPriceInput = finalPrice.innerText;
    const finalPriceValue = parseInt(finalPriceInput);
    finalPrice.innerText =  totalInputValue - deliveryCostValue;

    forDefaultButton("delivery-charge", "paid-delivery");
})

// Paid delivery charge
document.getElementById("paid-delivery").addEventListener('click', function(){
    additionalPrice("delivery-charge", 20,"paid-delivery", "delivery-charge", 20 )

    totalPrice(20);
})
