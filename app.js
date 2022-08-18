document.getElementById("apply-btn").addEventListener("click", function () {

    const discountcalculation = 30/100;

    const prevPrice = document.getElementById('price')
    const prevpriceStr = prevPrice.innerText;
    const price = parseFloat(prevpriceStr);


    const cuppon = document.getElementById('priceInput')
    const setCuppon = cuppon.value;
    cuppon.value='';

    if(setCuppon === 'DOM'){
       const currentPrice = price * discountcalculation;
       return (prevPrice.innerText = currentPrice);

    }else{
        alert('Please set a valid Cuppon')
    }
    
});
