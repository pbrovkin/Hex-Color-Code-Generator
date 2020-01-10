let div = document.getElementById('main-container');
document.body.append(div);

let blocks = div.getElementsByClassName('block');

let timeInter;

function generateColor() {
    let inputVal = document.getElementById('inputValue').value;
    if (valueIsCorrect(inputVal)) {
        for (let i = 1; i <= inputVal; i++) {
            let block = document.createElement('div');
            block.className = 'block';
            
            let left = document.createElement('div');
            left.className = 'block-element text';
            let color = randomColor();
            left.textContent = color;

            block.style.background = color;

            let right = document.createElement('div');
            right.className = 'block-element';
            
            let button = document.createElement('button');
            button.className = 'copy-button';
            button.textContent = 'Copy';
            button.addEventListener('click', function () {
                navigator.clipboard.writeText(color);
            });

            block.append(left);
            right.append(button);
            block.append(right);
            div.append(block);
        }
    }
}

function randomColor() {
    return '#' + Math.random().toString(16).slice(-6).toUpperCase();
}

function startTimer() {
    timeInter = setInterval(timer, 1000);
}

function stopTimer() {
    clearInterval(timeInter);
}

function timer() {
    for (let block of blocks) {
        block.style.background = randomColor();
    }
}

function valueIsCorrect(val) {
    if (Number.isInteger(Number(val)) && val > 0) {
        return true;
    }
    return alert('Enter integer value greater than 0');
}



