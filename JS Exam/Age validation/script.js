function checkAge(age) {
    if (age <= 0) {
        throw new Error("Negative and Zero age are not allowed.");
    }
    return "Age is valid.";
}

function validateAge() {
    const ageInput = document.getElementById('ageInput').value;
    const messageElement = document.getElementById('message');

    try {
        const result = checkAge(Number(ageInput));
        messageElement.textContent = result;
        messageElement.style.color = 'green';
    } catch (error) {
        messageElement.textContent = `Error: ${error.message}`;
        messageElement.style.color = 'red';
    }
}
