document.getElementById('convert').addEventListener('click', function() {
    var menu = document.getElementById('menu').value;
    var amount = document.getElementById('amount').value;
    var resultDiv = document.getElementById('result');

    if (menu === '1' && amount > 0) {
        var dollarToPkr = amount * 270;
        resultDiv.textContent = `${amount} DOLLAR into PKR Is ${dollarToPkr}`;
    } else if (menu === '2' && amount > 0) {
        var pkrToDollar = amount / 270;
        resultDiv.textContent = `${amount} PKR into DOLLAR is ${pkrToDollar}`;
    } else {
        resultDiv.textContent = "Invalid input Please enter a valid amount.";
    }
});
