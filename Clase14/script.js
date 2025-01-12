
let username = document.getElementById ('name');
let mail =document.getElementById('mail');
let pass =document.getElementById('pass');
let sendForm =document.getElementById('send-form');

let user= {};

sendForm.addEventListener("click", () => {
    user = {
        nombre: username.value,
        mail: mail.value,
        pass: pass.value
    };

    for(let data in user){
        console.log(data + ": " + user[data]);
    }
});
