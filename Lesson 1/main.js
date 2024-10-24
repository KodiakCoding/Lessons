//console.log(document.getElementById('my-form'))
//console.log(document.querySelector('h1'))


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit)

function onSubmit(e)
{
    e.preventDefault();
    console.log(nameInput.value);
    if(nameInput.value === "" || emailInput.value === "" )
    {
        msg.classList.add('error')
        msg.innerHTML = "Please submit both feilds";
        setTimeout( () => msg.remove(),3000)
    }
    else
    {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`))
        userList.appendChild(li);
        nameInput.value="";
        emailInput.value="";
    }
}


