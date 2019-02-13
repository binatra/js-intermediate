window.onload = function(){
    let helloWorld = document.getElementById('change_heading');
    helloWorld.innerText = 'Hello World!';

    let section = document.querySelector('section');
    section.addEventListener('mouseover', function(event){
        let selectedColor = document.querySelector('.selected');
        selectedColor.innerText = event.target.className;
    });

    let purpleDiv = document.createElement('div');
    let blackDiv = document.createElement('div');
    blackDiv.className = 'black';
    purpleDiv.className = "purple";
    section.appendChild(purpleDiv);
    section.appendChild(blackDiv);

    let button = document.querySelector('button');
    let car1 = document.querySelector('.car1');
    let car2 = document.querySelector('.car2');
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;
    console.log(car2.style.marginLeft);


    function reset(car1, car2){
        clearTimeout(car1.timer);
        clearTimeout(car2.timer);
        car1.style.marginLeft = 0;
        car2.style.marginLeft = 0;
        button.disabled = false;
    }

    button.addEventListener('click', function(event){
        button.disabled = true;
        car1.timer = setInterval(function(){
            car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*10 + 'px';
            if(parseInt(car1.style.marginLeft) > window.innerWidth){
                alert('Car 1 wins');
                reset(car1, car2);
            }
        },1);
        car2.timer = setInterval(function(){
            car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()*10 + 'px';
            if(parseInt(car2.style.marginLeft) > window.innerWidth){
                alert('Car 2 wins');
                reset(car1, car2);
            }
        },1)
    });
}