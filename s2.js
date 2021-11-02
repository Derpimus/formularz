const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');



const showError = (input, msg) => {
     //input przechowuje dane inuptów 
     //msg przechowuje placeholdery 
     const formBox = input.parentElement;
     const errorMsg = formBox.querySelector('.error-text');

     formBox.classList.add('error');
     errorMsg.textContent = msg;
}

const clearErorr = input => {
     const formBox = input.parentElement;
     formBox.classList.remove('error');
}

const checkForm = input => {
     input.forEach(element => {
          if (element === '') {
               showError(element, element.placeholder);
          } else {
               console.log('ok')
          }
     })

}

sendBtn.addEventListener('click', e => {
     e.preventDefault();

     checkForm([username, password, password2, email])

})

clearBtn.addEventListener('click', e => {
     e.preventDefault();

     [username, password, password2, email].forEach(element => {
          element.value = '';
     });

})