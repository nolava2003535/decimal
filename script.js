function convert() {
  const decimalInput = document.getElementById('decimalInput').value;
  const decimalNumber = parseInt(decimalInput);

  if (!isNaN(decimalNumber)) {
    const binaryResult = decimalNumber.toString(2);
    const octalResult = decimalNumber.toString(8);
    const hexResult = decimalNumber.toString(16).toUpperCase();

    document.getElementById('binaryResult').innerText = binaryResult;
    document.getElementById('octalResult').innerText = octalResult;
    document.getElementById('hexResult').innerText = hexResult;
  } else {
    alert('Please enter a valid decimal number.');
  }
}
