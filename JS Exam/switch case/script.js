function checkNumber() {
    const number = parseInt(document.getElementById('numberInput').value);
    const option = parseInt(document.getElementById('optionSelect').value);
    let result = '';

    switch (option) {
        case 1:
            result = isOddOrEven(number);
            break;
        case 2:
            result = isPerfectNumber(number);
            break;
        case 3:
            result = isArmstrongNumber(number);
            break;
        default:
            result = 'Invalid option';
    }

    document.getElementById('result').textContent = result;
}

function isOddOrEven(number) {
    return number % 2 === 0 ? `${number} is even` : `${number} is odd`;
}

function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number ? `${number} is a perfect number` : `${number} is not a perfect number`;
}

function isArmstrongNumber(number) {
    const digits = number.toString().split('');
    const numDigits = digits.length;
    let sum = 0;
    for (let digit of digits) {
        sum += Math.pow(parseInt(digit), numDigits);
    }
    return sum === number ? `${number} is an Armstrong number` : `${number} is not an Armstrong number`;
}
