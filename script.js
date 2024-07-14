let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const fromDropDown= document.getElementById("from-currency-select");
const toDropDown= document.getElementById("to-currency-select");

//Create dropdown from the currencies array
currencies.forEach((currency) => {
const option= document.createElement("option");
option.value= currency;
option.text = currency;
fromDropDown.add(option);
});

//Repeat same thing for the other dropdown
currencies.forEach((currency) => {
    const option= document.createElement("option");
    option.value= currency;
    option.text = currency;
    toDropDown.add(option);
    });

//Setting default values
    fromDropDown.value="USD";
    toDropDown.value  ="INR";

    
    let convertCurrency= () =>{
         //Create References
        const amount       = document.querySelector("#amount").value;
        const fromCurrency = fromDropDown.value;
        const toCurrency   = toDropDown.value;


  //If amount input field is not empty
  if(amount.value != 0){
    fetch(api)
    .then((resp) => resp.json())
    .then((data) => {
let fromExchangerate = data.conversion_rates[fromCurrency];
let toExchangerate   = data.conversion_rates[toCurrency];
const convertedAmount= (amount/fromExchangerate) * toExchangerate;
result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    });
  }
  else{
    alert("Please fill in the amount");
  }
  };

  document
  .querySelector("#convert-button")
  .addEventListener("click", convertCurrency);
  window.addEventListener("load", convertCurrency);