import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"
import {auth} from './js/firebase.js';
import { loginCheck } from './js/loginCheck.js'

import './js/signupForm.js';
import './js/logout.js';

onAuthStateChanged (auth, async (user) => {
    loginCheck(user)
})