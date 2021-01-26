document.getElementById("login").addEventListener("click", function () {
    document.getElementById("login-area").style.display = "none";
    document.getElementById("transaction-area").style.display = "block";
});

document.getElementById("dep").addEventListener("click", function () {

    let depAmountInput = document.getElementById("dep-input");

    updateBalance("dep-place", depAmountInput.value);
    updateBalance("balance-place", depAmountInput.value);

    depAmountInput.value = '';

    function updateBalance(idName, balance) {
        let item = document.getElementById(idName);
        item.innerText = parseFloat(item.innerText) + parseFloat(balance);

    }

})

document.getElementById("withdraw").addEventListener("click", function () {
    let widAmountInput = document.getElementById("withdraw-input");

    updateWithdraw("wit-place", widAmountInput.value, '+');
    updateWithdraw("balance-place", widAmountInput.value, '-');

    widAmountInput.value = "";
    function updateWithdraw(idName, balance, operator) {
        let item = document.getElementById(idName);
        if (operator == "+") {
            item.innerText = parseFloat(item.innerText) + parseFloat(balance);
        }
        else {
            item.innerText = parseFloat(item.innerText) - parseFloat(balance);
        }

    }

})