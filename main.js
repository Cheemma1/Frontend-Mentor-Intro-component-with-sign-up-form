
let id =(id)=> document.getElementById(id);
let classes= (classes)=>document.getElementsByClassName (classes);
let firstname= id ('firstname'),
    lastname= id ('lastname'),
    email= id ('email'),
    password= id ('password'),
    form = id('form'),
errorMsg= classes ('error'),
successIcon = classes('success-icon'),
    fail=classes('fail-icon');


form.addEventListener('submit', (e)=>{
e.preventDefault();
active(firstname, 0,'firstname cannot be empty');
active(lastname, 1,'firstname cannot be empty');
active(email, 2 ,'looks like this is not an email');
active(password ,3,'password cannot be empty');

 })

 let active = (id, serial, message)=>{
if(id.value.trim() ===''){
 errorMsg[serial].innerHTML = message; 
 email.placeholder='email@example/com';
id.style.border = "2px solid red";
// icons
 fail[serial].style.opacity = "1";
 successIcon[serial].style.opacity = "0";
}
else{
 errorMsg[serial].innerHTML = "";
 id.style.border = "2px solid green";
//icons
 fail[serial].style.opacity = "0";
 successIcon[serial].style.opacity = "1";   
}
 }