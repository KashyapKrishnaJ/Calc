function input(value) {
    document.getElementById('calc-input').value += value;
}

function clearDisplay() {
    document.getElementById('calc-input').value = '';
    document.getElementById('calc-answer').innerText = '';
}

function calculate() {
    try {
        const input = document.getElementById('calc-input').value;
        const result = eval(input); // Use with caution, consider using a safer evaluation method
        document.getElementById('calc-answer').innerText = result;
    } catch (error) {
        document.getElementById('calc-answer').innerText = 'Error';
    }
}

function nthRoot() {
    const input = document.getElementById('calc-input').value;
    const [n, x] = input.split(',').map(Number); // Input format: "n,x" for nth root of x
    if (n > 0 && x >= 0) {
        const result = Math.pow(x, 1 / n);
        document.getElementById('calc-answer').innerText = result;
    } else {
        document.getElementById('calc-answer').innerText = 'Error';
    }
}

function cycleTheme() {
    const themes = ['cyber-blue', 'inferno-red', 'neon-purple', 'venom-green', 'solar-gold'];
    let currentTheme = document.body.className;
    let nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
    document.body.className = nextTheme;
}
