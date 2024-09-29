let themes = ["cyber-blue", "inferno-red", "neon-purple", "venom-green", "solar-gold"];
let currentThemeIndex = 0;

function appendValue(value) {
    const expressionField = document.getElementById('expression');
    expressionField.value += value;
}

function clearExpression() {
    document.getElementById('expression').value = '';
    document.getElementById('result').innerText = '';
}

function deleteLast() {
    const expressionField = document.getElementById('expression');
    expressionField.value = expressionField.value.slice(0, -1);
}

function calculate() {
    const expression = document.getElementById('expression').value;
    let result;
    try {
        result = eval(expression); // Again, be careful using eval in production
    } catch (error) {
        result = 'Error: Invalid Expression';
    }
    document.getElementById('result').innerText = result;
}

function cycleColors() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    document.body.className = themes[currentThemeIndex];
}
