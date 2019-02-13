let listItems = document.querySelector('ul');

listItems.addEventListener('click', function(event){
    alert(event.target.innerText);
});