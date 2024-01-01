function convertTemperature() {
    // Get input values
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");

    // Convert Celsius to Fahrenheit
    var celsiusValue = parseFloat(celsiusInput.value);
    var fahrenheitValue = (celsiusValue * 9/5) + 32;

    // Update Fahrenheit input
    fahrenheitInput.value = isNaN(fahrenheitValue) ? "" : fahrenheitValue.toFixed(2);

    // Convert Fahrenheit to Celsius
    var fahrenheitValue = parseFloat(fahrenheitInput.value);
    var celsiusValue = (fahrenheitValue - 32) * 5/9;

    // Update Celsius input
    celsiusInput.value = isNaN(celsiusValue) ? "" : celsiusValue.toFixed(2);
}
