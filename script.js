document.addEventListener('DOMContentLoaded', function() {
    // Get references to the DOM elements

    // pregunta 1

    const calculateButton = document.getElementById('calculateButton');
    const inputH = document.getElementById('inputH');
    const inputBeta = document.getElementById('inputBeta');
    const inputX = document.getElementById('inputX');
    const calculationResult = document.getElementById('calculationResult');
    const calculationImage = document.getElementById('calculation-image');
      
    // Event listener for the calculate button
    if (calculateButton) {
        calculateButton.addEventListener('click', function() {
            console.log("Calculate button clicked!"); // DEBUGGING LINE
            calculateButton.textContent = 'Calcular'; // DEBUGGING LINE - Visual feedback

            performCalculation();
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

        // pregunta 2

    const calculateButton2 = document.getElementById('calculateButton2');
    const inputA = document.getElementById('inputA');
    const inputB = document.getElementById('inputB');
    const inputC = document.getElementById('inputC');
    const calculationResult2 = document.getElementById('calculationResult2');
    const calculationImage2 = document.getElementById('calculation-image');

    if (calculateButton2) {
        calculateButton2.addEventListener('click', function() {
            console.log("Calculate button clicked!"); // DEBUGGING LINE
            calculateButton2.textContent = 'Calcular'; // DEBUGGING LINE - Visual feedback

            performCalculation2();
        });
    }

    function performCalculation2() {
        // Get values from input fields
        const A = parseFloat(inputA.value);
        const B = parseFloat(inputB.value);
        const C = parseFloat(inputC.value);

        // Validate inputs
        if (isNaN(A) || isNaN(B) || isNaN(C)) {
            calculationResult2.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult2.style.color = 'red';
            return;
        }

        const a_radian = A*Math.PI/180;
        const c_radian = C*Math.PI/180;

        const x_1 = B/Math.tan(a_radian);
        const x_2 = B/Math.tan(c_radian);
        
        const x_total = Math.round((x_1 + x_2)*100)/100;

        // Display the result
        calculationResult2.textContent = 'El valor de x es: ' + x_total;
        calculationResult2.style.color = 'green'; // Or your preferred color for success
    }

    

    // Example: How you might change the image and associate specific calculations later
    // For now, this is just a conceptual note.
    // function loadImageAndCalculation(imageSrc, calculationFunction) {
    //     calculationImage.src = imageSrc;
    //     // currentCalculation would be a variable holding the function to execute
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
});