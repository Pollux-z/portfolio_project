let choice1 = document.getElementById('job-select')
let button = document.getElementById('enable');

let statusButton = function() {
    choice1.toggleAttribute('disabled');
    button.innerHTML = 'Enable';
}



button.onclick = statusButton;

let sizeImage = document.getElementById('colleg-img').getAttributeNames('img');

sizeImage.style.backgroundColor = 'red';
let resize = function() {
    
}