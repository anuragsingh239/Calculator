function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteDigit() {
    var value = document.getElementById('result').value;
    document.getElementById('result').value = value.slice(0, -1);
}

function appendValue(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    var expression = document.getElementById('result').value;
    try {
        var result = eval(expression);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function calculateSquareRoot() {
    var value = document.getElementById('result').value;
    if (parseFloat(value) >= 0) {
        var result = Math.sqrt(parseFloat(value));
        document.getElementById('result').value = result;
    } else {
        document.getElementById('result').value = 'Error';
    }
}

function calculateExponentiation() {
    var value = document.getElementById('result').value;
    var parts = value.split('^');
    if (parts.length === 2) {
        var base = parseFloat(parts[0]);
        var exponent = parseFloat(parts[1]);
        var result = Math.pow(base, exponent);
        document.getElementById('result').value = result;
    } else {
        document.getElementById('result').value = 'Error';
    }
}

function calculateSin() {
    var value = document.getElementById('result').value;
    var result = Math.sin(parseFloat(value));
    document.getElementById('result').value = result;
}

function calculateCos() {
    var value = document.getElementById('result').value;
    var result = Math.cos(parseFloat(value));
    document.getElementById('result').value = result;
}

function calculateTan() {
    var value = document.getElementById('result').value;
    var result = Math.tan(parseFloat(value));
    document.getElementById('result').value = result;
}

function calculateLog() {
    var value = document.getElementById('result').value;
    if (parseFloat(value) > 0) {
        var result = Math.log10(parseFloat(value));
        document.getElementById('result').value = result;
    } else {
        document.getElementById('result').value = 'Error';
    }
}
