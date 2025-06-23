document.addEventListener('DOMContentLoaded', function() {
    // Get references to the DOM elements
    const calculateButton = document.getElementById('calculateButton');
    // const inputValue1 = document.getElementById('inputValue1'); // Old input
    // const inputValue2 = document.getElementById('inputValue2'); // Old input
    const inputH = document.getElementById('inputH');
    const inputBeta = document.getElementById('inputBeta');
    const inputX = document.getElementById('inputX');
    const calculationResult = document.getElementById('calculationResult');
    const calculationImage = document.getElementById('calculation-image');

    // Event listener for the calculate button
    if (calculateButton) {
        calculateButton.addEventListener('click', function() {
            console.log("Calculate button clicked!"); // DEBUGGING LINE
            // calculateButton.textContent = 'Procesando...'; // DEBUGGING LINE - Visual feedback

            performCalculation();

            // Optional: Revert button text after a short delay if performCalculation is quick
            // // setTimeout(function() {
            // //     calculateButton.textContent = 'Calcular';
            // // }, 1000); // Reverts after 1 second
        });
    }

    // Function to get input values, perform calculation, and display result
    function performCalculation() {
        // Get values from input fields
        const h = parseFloat(inputH.value);
        const beta = parseFloat(inputBeta.value);
        const x = parseFloat(inputX.value);

        // Validate inputs
        if (isNaN(h) || isNaN(beta) || isNaN(x)) {
            calculationResult.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult.style.color = 'red';
            return;
        }

        // Implement the calculation logic from the Python code
        // angulo = radians(B+90)  => (beta + 90) * PI / 180
        const angleRad = (beta + 90) * Math.PI / 180;

        // a = sqrt((x**2)+(h**2)-2*x*h*cos(angulo))
        let a = Math.sqrt(Math.pow(x, 2) + Math.pow(h, 2) - (2 * x * h * Math.cos(angleRad)));

        // a = round(a,2)
        a = Math.round(a * 100) / 100; // Rounds to 2 decimal places

        // Display the result
        calculationResult.textContent = 'La distancia a es: ' + a.toFixed(2);
        calculationResult.style.color = 'green'; // Or your preferred color for success
    }

    // Example: How you might change the image and associate specific calculations later
    // For now, this is just a conceptual note.
    // function loadImageAndCalculation(imageSrc, calculationFunction) {
    //     calculationImage.src = imageSrc;
    //     // `currentCalculation` would be a variable holding the function to execute
    //     // currentCalculation = calculationFunction;
    //     inputValue1.value = '';
    //     inputValue2.value = '';
    //     calculationResult.textContent = 'El resultado aparecerá aquí.';
    //     calculationResult.style.color = 'black';
    // }

    // Example of a specific calculation function (to be defined by user later)
    // function calculateAreaOfRectangle(length, width) {
    //     return length * width;
    // }

    // Event listener for the calculateButton-2
    const calculateButton2 = document.getElementById('calculateButton-2');
    if (calculateButton2) {
        calculateButton2.addEventListener('click', function() {
            const angleAInput = document.getElementById('inputA-2');
            const valueBInput = document.getElementById('inputB-2');
            const angleCInput = document.getElementById('inputC-2');
            const resultElement = document.getElementById('calculationResult-2');

            // Ensure elements exist before trying to get their values
            if (!angleAInput || !valueBInput || !angleCInput || !resultElement) {
                console.error("One or more input/result elements for section 2 not found.");
                if (resultElement) {
                    resultElement.textContent = 'Error: Elementos del DOM no encontrados.';
                    resultElement.style.color = 'red';
                }
                return;
            }

            const angleA = parseFloat(angleAInput.value);
            const valueB = parseFloat(valueBInput.value);
            const angleC = parseFloat(angleCInput.value);

            // Validate inputs: Check if angleA, valueB, angleC are numbers
            if (isNaN(angleA) || isNaN(valueB) || isNaN(angleC)) {
                resultElement.textContent = 'Error: Por favor, ingrese números válidos en todos los campos.';
                resultElement.style.color = 'red';
                return;
            }

            // Convert angles from degrees to radians
            const angleArad = angleA * (Math.PI / 180);
            const angleCrad = angleC * (Math.PI / 180);

            // Calculate tangents
            const tanA = Math.tan(angleArad);
            const tanC = Math.tan(angleCrad);

            // Check for division by zero (tanA or tanC is zero, or very close to zero)
            // Note: tan(0) is 0, tan(180 deg or pi rad) is 0.
            // tan(90 deg or pi/2 rad) is undefined. Math.tan(PI/2) might not be exactly undefined due to precision.
            // We are concerned about tanA or tanC being zero for x1 = valueB / tanA and x2 = valueB / tanC.
            if (Math.abs(tanA) < 1e-9 || Math.abs(tanC) < 1e-9) { // Check if tan is effectively zero
                resultElement.textContent = 'Error: División por cero (ángulo inválido, tangente es cero).';
                resultElement.style.color = 'red';
                return;
            }

            // Also check if angles themselves are 90, 270 etc. which would make tan undefined.
            // angle % 180 === 90 would mean it's 90 or 270.
            if (angleA % 180 === 90 || angleC % 180 === 90) {
                 resultElement.textContent = 'Error: Ángulo de 90 o 270 grados produce tangente indefinida.';
                 resultElement.style.color = 'red';
                 return;
            }


            // Calculate x1 and x2
            const x1 = valueB / tanA;
            const x2 = valueB / tanC;

            // Calculate final x and round to 2 decimal places
            const x = (x1 + x2); // .toFixed(2) returns a string, do it at the end.

            // Display the result
            resultElement.textContent = 'El valor de x es ' + x.toFixed(2);
            resultElement.style.color = 'green'; // Or your preferred color for success
        });
    }
});
