let form=document.getElementById("form");
let username=document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");



form.addEventListener("submit",(e)=>{
    e.preventDefault()
    validation()
});
 function validation()
 {
    let usernamevalue = username.value.trim();
    let emailvalue = email.value.trim();
    let passwordvalue = password.value.trim();
    let password2value = password2.value.trim();

    if(usernamevalue === '')
    {
        setError(username, "User name cannot be blank");
    }
    else
    {
        setSucces(username);
    }

    if(emailvalue === '')
    {
        setError(email, "email cannot be blank");
    }
     
    else
    {
        setSucces(email);
    }

    if (passwordvalue  === '')
     {
        setError(password, "Password cannot be blank");
    } else 
    {
        setSucces(password);
    }

    if (password2value  === '') 
    {
        setError(password2, "Confirm Password cannot be blank");
    }
     else if (passwordvalue !== password2value) 
    {
        setError(password2, "Passwords do not match");
    } else 
    {
        setSucces(password2);
    }
    
}
function setError( input, message )
{
const formcontrol= input.parentElement;
const small= formcontrol.querySelector('small')
formcontrol.className = 'input-group error';
small.innerText = message;
}

function setSucces(input) 
{
const formcontrol = input.parentElement;
formcontrol.className = 'input-group success';
const small = formcontrol.querySelector('small');
small.innerText = '';
}
