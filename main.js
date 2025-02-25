let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');


let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleButtonInput(e.target.innerHTML);
    });
});


// Function to handle input based on button content
function handleButtonInput(value) {
    if (value === '=') {
        string = eval(string);
        input.value = string;
    } else if (value === 'AC') {
        string = "";
        input.value = string;
    } else if (value === 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else {
        string += value;
        input.value = string;
    }
}