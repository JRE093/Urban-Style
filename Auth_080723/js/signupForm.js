import { auth } from './firebase.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { showMessage } from './showMessage.js';

const signupForm = document.querySelector('#signup-form');
//console.log(signupForm);
signupForm.addEventListener('submit',async(e) =>{
    e.preventDefault()
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log(email, password);

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);

        const signupModal = document.querySelector('#signupModal');
        const modal = bootstrap.Modal.getInstance(signupModal);
        modal.hide();

        showMessage ("Bienvenido " + userCredential.user.email)

    } catch (error) {
        console.log(error);
        if (error.code  === 'auth/email-already-in-use') {
            showMessage("Este correo ya existe", "error")
            //alert ('Este correo ya esta registrado');
        } else if (error.code === 'auth/invalid-email') {
            showMessage("El correo ingresado no es valido","error")
            //alert ('El correo ingresado no es valido');
        } else if (error.code === 'auth/weak-password') {
            showMessage("La contraseña es debil","error")
            //alert ('La contraseña es muy debil');
        } else if (error.code) {
            showMessage("Hay un error, llama a soporte!", "error")
            //alert ('Hay un error, llame a soporte!')
        }
    }
} ) 

