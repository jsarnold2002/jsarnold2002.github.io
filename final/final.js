let phoneNumberInput = '';

function addToPhoneNumber(digit) {
    phoneNumberInput = digit + phoneNumberInput;
    updatePhoneNumberDisplay();
}

function clearPhoneNumber() {
    phoneNumberInput = '';
    updatePhoneNumberDisplay();
}

function updatePhoneNumberDisplay() {
    document.getElementById('phoneNumber').innerText = phoneNumberInput;
}

function submitPhoneNumber() {
    if (phoneNumberInput.length === 10) {
        alert("Good job!");
    } else {
        alert("Please enter a valid 10-digit phone number.");
    }
}

