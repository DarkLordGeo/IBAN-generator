let IBAN = document.querySelector("#IBAN");
let generate = document.querySelector("#generate");
let bankPrefix = ""; 
let accountNumber = ""; 
let checkDigits = Math.floor(Math.random() * (99 - 10 + 1) + 10); 
function generateAccountNumber() {
    accountNumber = ''; 
    for (let i = 0; i < 8; i++) {  
        const twoDigitNumber = Math.floor(Math.random() * 90) + 10; 
        accountNumber += twoDigitNumber;
    }
}
document.getElementById('countries').addEventListener('change', function(event) {
    const selectedBank = event.target.value;

    if (selectedBank === 'BOG') {
        bankPrefix = "BG"; 
    } else if (selectedBank === 'TBC') {
        bankPrefix = "TB"; 
    } else if (selectedBank === 'LIB') {
        bankPrefix = "LB"; 
    } else {
        bankPrefix = ""; 
        alert('User selected no bank or default option');
    }
});
generate.addEventListener("click", () => {
    if (bankPrefix !== "") {
        generateAccountNumber(); 

        IBAN.value = `GE${checkDigits}${bankPrefix}${accountNumber}`;
    } else {
        alert("Please select a bank first.");
    }
});