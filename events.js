//Directly in events.html 
// function firstClick(){
//     alert('noice');
// }

//attaching the function to the element
// let secondButton = document.querySelector('.second_button');
// secondButton.onclick = function (){
//     alert(' noice but 2');
// }

// using addEventListener
// let thirdButton = document.querySelector('.third_button');
// thirdButton.addEventListener('click', function(){
//     alert('noice but 3');
// });

let buttons = document.getElementsByTagName('button');

for(let i = 0; i< buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        alert('just pressed number '+buttons[i].name +" button")
    })
}