function clearDisplay() {
    document.getElementById('display').value = '';
    animateCartoon('clear');
}

function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
    animateCartoon('delete');
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
    animateCartoon('append');
}

function calculate() {
    try {
        let expression = document.getElementById('display').value;
        expression = expression.replace(/√\(/g, 'Math.sqrt(');
        expression = expression.replace(/\^\(/g, 'Math.pow(');
        let result = eval(expression);
        document.getElementById('display').value = result;
        animateCartoon('calculate');
    } catch (error) {
        alert('Invalid calculation');
    }
}

function animateCartoon(action) {
    const cartoonImg = document.querySelector('.cartoon-img');
    cartoonImg.style.animation = 'none';
    switch (action) {
        case 'clear':
            cartoonImg.style.animation = 'shake 0.5s';
            break;
        case 'delete':
            cartoonImg.style.animation = 'rotate 0.5s';
            break;
        case 'append':
            cartoonImg.style.animation = 'bounce 0.5s';
            break;
        case 'calculate':
            cartoonImg.style.animation = 'flash 0.5s';
            break;
    }
    cartoonImg.offsetHeight; // Trigger reflow
    cartoonImg.style.animation = null;
}
