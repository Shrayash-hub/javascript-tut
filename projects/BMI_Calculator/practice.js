// firstly we need to select the form , because we want values filled in the form , just after submission
const form = document.querySelector('form');

// now we need to add event listener to the form , so that when user submits the form , we can take action
form.addEventListener('submit',function(e){
    // preventing the default behaviour of form submission (which is to reload the page)
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    // .value gives the value filled in the input field

    // parseFloat is used to convert the string value to a floating point number

    // need to select the result div to display the result
    const result = document.querySelector('#result');

    if(height === '' || weight === '' || isNaN(height) || isNaN(weight)){
        result.innerHTML = `Please enter valid height and weight ${height} ${weight}`;
    }
    else{
        const bmi = (weight / (height * height)).toFixed(2);
        result.innerHTML = `<span>Your BMI is ${bmi}</span>`;
    }
})