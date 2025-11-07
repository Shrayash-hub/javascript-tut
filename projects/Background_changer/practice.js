// firstly we need to select all the buttons

const buttons = document.querySelectorAll('.button');

// body is also required coz we have to change its background color
const body = document.querySelector('body');

//now we gonna loop through all the buttons using forEach loop , as nodeList is returned by querySelectorAll
buttons.forEach(function(button){
    // now we have to add event listener to each button 
    button.addEventListener('click', function(e){
        if(e.target.id==='grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor = e.target.id;
        }
        // e.target.id gives us the id of the button which is clicked
    })
})