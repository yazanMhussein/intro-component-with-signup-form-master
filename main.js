let userForm = document.querySelector(".userForm");
let errorFirstName = document.querySelector("#fName");
let errorLastName = document.querySelector("#lName");
let errorEmailInput= document.querySelector("#eamil");
let errorPasswordInput = document.querySelector("#password");

let errorFirstNameTextShow = document.querySelector(".errorFirstName");
let errorLastNameTextShow = document.querySelector(".errorLastName");
let errorEmailTextShow = document.querySelector(".errorEmailInput");
let errorPasswordTextShow = document.querySelector(".errorPasswordInput");

userForm.addEventListener("submit",(event)=>{
let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g; 

if(errorFirstName.value === "" || errorFirstName.value == null ){ 
     errorFirstNameTextShow.innerHTML=("please enter your first name");
}else if( errorFirstName.value === errorLastName.value){
    event.preventDefault();
    errorFirstNameTextShow.innerHTML=("first name and last name can't be the same");
} else{
    event.preventDefault();
    errorFirstNameTextShow.innerHTML=("");
}

if(errorLastName.value === "" || errorLastName.value == null ){ 
    errorLastNameTextShow.innerHTML=("please enter your last name");
}
else if(errorLastName.value === errorFirstName.value){
    event.preventDefault();
    errorLastNameTextShow.innerHTML=("last name and first name can't be the same");
}else{
    event.preventDefault();
    errorLastNameTextShow.innerHTML=("");
}

if(regExp.test(errorEmailInput.value)){
    errorEmailTextShow.innerHTML=("");
} else{
    event.preventDefault();
    errorEmailTextShow.innerHTML=("please email a valide email address using @ and .com");
     
}

if(errorPasswordInput.value == null || errorPasswordInput.value.length  <= 3){
    errorPasswordTextShow.innerHTML=("please make sure your password is great then 4");

}else{
    event.preventDefault();
    errorPasswordTextShow.innerHTML=("");

}
});