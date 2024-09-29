function calculate() {
    const expression = document.getElementById('expression').value;
    let result;
    try {
        result = eval(expression); // Be careful using eval in production
    } catch (error) {
        result = 'Error: Invalid Expression';
    }
    document.getElementById('result').innerText = result;
}
