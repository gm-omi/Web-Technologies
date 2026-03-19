function addValue(val) {
    document.getElementById("display").value += val;
}

function getResult() {
    let expression = document.getElementById("display").value;

    try {
        let result = eval(expression);

        // Handle invalid cases like division by zero
        if (result === Infinity || result === -Infinity) {
            document.getElementById("display").value = "Error";
        } else {
            document.getElementById("display").value = result;
        }

    } catch {
        document.getElementById("display").value = "Error";
    }
}

function clearScreen() {
    document.getElementById("display").value = "";
}