
let div = document.getElementById('main-container');

document.getElementById('generate').addEventListener('click', generateColors);

document.getElementById('start').addEventListener('click', start);

document.getElementById('stop').addEventListener('click', stop);



function generateColors() {

    //empty the main container, if colors are already generated
    emptyContainer(div);

    let inputVal = document.getElementById('inputValue').value;

    if (valueIsCorrect(inputVal)) {
        for (let i = 1; i <= inputVal; i++) {
            let colorBlock = document.createElement('div');
            colorBlock.className = 'block';

            let codeDiv = document.createElement('div');
            codeDiv.className = 'block-element text';
            let colorCode = randomColorCode();
            codeDiv.textContent = colorCode;

            colorBlock.style.background = colorCode;

            let buttonDiv = document.createElement('div');
            buttonDiv.className = 'block-element';

            let copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.textContent = 'Copy';
            copyButton.addEventListener('click', function () {
                navigator.clipboard.writeText(colorCode);
            });

            colorBlock.append(codeDiv);
            buttonDiv.append(copyButton);
            colorBlock.append(buttonDiv);
            div.append(colorBlock);
        }
    }
}

function emptyContainer(parent) {
    if (parent.hasChildNodes()) {
        parent.textContent = '';
    }
}

function valueIsCorrect(val) {
    if (Number.isInteger(Number(val)) && val > 0) {
        return true;
    }
    return alert('Enter integer value greater than 0');
}

function randomColorCode() {
    return '#' + Math.random().toString(16).slice(-6).toUpperCase();
}

let colorBlocks = div.getElementsByClassName('block');

let timeInter;

function start() {
    timeInter = setInterval(flashing, 1000);
}

function stop() {
    clearInterval(timeInter);
}

function flashing() {
    for (let block of colorBlocks) {
        block.style.background = randomColorCode();
    }
}









