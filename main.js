let element = document.body;
let icon = document.getElementById('icon1');
let select = document.getElementById("job-select");
let choice1 = document.getElementById('job');


let themeDark = function() {
    element.classList.toggle('dark-mode');
}

// editIcon.src = 'source/image/facebook.png';





icon.onclick = themeDark;