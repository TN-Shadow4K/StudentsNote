// recuperation les champ valeur du formulaire
const fullName= document.querySelector('.fullname');
const dateOfBrth= document.querySelector('.dateOfBirth');
const gender= document.querySelector('.select[name="gender"]');
const task1= document.querySelector('.task1');
const task2= document.querySelector('.task2');
const task3= document.querySelector('.task3');

// recuperation les buttons
const result = document.querySelector('.result');
const submit = document.querySelector('.submit');
const reset = document.querySelector('.reset');

//validation rules fullname
function validateFullName (fullName);

//check if the full name is required 
if (!fullName) { 
return "Full name is required";} 

// check length of the full name
if (fullName.length < 3 || fullName.length > 20 )

//check the format of the full name.
if (!/^[a-zA-Z]+$/.test(fullName)){
    return "Full name must contain only letters and spaces.";
}
return null;

//if the full name passes all the validation rules, return null.
return null;

//check if the date required
if ( date){
    return "Date required";     
}

//check the format of the date.
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return "date must be in the format YYYY-MM-DD.";
}

//Check the range of the date.
const today = new date ();
const minDate = new Date (today.getFullYear(), today.getMonth(), today.getDate());
const maxDate = new Date (today.getFullYear(), today.getMonth(), today.getDate());

if (date <minDate || date > maxDate) {
    return "date must be between today and year from today.";
}

//f the date passes all the validation rules, return null,
return null;