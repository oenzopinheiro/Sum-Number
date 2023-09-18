let numbers = [];

function addNumber() {
    var numberEntered = parseFloat(document.getElementById("number").value);

    if (!isNaN(numberEntered)) {
        numbers.push(numberEntered);
        document.getElementById("number").value = '';
        updateResult();
    }
}

function calcSum() {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    document.getElementById("result").textContent + sum;
}

function updateResult() {
    var result = " ";
    for (var i = 0; i < numbers.length; i++) {
        if (i > 0) {
            result += " + ";
        }
        result += numbers[i];
    }
    document.getElementById("result").textContent = result;
}

function clearNumbers() {
    numbers = [];
    document.getElementById("number").value = '';
    document.getElementById("result").textContent = "0";
}
