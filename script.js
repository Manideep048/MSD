let min = document.getElementById('min');
let max = document.getElementById('max');
let button = document.getElementById('button');
let result = document.getElementById('result');

button.addEventListener('click', function() {
    let minNumber = parseInt(min.value);
    let maxNumber = parseInt(max.value);


    if (minNumber <= maxNumber) {
        
        let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        
        result.innerHTML = `Your random value from the selected range is ${randomNumber}`;
    } else {
        
        result.innerHTML = `Please ensure the minimum value is less than or equal to the maximum value.`;
    }
});
