document.addEventListener('DOMContentLoaded', function() {

    // --- Lógica para la Pregunta 1 ---
    const q1_calculateButton = document.getElementById('q1_calculateButton');
    const q1_inputH = document.getElementById('q1_inputH');
    const q1_inputBeta = document.getElementById('q1_inputBeta');
    const q1_inputX = document.getElementById('q1_inputX');
    const q1_calculationResult = document.getElementById('q1_calculationResult');

    if (q1_calculateButton) {
        q1_calculateButton.addEventListener('click', function() {
            performCalculationQ1();
        });
    }

    function performCalculationQ1() {
        const h = parseFloat(q1_inputH.value);
        const beta = parseFloat(q1_inputBeta.value);
        const x = parseFloat(q1_inputX.value);

        if (isNaN(h) || isNaN(beta) || isNaN(x)) {
            q1_calculationResult.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            q1_calculationResult.style.color = 'red';
            return;
        }

        const angleRad = (beta + 90) * Math.PI / 180;
        let a = Math.sqrt(Math.pow(x, 2) + Math.pow(h, 2) - (2 * x * h * Math.cos(angleRad)));
        a = Math.round(a * 100) / 100;

        q1_calculationResult.textContent = 'La distancia a es: ' + a.toFixed(2);
        q1_calculationResult.style.color = 'green';
    }

    // --- Lógica para la Pregunta 2 (Suma: a + b + c) ---
    const q2_calculateButton = document.getElementById('q2_calculateButton');
    const q2_inputA = document.getElementById('q2_inputA');
    const q2_inputB = document.getElementById('q2_inputB');
    const q2_inputC = document.getElementById('q2_inputC');
    const q2_calculationResult = document.getElementById('q2_calculationResult');

    if (q2_calculateButton) {
        q2_calculateButton.addEventListener('click', function() {
            performCalculationQ2();
        });
    }

    function performCalculationQ2() {
        const a = parseFloat(q2_inputA.value);
        const b = parseFloat(q2_inputB.value);
        const c = parseFloat(q2_inputC.value);

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            q2_calculationResult.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            q2_calculationResult.style.color = 'red';
            return;
        }

        const sumResult = a + b + c;

        q2_calculationResult.textContent = 'La suma es: ' + sumResult.toFixed(2);
        q2_calculationResult.style.color = 'green';
    }

    // --- Lógica para la Pregunta 3 (Aquí deberás implementar la lógica específica para esta pregunta) ---
    const q3_calculateButton = document.getElementById('q3_calculateButton');
    const q3_inputLength = document.getElementById('q3_inputLength');
    const q3_inputBase = document.getElementById('q3_inputBase');
    const q3_calculationResult = document.getElementById('q3_calculationResult');

    if (q3_calculateButton) {
        q3_calculateButton.addEventListener('click', function() {
            performCalculationQ3();
        });
    }

    function performCalculationQ3() {
        const length = parseFloat(q3_inputLength.value);
        const base = parseFloat(q3_inputBase.value);

        if (isNaN(length) || isNaN(base)) {
            q3_calculationResult.textContent = 'Por favor, ingrese números válidos en ambos campos.';
            q3_calculationResult.style.color = 'red';
            return;
        }

        // --- Aquí debes añadir la lógica de cálculo para la Pregunta 3 ---
        // Por ejemplo, para hallar la altura de la escalera usando Pitágoras: sqrt(length^2 - base^2)
        if (base >= length) { // Validar que la base no sea mayor o igual a la longitud de la escalera
            q3_calculationResult.textContent = 'La base no puede ser mayor o igual que la longitud de la escalera.';
            q3_calculationResult.style.color = 'red';
            return;
        }
        const height = Math.sqrt(Math.pow(length, 2) - Math.pow(base, 2));
        // Si necesitas redondear, puedes usar Math.round(height * 100) / 100;
        
        q3_calculationResult.textContent = 'La altura de la escalera es: ' + height.toFixed(2);
        q3_calculationResult.style.color = 'green';
    }

});