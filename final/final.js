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
